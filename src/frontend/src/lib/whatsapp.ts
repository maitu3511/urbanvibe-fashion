import { WHATSAPP_NUMBER } from "./data";

export function openWhatsApp(productName?: string): void {
  const message = productName
    ? `Hi, I want to order ${productName}.`
    : "Hi, I want to order this product.";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getWhatsAppUrl(
  message = "Hi, I want to order this product.",
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
