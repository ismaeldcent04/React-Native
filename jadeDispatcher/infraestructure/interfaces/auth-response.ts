export interface AuthResponse {
  oid: number;
  cliente: number;
  contactoNombre: string;
  contactoWhatsapp: string;
  contactoEmail: null | string;
  contactoTelefono: string;
  inactivo: boolean;
  nota: string;
  tipoComunica: number;
  contactoTipo: number | null;
}
