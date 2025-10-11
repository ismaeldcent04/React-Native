export class Formatter {
  public static date(value: Date): string {
    return new Date(value).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  public static getRelativeDayLabel(dateString: string): string {
    const inputDate = new Date(dateString);

    // Normalizar a medianoche para comparar solo fechas, no horas
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const targetDate = new Date(inputDate);
    targetDate.setHours(0, 0, 0, 0);

    const diffMs = today.getTime() - targetDate.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Hoy";
    } else if (diffDays === 1) {
      return "Ayer";
    } else {
      return `Hace ${diffDays} días`;
    }
  }
}
