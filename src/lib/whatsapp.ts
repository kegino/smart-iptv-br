export const WHATSAPP_PHONE = "5511933821957";

export function whatsappUrl(keyword: string = "Smart IPTV BR"): string {
  const message = `Olá, Gostaria de falar sobre o ${keyword}`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}
