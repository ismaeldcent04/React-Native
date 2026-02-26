export class Formatter {
  public static dataDate(value: Date): string {
    const inputDate = new Date(value);
    const now = new Date();

    const diffMs = now.getTime() - inputDate.getTime();

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Menos de 1 hora → minutos
    if (diffMinutes < 60) {
      const minutes = diffMinutes <= 0 ? 1 : diffMinutes;
      return minutes === 1 ? "Hace 1 minuto" : `Hace ${minutes} minutos`;
    }

    // Menos de 1 día → horas
    if (diffHours < 24) {
      return diffHours === 1 ? "Hace 1 hora" : `Hace ${diffHours} horas`;
    }

    // Ayer
    if (diffDays === 1) {
      return "Ayer";
    }

    // Más días
    return `Hace ${diffDays} días`;
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
