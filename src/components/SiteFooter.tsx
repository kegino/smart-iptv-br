import { Link } from "@tanstack/react-router";
import { Tv } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-sky-500/20 bg-slate-950 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-amber-400 text-slate-950 font-black">
                <Tv className="size-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Smart IPTV <span className="text-amber-400">BR</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              A melhor plataforma para ativação de listas e streaming no aplicativo Smart IPTV no Brasil. Servidores com rotas de baixa latência e atendimento humanizado diário no WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Smart IPTV</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/planos" className="hover:text-sky-400 transition-colors">Planos Disponíveis</Link></li>
              <li><Link to="/beneficios" className="hover:text-sky-400 transition-colors">Recursos do App</Link></li>
              <li><Link to="/como-funciona" className="hover:text-sky-400 transition-colors">Como Ativar</Link></li>
              <li><Link to="/teste" className="hover:text-sky-400 transition-colors">Solicitar Teste</Link></li>
              <li><Link to="/faq" className="hover:text-sky-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Suporte & Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contato" className="hover:text-sky-400 transition-colors">Atendimento WhatsApp</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Artigos & Tutoriais</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-sky-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-sky-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Smart IPTV BR. Todos os direitos reservados. Ativações rápidas para televisores em todo o Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
