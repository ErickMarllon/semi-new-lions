import type { IDiscountFormData } from "@/schemas/discount";

export function createDiscountMessage(data: IDiscountFormData) {
  const { name, phone_number, email, store } = data;

  return `Olá, vim pelo site Lions Seminovos e gostaria de saber mais sobre o desconto.

Nome: ${name || "-"}
Telefone: ${phone_number || "-"}
Email: ${email || "-"}
Loja: ${store || "-"}`;
}
