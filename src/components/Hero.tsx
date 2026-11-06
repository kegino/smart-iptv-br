import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, Tv, ShieldCheck, Flame } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.webp"
          alt="Smart IPTV BR Background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c16] via-[#070c16]/85 to-[#070c16]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c16] via-transparent to-[#070c16]/90" />
      </div>

      <div className="container-page py-20 text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/60 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md">
          <Zap className="size-3.5 text-amber-400" />
          <span>Ativação Expressa e Listas de Alta Velocidade no Brasil</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
          O Melhor do <span className="gradient-text">Smart IPTV BR</span> em 4K
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ative sua lista no Smart IPTV com facilidade. Mais de 35.000 canais ao vivo, futebol sem travamento e catálogo cinematográfico completo com rotas de baixa latência em todo o Brasil.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            keyword="Teste Rápido Smart IPTV BR"
            label="Solicitar Teste Grátis no WhatsApp"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Planos Smart IPTV BR"
            label="Ver Planos no Brasil"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-sky-400">Ativação por MAC</span>
            <p className="text-xs text-slate-400 mt-0.5">Rápido e descomplicado</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">+35.000 Canais</span>
            <p className="text-xs text-slate-400 mt-0.5">Grade completa liberada</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-sky-400">CDN no Brasil</span>
            <p className="text-xs text-slate-400 mt-0.5">Rotas de fibra direta</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">Futebol Sem Delay</span>
            <p className="text-xs text-slate-400 mt-0.5">Transmissões a 60 FPS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
