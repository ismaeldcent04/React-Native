export class Formatter {
  public static formatDate(dateNumber: number): string {
    const dateStr = dateNumber.toString();

    const year = Number(dateStr.slice(0, 4));
    const month = Number(dateStr.slice(4, 6)) - 1;
    const day = Number(dateStr.slice(6, 8));

    const date = new Date(year, month, day);

    return date.toLocaleDateString("es-ES", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  public static formatDateToNumber(date: Date): number {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // meses empiezan en 0
    const day = String(date.getDate()).padStart(2, "0");

    return Number(`${year}${month}${day}`);
  }

  public static formatCurrency(value: number): string {
    return new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP",
    }).format(value);
  }

  public static formatDateUpper = (date: Date): string => {
    return date
      .toLocaleDateString("es-DO", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(",", "")
      .toUpperCase();
  };
}
