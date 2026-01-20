export function generateHours(start = 8, end = 18, stepMinutes = 30) {
  if (stepMinutes <= 0) {
    throw new Error("stepMinutes must be greater than 0");
  }

  const hours: string[] = [];

  const endHour = Math.floor(end);
  const hasDecimal = end % 1 !== 0;
  const endMinute = hasDecimal ? Math.round((end % 1) * 60) : 0;

  for (let h = start; h <= endHour; h++) {
    for (let m = 0; m < 60; m += stepMinutes) {
      if (h === endHour) {
        if (!hasDecimal && m > 0) continue;
        if (hasDecimal && m > endMinute) continue;
      }

      const hour = String(h).padStart(2, "0");
      const minute = String(m).padStart(2, "0");
      hours.push(`${hour}:${minute}`);
    }
  }

  return hours;
}
