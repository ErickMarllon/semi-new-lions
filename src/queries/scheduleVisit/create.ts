import type { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ScheduleVisitService } from "@/services/scheduleVisit";
import type { IScheduleVisitFormData } from "@/schemas/scheduleVisit";
import { ApiError } from "@/http/api-error";

export function useCreateScheduleVisit() {
  return useMutation<{ message: string }, ApiError, IScheduleVisitFormData>({
    mutationFn: async (data: IScheduleVisitFormData) => {
      const response: AxiosResponse<{ message: string }> =
        await ScheduleVisitService.create(data);
      return response.data;
    },
  });
}
