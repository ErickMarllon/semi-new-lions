import { z } from "zod";
import { discountFormSchema } from "./discount";

export const scheduleVisitFormSchema = discountFormSchema.extend({
  date: z.string().min(1, "Data inválida"),
  time: z.string().min(1, "Hora inválida"),
});

export type IScheduleVisitFormData = z.infer<typeof scheduleVisitFormSchema>;
