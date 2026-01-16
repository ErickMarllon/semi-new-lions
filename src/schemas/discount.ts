import { z } from "zod";

export const discountFormSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  phone_number: z.string().min(2, "Número incorreto"),
  email: z.email("Email inválido"),
  store: z.string("Email inválido"),
});

export type IDiscountFormData = z.infer<typeof discountFormSchema>;
