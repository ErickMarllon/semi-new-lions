import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STORES } from "@/constants/stores";
import { format, startOfToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { generateHours } from "@/utils/generateHours";
import { useFilteredHours } from "@/hooks/use-filteredHours";
import Iconify from "@/components/Iconify";
import {
  scheduleVisitFormSchema,
  type IScheduleVisitFormData,
} from "@/schemas/scheduleVisit";
import { useMemo } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { toast } from "sonner";
import { ApiError } from "@/http/api-error";
import type { UseMutateFunction } from "@tanstack/react-query";

const defaultValues = {
  name: "",
  phone_number: "",
  email: "",
  store: "",
  date: "",
  time: "",
};
interface ScheduleVisitFormProps {
  submitForm: UseMutateFunction<
    { message: string },
    ApiError,
    IScheduleVisitFormData
  >;
  isPending: boolean;
}
const ScheduleVisitForm = ({
  submitForm,
  isPending,
}: ScheduleVisitFormProps) => {
  const form = useForm<IScheduleVisitFormData>({
    resolver: zodResolver(scheduleVisitFormSchema),
    defaultValues,
  });

  const [selectedDate, selectedStore] = useWatch({
    control: form.control,
    name: ["date", "store"],
  });

  const hours = useMemo(() => generateHours(8, 21, 30), []);
  const filteredHours = useFilteredHours(hours, selectedDate);

  function onSubmit(data: IScheduleVisitFormData) {
    submitForm(data, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (error) => {
        if (error instanceof ApiError) {
          toast.error(error.message);
        }
      },
    });
  }

  function updateDateTime(dateISO: string, time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date(dateISO);
    const dateWithTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
    );

    const normalizedDate = formatInTimeZone(
      dateWithTime,
      "America/Sao_Paulo",
      "yyyy-MM-dd'T'HH:mm:ssXXX",
    );
    form.setValue("date", normalizedDate, {
      shouldValidate: true,
    });
  }

  return (
    <div className="w-full flex flex-col px-4 min-w-screen md:min-w-auto md:max-w-108.5 md:mx-auto">
      <h3 className="font-bold text-4xl md:text-2xl text-center md:text-start py-10 -mt-24 md:mt-0 md:py-1">
        Agende sua visita
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full flex flex-col items-center"
        >
          <div className="grid gap-1 w-full">
            <h3 className="text-base text-start ">
              <strong className="font-bold">|</strong> Dados pessoais
            </h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">nome</FormLabel>
                    <FormControl>
                      <Input required placeholder="Nome completo" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Telefone</FormLabel>
                    <FormControl>
                      <Input required placeholder="Telefone" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full col-span-2">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="email@exemplo.com"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid gap-1 w-full">
            <h3 className="text-base text-start">
              <strong className="font-bold">|</strong> Loja
            </h3>

            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <FormField
                control={form.control}
                name="store"
                render={({ field }) => (
                  <FormItem className="w-full relative col-span-2">
                    <FormLabel className="sr-only">Loja</FormLabel>
                    <Select
                      required
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione uma loja" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent
                        position="popper"
                        side="bottom"
                        align="start"
                        sideOffset={4}
                        avoidCollisions={false}
                      >
                        {STORES.map((store) => (
                          <SelectItem
                            key={store.value}
                            value={store.label}
                            hidden={store.hidden}
                          >
                            {store.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Data</FormLabel>

                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            disabled={!selectedStore}
                            className="w-full justify-start"
                          >
                            <CalendarIcon className="h-4 w-4 mr-2 opacity-60" />
                            {field.value
                              ? format(new Date(field.value), "dd/MM/yyyy", {
                                  locale: ptBR,
                                })
                              : "Data"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="p-0">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(date) => {
                            if (!date) return field.onChange("");

                            const normalizedDate = formatInTimeZone(
                              date,
                              "America/Sao_Paulo",
                              "yyyy-MM-dd'T'HH:mm:ssXXX",
                            );

                            field.onChange(normalizedDate);
                          }}
                          disabled={(date) => date < startOfToday()}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Horário</FormLabel>

                    <Select
                      value={field.value}
                      disabled={!selectedDate}
                      onValueChange={(value) => {
                        field.onChange(value);

                        const currentDate = form.getValues("date");
                        if (!currentDate) return;

                        updateDateTime(currentDate, value);
                      }}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 opacity-60" />
                            <SelectValue placeholder="Horário" />
                          </span>
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {filteredHours.map((hour) => (
                          <SelectItem key={hour} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            variant={"gold"}
            size={"lg"}
            className="w-full text-white font-bold text-md  hover:scale-105 duration-300 cursor-pointer "
            disabled={isPending}
          >
            Agendar visita
            <Iconify
              icon="akar-icons:arrow-right"
              className="min-w-6 min-h-6"
            />
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default ScheduleVisitForm;
