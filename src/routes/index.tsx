import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, ShieldCheck, Tv, Film, Trophy, Headphones, Sparkles, ArrowRight } from "lucide-react";
import { canonicalUrl, pageMeta, SITE_URL } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlanCard, PLANS } from "@/components/PlanCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HOME_FAQ } from "@/content/faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { POSTS } from "@/content/posts";
import heroBg from "@/assets/hero-bg.webp";

const TITLE = "Smart IPTV BR — IPTV sem travar com +35.000 canais em 4K";
const DESCRIPTION =
  "Smart IPTV BR: streaming IPTV premium de alta estabilidade com +35.000 canais, filmes, séries e futebol em 4K. Servidores CDN velozes, ativação imediata e suporte no WhatsApp. Teste grátis.";

const BENEFITS = [
  { icon: Zap, title: "Zero travamento", desc: "Rede anti-congelamento H.265 com CDN dedicada no Brasil que mantém o sinal 100% liso, até em clássicos com recorde de audiência." },
  { icon: Tv, title: "+35.000 canais ao vivo", desc: "Grade nacional e internacional completa em 4K Ultra HD, Full HD e HD, com guia de programação EPG atualizado diariamente." },
  { icon: Film, title: "Filmes e séries on-demand", desc: "Biblioteca completa com lançamentos recém-saídos do cinema, produções originais e catálogo dublado e legendado." },
  { icon: Trophy, title: "Futebol e esportes ao vivo", desc: "Brasileirão, Champions League, Libertadores, UFC, Fórmula 1, NBA e todos os canais de pay-per-view inclusos." },
  { icon: ShieldCheck, title: "Ativação expressa", desc: "Pagamento ágil via Pix com liberação imediata das credenciais Xtream Codes e lista M3U no seu WhatsApp." },
  { icon: Headphones, title: "Suporte humanizado", desc: "Atendimento dedicado via WhatsApp todos os dias para auxílio passo a passo na instalação em qualquer TV ou app." },
];

const STEPS = [
  { n: "01", title: "Escolha seu plano Smart IPTV BR", desc: "Selecione entre os planos mensal, trimestral, semestral ou anual com acesso irrestrito ao catálogo." },
  { n: "02", title: "Ativação via WhatsApp", desc: "Receba seus dados de acesso (DNS, usuário, senha ou link M3U) imediatamente pelo atendimento humano." },
  { n: "03", title: "Instale e assista", desc: "Insira os dados no seu player favorito (Smart TV, TV Box, Fire Stick, celular ou PC) e aproveite a qualidade 4K." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      image: "/og-image.webp",
    }),
    links: [
      { rel: "canonical", href: canonicalUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Smart IPTV BR — IPTV Premium",
          category: "Streaming IPTV",
          brand: { "@type": "Brand", name: "Smart IPTV BR" },
          description: DESCRIPTION,
          image: `${SITE_URL}/og-image.webp`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "8520",
          },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "35",
            highPrice: "280",
            offerCount: PLANS.length,
            url: `${SITE_URL}/planos`,
            availability: "https://schema.org/InStock",
            offers: PLANS.map((p) => ({
              "@type": "Offer",
              name: `Smart IPTV BR ${p.name}`,
              price: p.price.replace(/[^\d]/g, ""),
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Últimos artigos do blog Smart IPTV BR",
          itemListElement: POSTS.slice(0, 6).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Benefits */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Por que escolher o Smart IPTV BR"
            title={<>A experiência IPTV definitiva que <span className="gradient-text">você merece</span></>}
            description="Infraestrutura de ponta, estabilidade em 4K e atendimento humano todos os dias. Faça um teste grátis."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="grid size-11 place-items-center rounded-xl bg-cyan-400/15 text-cyan-400">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-20 sm:py-28 border-t border-cyan-500/15">
        <div className="container-page">
          <SectionHeading
            eyebrow="Planos Smart IPTV BR"
            title="Planos transparentes, sem fidelidade nem surpresas"
            description="O mesmo catálogo completo e servidores velozes em todos os planos — economize escolhendo planos mais longos."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/planos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline">
              Ver detalhes completos dos planos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28 border-t border-cyan-500/15">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Comece a assistir em 3 etapas simples"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative glass-card rounded-2xl p-7">
                <span className="font-display text-4xl font-bold gradient-text">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-cyan-500/15">
        <div className="container-page">
          <div className="glass-card rounded-3xl overflow-hidden relative p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-amber-500/10" aria-hidden="true" />
            <div className="relative">
              <Sparkles className="mx-auto size-8 text-amber-400" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl text-white">
                Experimente o Smart IPTV BR com <span className="gradient-text">teste grátis</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Comprove na prática a velocidade de carregamento e a nitidez da imagem em 4K antes de assinar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton keyword="Teste Grátis Smart IPTV BR" label="Solicitar Teste Grátis" variant="whatsapp" size="lg" />
                <WhatsAppButton keyword="Assinatura Smart IPTV BR" label="Assinar Agora" variant="primary" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-cyan-500/15">
        <div className="container-page">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Tudo o que você precisa saber sobre o Smart IPTV BR"
          />
          <div className="mt-14">
            <FaqAccordion items={HOME_FAQ} />
            <p className="mt-8 text-center text-sm text-slate-400">
              Ainda tem alguma dúvida?{" "}
              <Link to="/faq" className="text-cyan-400 hover:underline">Veja nosso FAQ completo</Link> ou{" "}
              <Link to="/contato" className="text-cyan-400 hover:underline">fale conosco no WhatsApp</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
