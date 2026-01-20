import { api } from "@/http/api";
import type { IScheduleVisitFormData } from "@/schemas/scheduleVisit";
import type { AxiosResponse } from "axios";

const BASE_PATH = "/agendamento";

export class ScheduleVisitService {
  public static async create(
    data: IScheduleVisitFormData,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post(BASE_PATH, data);
  }
}
