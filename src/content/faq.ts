export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "Como funciona a ativação do Smart IPTV BR na minha TV?",
    a: "O Smart IPTV funciona através do endereço MAC da sua Smart TV Samsung, LG ou Android TV. Você nos fornece o código MAC ou configura sua lista M3U / Xtream Codes diretamente no aplicativo com assistência imediata da nossa equipe via WhatsApp.",
  },
  {
    q: "O Smart IPTV BR trava durante jogos de futebol e horários de pico?",
    a: "Não! Nossa infraestrutura conta com servidores dedicados e CDN própria no Brasil (São Paulo e Fortaleza) com balanceamento de carga inteligente, garantindo 0% de buffer mesmo em finais de campeonato e transmissões 4K.",
  },
  {
    q: "Posso fazer um teste grátis do Smart IPTV BR antes de assinar?",
    a: "Sim, disponibilizamos teste gratuito de até 4 horas para você testar a velocidade dos canais, estabilidade das transmissões e qualidade dos filmes e séries direto na sua Smart TV sem compromisso.",
  },
  {
    q: "Em quais marcas de televisão o Smart IPTV BR é compatível?",
    a: "Nosso sistema é 100% compatível com Smart TVs Samsung (Tizen), LG (webOS), TVs TCL, Philips e Sony (Android TV / Google TV), além de TV Box, Fire TV Stick, computadores, tablets e smartphones.",
  },
  {
    q: "Qual a velocidade mínima de internet recomendada?",
    a: "Para canais em qualidade HD recomendamos conexão de 15 Mbps. Para desfrutar dos canais Full HD e conteúdos em 4K Ultra HD com máxima fidelidade e 60 FPS, recomendamos internet de pelo menos 30 a 50 Mbps.",
  },
  {
    q: "O que acontece após o período de teste?",
    a: "Após o teste, basta escolher um dos nossos planos mensais, trimestrais, semestrais ou anuais. A liberação do acesso definitivo é imediata após a confirmação do pagamento via PIX ou cartão.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Preciso de antena ou cabos para assistir ao Smart IPTV BR?",
    a: "Nenhuma antena, receptor ou cabeamento extra é necessário. Basta que sua Smart TV ou aparelho esteja conectado à internet via Wi-Fi de boa qualidade ou preferencialmente cabo de rede ethernet.",
  },
  {
    q: "Como recebo suporte caso tenha dúvidas na configuração do MAC?",
    a: "Nossa equipe técnica especializada está disponível todos os dias via WhatsApp para orientar a configuração do MAC, instalação dos aplicativos e otimização do player.",
  },
  {
    q: "Existe fidelidade contratual ou cobrança recorrente?",
    a: "Não! Nossos planos não possuem fidelidade nem multas. Você paga pelo período contratado e só renova se estiver 100% satisfeito com o serviço.",
  },
  {
    q: "Posso usar a assinatura em mais de uma TV simultaneamente?",
    a: "O plano padrão permite 1 tela simultânea com liberdade para instalar em múltiplos aparelhos. Caso necessite de pontos simultâneos para toda a família, oferecemos telas adicionais com valor promocional.",
  },
];

// Compatibility aliases
export const faqItems = FULL_FAQ.map(item => ({ question: item.q, answer: item.a }));
