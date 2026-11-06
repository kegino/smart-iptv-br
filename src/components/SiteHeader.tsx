import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Tv, Sparkles } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/planos", label: "Planos" },
  { to: "/beneficios", label: "Vantagens" },
  { to: "/como-funciona", label: "Como Ativar" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Suporte" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-sky-500/20 bg-slate-950/85 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-amber-400 text-slate-950 font-black shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform">
            <Tv className="size-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-black tracking-tight text-white group-hover:text-sky-400 transition-colors">
              Smart IPTV <span className="text-amber-400">BR</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
              Streaming & Ativação 4K
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-sky-400 font-semibold" }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <WhatsAppButton keyword="Teste Rápido Smart IPTV BR Topo" label="Teste Grátis" variant="whatsapp" size="sm" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-b border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-4 text-base font-medium text-slate-300">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="hover:text-sky-400 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <WhatsAppButton keyword="Teste Grátis Smart IPTV BR Menu" label="Solicitar Teste Grátis" variant="whatsapp" size="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
