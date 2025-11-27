# AI Ateliux – Automação inteligente para Instagram e Facebook 📱✨

Landing page e dashboard demo de um SaaS B2B focado em automação de Instagram/Facebook com IA. Aqui você encontra a home, seções internas e microcopy em português, pronta para personalizar ou integrar ao seu backend.

## 🔥 O que é a AI Ateliux
- Agende e publique posts e Stories em massa.
- Dispare comentários estratégicos e DMs automáticas com agente de IA.
- Crie fluxos “se acontecer X, faça Y” para campanhas, funis e follow-ups.
- Respostas inteligentes no Direct para leads, dúvidas e vendas.
- Painel único com métricas de alcance, engajamento e interações.

## 🚀 Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## 📦 Instalação
```bash
git clone <seu-fork-ou-repo>
cd frontend
npm install
```

## 🛠 Desenvolvimento
```bash
npm run dev
# abre em http://localhost:3000
```

## 🏗 Build de produção
```bash
npm run build
npm run start
```

## 🌐 Deploy
- Pronto para Vercel/Netlify/serviço Node. Suba o `.next` via `npm run build` + `npm run start` ou conecte o repositório na Vercel.

## 🧭 Estrutura principal
- `app/page.tsx` – home com Hero, GlobeHero (segunda dobra), Recursos, Workflow, Depoimentos, Integrações.
- `components/sections/*` – seções isoladas para reutilizar/editar copy.
- `app/contact`, `app/integrations`, `app/logs`, `app/pricing` – páginas internas com texto em PT-BR.
- `public/` – assets (globo, fundos).

## ✏️ Como personalizar para seu Instagram
1) Troque CTAs e textos em `components/sections/Hero.tsx` e `GlobeHero.tsx` conforme sua oferta.  
2) Ajuste os cards de features/workflow para refletir suas automações reais.  
3) Atualize depoimentos fictícios em `Testimonials.tsx`.  
4) Ajuste planos em `app/pricing/page.tsx` se já tiver tiers e limites definidos.  
5) Atualize metas de SEO em `app/layout.tsx` (title/description).

## 🔒 Segurança e conformidade
- Texto já destaca conexão segura via Meta/Instagram e controle do usuário sobre automações.  
- Adapte para o fluxo real de OAuth/permissions do seu backend.

## 🧑‍💻 Scripts úteis
- `npm run lint` – checa lint.
- `npm run dev` – desenvolvimento.
- `npm run build` – build de produção.
- `npm run start` – serve produção (após build).

## 🤝 Contato
- Use a página `/contact` para direcionar leads ao seu time.  
- Ajuste o e-mail/CTA conforme seu processo comercial.

## 📸 Inspiração para Instagram
- Hero copy e CTAs curtos e diretos para “Criar conta” ou “Ver dashboard em ação”.  
- Destaque sempre: automação de postagens, comentários/DMs com IA, fluxos e métricas.  
- Benefícios-chave para posts: “+tempo livre”, “respostas 24/7”, “mais conversões no Direct”, “painel único”.

Curadoria: Ateliux – automação inteligente para social media, e-commerce, agências e criadores. 🖤
