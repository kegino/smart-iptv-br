import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  keyword?: string;
  label?: string;
  variant?: "primary" | "whatsapp" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  keyword = "Sky Flix",
  label = "Falar no WhatsApp",
  variant = "whatsapp",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-bold gap-1.5",
    md: "px-5 py-2.5 text-sm font-bold gap-2",
    lg: "px-6 py-3.5 text-base font-extrabold gap-2.5",
  }[size];

  const variantClasses = {
    whatsapp:
      "bg-[#25D366] text-slate-950 hover:bg-[#20ba5a] shadow-lg shadow-emerald-950/40 border border-emerald-400/30",
    primary:
      "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-950/40 border border-amber-300/40",
    outline:
      "border-2 border-cyan-400/40 text-cyan-300 hover:bg-cyan-950/30 backdrop-blur-sm",
  }[variant];

  return (
    <a
      href={whatsappUrl(keyword)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} via WhatsApp`}
      className={`inline-flex items-center justify-center rounded-xl transition-all duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
