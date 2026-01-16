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
import { createDiscountMessage } from "@/utils/createDiscountMessage";
import { STORES } from "@/constants/stores";
import vehicleImg from "@/assets/vehicle-BJXu40DY.png";

const defaultValues = {
  name: "",
  phone_number: "",
  email: "",
  store: "",
};
const DiscountForm = () => {
  const form = useForm<IDiscountFormData>({
    resolver: zodResolver(discountFormSchema),
    defaultValues,
  });

  function onSubmit(data: IDiscountFormData) {
    const message = createDiscountMessage(data);

    const link = generateWhatsAppLink({ message });
    window.open(link, "_blank");
  }

  return (
    <Form {...form}>
      <div className="w-full flex flex-col items-center">
        <h3 className="font-bold text-2xl text-center py-1">
          GANHE UM DESCONTO DE ATÉ{" "}
          <span className="text-gold">R$ 3.000,00</span>
        </h3>
        <figure>
          <img src={vehicleImg} alt="Carros para o banner flutuante" />
        </figure>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 max-w-md flex flex-col items-center"
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
                  className="bg-gray-50/30! text-white! placeholder-white!"
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
                  placeholder="Seu nome"
                  {...field}
                  className="bg-gray-50/30! text-white!   placeholder-white!"
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
                  className="bg-gray-50/30! text-white! placeholder-white!"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="store"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Loja</FormLabel>
              <Select required onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full bg-gray-50/30! text-white!">
                    <SelectValue placeholder="Selecione uma loja" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
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

        <Button
          type="submit"
          className="w-full bg-gold hover:bg-gold text-brand font-bold text-md max-w-32 hover:scale-105 duration-300 cursor-pointer"
        >
          Solicitar
        </Button>
      </form>
    </Form>
  );
};
export default DiscountForm;
