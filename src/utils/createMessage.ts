import type { IDiscountFormData } from "@/schemas/discount";
import type { Vehicle } from "@/views/Catalog/types";

export type CreateMessageInput = IDiscountFormData & {
  vehicle?: Vehicle;
  type: "quotation" | "discount";
};

export function createMessage(data: CreateMessageInput) {
  const { name, phone_number, email, store, vehicle, type } = data;

  const header =
    type === "quotation"
      ? "Olá, vim pelo site Lions Seminovos e gostaria de solicitar uma cotação."
      : "Olá, vim pelo site Lions Seminovos e gostaria de saber mais sobre o desconto.";

  const baseInfo = `
Nome: ${name || "-"}
Telefone: ${phone_number || "-"}
Email: ${email || "-"}
Loja: ${store || "-"}`;

  const vehicleInfo = vehicle
    ? `

Dados do veículo:
Marca: ${vehicle.marca || "-"}
Modelo: ${vehicle.modelo || "-"}
Ano de fabricação: ${vehicle.ano_fabricacao || "-"}
Ano do modelo: ${vehicle.ano_modelo || "-"}
Combustível: ${vehicle.combustivel || "-"}
Cor: ${vehicle.cor || "-"}`
    : "";

  return `${header}

${baseInfo}${vehicleInfo}`;
}
