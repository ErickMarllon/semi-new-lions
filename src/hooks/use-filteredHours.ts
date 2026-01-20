import { filterHoursByDate } from "@/utils/filterHoursByDate";
import { useMemo } from "react";

export function useFilteredHours(
  hours: string[],
  selectedDate?: string | Date,
) {
  return useMemo(
    () => filterHoursByDate(hours, selectedDate),
    [hours, selectedDate],
  );
}
