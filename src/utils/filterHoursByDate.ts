import { format, isSameDay } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export function filterHoursByDate(
  hours: string[],
  selectedDate?: string | Date,
  timezone = "America/Sao_Paulo",
) {
  if (!selectedDate) return hours;

  const selected = new Date(selectedDate);
  const now = toZonedTime(new Date(), timezone);

  if (!isSameDay(selected, now)) {
    return hours;
  }

  const currentTime = format(now, "HH:mm");

  return hours.filter((hour) => hour > currentTime);
}
