export class Formatter {
  public static date(value: Date): string {
    return new Date(value).toLocaleTimeString("en-US", {
      timeZone: "America/Santo_Domingo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  public static dataDate(value: Date): string {
    const fechaRD = new Date(
      value.toLocaleString("en-US", { timeZone: "America/Santo_Domingo" })
    );

    const año = fechaRD.getFullYear();
    const mes = String(fechaRD.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaRD.getDate()).padStart(2, "0");
    const hora = String(fechaRD.getHours()).padStart(2, "0");
    const minuto = String(fechaRD.getMinutes()).padStart(2, "0");
    const segundo = String(fechaRD.getSeconds()).padStart(2, "0");
    const milisegundos = String(fechaRD.getMilliseconds()).padStart(3, "0");

    return `${año}-${mes}-${dia}T${hora}:${minuto}:${segundo}.${milisegundos}`;
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
