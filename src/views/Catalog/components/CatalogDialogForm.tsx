import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

import { discountFormSchema, type IDiscountFormData } from "@/schemas/discount";
import { generateWhatsAppLink } from "@/utils/generateWhatsAppLink";
import { STORES } from "@/constants/stores";
import { Separator } from "@/components/ui/separator";
import type { Vehicle } from "../types";
import { formatKm } from "@/utils/formatKm";
import { createMessage } from "@/utils/createMessage";

const defaultValues = {
  name: "",
  phone_number: "",
  email: "",
  store: "",
};
interface Props {
  open: Vehicle | null;
}
const CatalogDialogForm = ({ open }: Props) => {
  const form = useForm<IDiscountFormData>({
    resolver: zodResolver(discountFormSchema),
    defaultValues,
  });

  function onSubmit(data: IDiscountFormData) {
    if (!open) return;
    const message = createMessage({
      ...data,
      vehicle: open,
      type: "quotation",
    });

    const link = generateWhatsAppLink({ message });
    window.open(link, "_blank");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 w-full flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">nome</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Seu nome"
                  className="bg-gray-50/90! text-primary-foreground! "
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Telefone</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="Seu telefone"
                  {...field}
                  className="bg-gray-50/90! text-primary-foreground! "
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  required
                  placeholder="email@exemplo.com"
                  {...field}
                  className="bg-gray-50/90! text-primary-foreground! "
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="store"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel className="sr-only">Loja</FormLabel>
              <Select required onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-gray-50/90! *:data-[slot=select-value]:text-primary-foreground">
                    <SelectValue placeholder="Selecione uma loja" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  avoidCollisions={false}
                  className="*:data-slot=[select-item]:text-primary-foreground"
                >
                  {STORES.map((store) => (
                    <SelectItem
                      key={store.value}
                      value={store.label}
                      hidden={store.hidden}
                      className="text-black!"
                    >
                      {store.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        {open && (
          <div className="flex flex-col items-center mt-2 gap-1">
            <Separator className="bg-gradient-gold h-0.5! rounded-full max-w-20!" />
            <h2 className="text-black font-extrabold text-2xl">
              {open?.marca} {open?.modelo}
            </h2>
            <div className="flex gap-2 text-xs text-black">
              <span className="gap-1 text-[1rem] text-gray-800">
                {open?.ano_fabricacao}/{open?.ano_modelo}
              </span>
              <span className="text-[1rem] text-gray-800">|</span>
              <span className="gap-1 text-[1rem] text-gray-800">
                {formatKm(open.km)} km
              </span>
              <span className="text-[1rem] text-gray-800">|</span>
              <span className="gap-1 text-[1rem] text-gray-800">
                {open.combustivel}
              </span>
              <span className="text-[1rem] text-gray-800">|</span>
              <span className="text-[1rem] text-gray-800">{open.cor}</span>
            </div>
          </div>
        )}

        <Button
          type="submit"
          variant={"gold"}
          className="w-full font-bold text-md text-white max-w-32 hover:scale-105 duration-300 cursor-pointer "
        >
          Solicitar
        </Button>
      </form>
    </Form>
  );
};
export default CatalogDialogForm;
