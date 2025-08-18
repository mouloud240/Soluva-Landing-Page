import Navbar from "../components/Navbar.jsx";

const dict = {
  en: {
    eyebrow: "Engineering Excellence. Business Results.",
    heroPre: "Transforming Businesses with ",
    heroEm: "Scalable Software",
    heroPost: " That Delivers Results.",
    heroSubtitle:
      "Not just code — we engineer growth, efficiency, and long‑term competitive advantage.",
    primaryCta: "Book a Free Strategy Call",
    secondaryCta: "Let’s Build Your Advantage",
    nav: { services: "Services", approach: "Approach", cases: "Case Studies", why: "Why Us", contact: "Contact" },
    ctaQuote: "Get a quote",
    success: "Success Stories",
    getQuote: "Get a custom quote in 24h →",
    whyTitle: "Why Partner With Us",
    whyDesc:
      "Business‑first mindset. End‑to‑end delivery. Transparent pricing. Bilingual support (FR/EN/AR).",
    lead: { name: "Name", email: "Email", company: "Company", submit: "Get Quote →" },
    approachParagraph:
      "We don’t just deliver features — we deliver measurable outcomes: faster time‑to‑market, reduced operational costs, and scalable foundations.",
    services: [
      {
        title: "Backend Engineering",
        desc: "Future-proof, high-performance systems to cut downtime, reduce costs, and support scale.",
        tech: "NestJS · Prisma · Redis · PostgreSQL",
      },
      {
        title: "Frontend",
        desc: "Seamless web & mobile experiences that boost engagement and conversions.",
        tech: "Next.js · Flutter",
      },
      {
        title: "System Design & Cloud",
        desc: "Secure, reliable infrastructure that reduces risk and accelerates growth.",
        tech: "AWS · GCP · CI/CD",
      },
      {
        title: "UI/UX",
        desc: "Interfaces that delight users and increase retention.",
        tech: "Research · Design Systems",
      },
    ],
    approachHeading: "Business‑Driven Engineering",
    approachSteps: ["Discovery", "Strategy", "Agile Build", "Launch", "Scale & Support"],
    cases: [
      { title: "E‑commerce Platform", stat: "2× conversion in 3 months", detail: "Optimized checkout & performance" },
      { title: "IoT Security Platform", stat: "30m → 5m response time", detail: "Event pipeline & alerting" },
      { title: "Task App", stat: "1k → 100k users, zero downtime", detail: "Horizontal scaling & caching" },
    ],
    whyTiles: [
      { k: "Business‑first", v: "Outcomes over output: ROI, savings, growth." },
      { k: "End‑to‑end", v: "Design → deployment → maintenance." },
      { k: "Transparent", v: "Clear pricing, flexible engagement models." },
      { k: "Bilingual", v: "French, English, Arabic." },
    ],
    finalHeading: "Engineering Excellence. Business Results.",
    finalSubtext: "Book your free consultation or get a custom quote in 24h.",
    finalBookCta: "Book Your Free Consultation",
    whatsappLabel: "WhatsApp",
    callLabel: "Call Us",
    contact: {
      title: "Let’s Build Something Great",
      intro:
        "Tell us about your project. Whether you need a new product, architecture review, or performance optimization, we can help.",
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      selectTopic: "Select a topic",
      topics: [
        "New project",
        "Architecture & scaling",
        "Performance optimization",
        "UI/UX & product design",
        "Cloud & DevOps",
      ],
      message: "Tell us about your project...",
      send: "Send Message",
    },
  },
  fr: {
    eyebrow: "Excellence d’ingénierie. Résultats business.",
    heroPre: "Transformer les entreprises avec ",
    heroEm: "des logiciels scalables",
    heroPost: " orientés résultats.",
    heroSubtitle:
      "Pas seulement du code — nous concevons la croissance, l’efficacité et un avantage concurrentiel durable.",
    primaryCta: "Réserver un appel stratégique gratuit",
    secondaryCta: "Construisons votre avantage",
    nav: { services: "Services", approach: "Approche", cases: "Études de cas", why: "Pourquoi nous", contact: "Contact" },
    ctaQuote: "Demander un devis",
    success: "Succès clients",
    getQuote: "Obtenir un devis en 24h →",
    whyTitle: "Pourquoi collaborer avec nous",
    whyDesc:
      "Esprit business‑first. Delivery bout‑à‑bout. Tarifs transparents. Support bilingue (FR/EN/AR).",
    lead: { name: "Nom", email: "Email", company: "Entreprise", submit: "Obtenir un devis →" },
    approachParagraph:
      "Nous ne livrons pas seulement des fonctionnalités — nous livrons des résultats mesurables : un time‑to‑market plus rapide, des coûts opérationnels réduits et des fondations scalables.",
    services: [
      {
        title: "Ingénierie Backend",
        desc: "Systèmes performants et pérennes pour réduire les coûts, la panne et soutenir la croissance.",
        tech: "NestJS · Prisma · Redis · PostgreSQL",
      },
      {
        title: "Frontend",
        desc: "Expériences web & mobile fluides qui augmentent l’engagement et les conversions.",
        tech: "Next.js · Flutter",
      },
      {
        title: "Architecture Système & Cloud",
        desc: "Infrastructure sécurisée et fiable qui réduit les risques et accélère la croissance.",
        tech: "AWS · GCP · CI/CD",
      },
      {
        title: "UI/UX",
        desc: "Interfaces qui enchantent les utilisateurs et augmentent la rétention.",
        tech: "Recherche · Design Systems",
      },
    ],
    approachHeading: "Ingénierie orientée business",
    approachSteps: ["Découverte", "Stratégie", "Construction agile", "Lancement", "Échelle & Support"],
    cases: [
      { title: "Plateforme e‑commerce", stat: "2× de conversion en 3 mois", detail: "Checkout optimisé & performance" },
      { title: "Plateforme sécurité IoT", stat: "30m → 5m temps de réponse", detail: "Pipeline d’événements & alerting" },
      { title: "Application de tâches", stat: "1k → 100k utilisateurs, zéro downtime", detail: "Scalabilité horizontale & cache" },
    ],
    whyTiles: [
      { k: "Business‑first", v: "Des résultats avant tout: ROI, économies, croissance." },
      { k: "De bout‑en‑bout", v: "Design → déploiement → maintenance." },
      { k: "Transparent", v: "Tarification claire, modèles flexibles." },
      { k: "Bilingue", v: "Français, Anglais, Arabe." },
    ],
    finalHeading: "Excellence d’ingénierie. Résultats business.",
    finalSubtext: "Réservez une consultation gratuite ou obtenez un devis en 24h.",
    finalBookCta: "Réserver une consultation gratuite",
    whatsappLabel: "WhatsApp",
    callLabel: "Appelez‑nous",
    contact: {
      title: "Construisons quelque chose d’extraordinaire",
      intro:
        "Parlez‑nous de votre projet. Nouveau produit, revue d’architecture ou optimisation des performances : nous pouvons aider.",
      name: "Votre nom",
      email: "Votre email",
      subject: "Sujet",
      selectTopic: "Choisir un sujet",
      topics: [
        "Nouveau projet",
        "Architecture & montée en charge",
        "Optimisation des performances",
        "UI/UX & conception produit",
        "Cloud & DevOps",
      ],
      message: "Parlez‑nous de votre projet...",
      send: "Envoyer le message",
    },
  },
  ar: {
    eyebrow: "هندسة فائقة. نتائج أعمال.",
    heroPre: "نحوّل الأعمال ب",
    heroEm: "برمجيات قابلة للتوسع",
    heroPost: " تُحقق نتائج ملموسة.",
    heroSubtitle:
      "لسنا مجرد كود — نحن نُهندِس النمو والكفاءة وميزة تنافسية طويلة الأمد.",
    primaryCta: "احجز استشارة مجانية",
    secondaryCta: "لنَبنِ ميزتك التنافسية",
    nav: { services: "الخدمات", approach: "المنهجية", cases: "دراسات حالة", why: "لماذا نحن", contact: "تواصل" },
    ctaQuote: "احصل على عرض سعر",
    success: "قصص النجاح",
    getQuote: "احصل على عرض خلال 24 ساعة →",
    whyTitle: "لماذا تتعاون معنا",
    whyDesc:
      "عقلية تركز على الأعمال. تسليم متكامل. تسعير شفاف. دعم بلغات FR/EN/AR.",
    lead: { name: "الاسم", email: "البريد الإلكتروني", company: "الشركة", submit: "احصل على عرض →" },
    approachParagraph:
      "نحن لا نُسلّم ميزات فحسب — بل نُحقق نتائج قابلة للقياس: تسريع الوصول إلى السوق، تقليل التكاليف التشغيلية، وأُسس قابلة للتوسع.",
    services: [
      {
        title: "هندسة Backend",
        desc: "أنظمة عالية الأداء وقابلة للتطوير لتقليل التكاليف والتوقف ودعم التوسع.",
        tech: "NestJS · Prisma · Redis · PostgreSQL",
      },
      {
        title: "الواجهة الأمامية",
        desc: "تجارب ويب وجوال سلسة تعزز التفاعل والتحويلات.",
        tech: "Next.js · Flutter",
      },
      {
        title: "تصميم الأنظمة والسحابة",
        desc: "بنية تحتية آمنة وموثوقة تقلل المخاطر وتسرّع النمو.",
        tech: "AWS · GCP · CI/CD",
      },
      {
        title: "تجربة/واجهة المستخدم",
        desc: "واجهات تُسعد المستخدمين وتزيد الاحتفاظ.",
        tech: "بحث · أنظمة تصميم",
      },
    ],
    approachHeading: "هندسة موجّهة للأعمال",
    approachSteps: ["الاكتشاف", "الاستراتيجية", "بناء مرن", "الإطلاق", "التوسّع والدعم"],
    cases: [
      { title: "منصة تجارة إلكترونية", stat: "×2 في التحويل خلال 3 أشهر", detail: "تحسين مسار الدفع والأداء" },
      { title: "منصة أمن إنترنت الأشياء", stat: "30 دقيقة → 5 دقائق زمن الاستجابة", detail: "خط أنابيب للأحداث وتنبيه" },
      { title: "تطبيق مهام", stat: "1k → 100k مستخدم دون توقف", detail: "توسّع أفقي وتخزين مؤقت" },
    ],
    whyTiles: [
      { k: "أولوية الأعمال", v: "نتائج ملموسة: عائد، توفير، نمو." },
      { k: "حل متكامل", v: "تصميم → نشر → صيانة." },
      { k: "شفافية", v: "تسعير واضح ونماذج مرنة." },
      { k: "دعم متعدد اللغات", v: "العربية، الإنجليزية، الفرنسية." },
    ],
    finalHeading: "هندسة فائقة. نتائج أعمال.",
    finalSubtext: "احجز استشارة مجانية أو احصل على عرض خلال 24 ساعة.",
    finalBookCta: "احجز استشارة مجانية",
    whatsappLabel: "واتساب",
    callLabel: "اتصل بنا",
    contact: {
      title: "لنَبنِ شيئًا عظيمًا",
      intro:
        "أخبرنا عن مشروعك. سواءً منتج جديد، مراجعة للهندسة، أو تحسين الأداء، يمكننا المساعدة.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      selectTopic: "اختر موضوعًا",
      topics: [
        "مشروع جديد",
        "الهندسة والتوسّع",
        "تحسين الأداء",
        "تصميم المنتج وواجهة المستخدم",
        "السحابة وعمليات DevOps",
      ],
      message: "أخبرنا عن مشروعك...",
      send: "إرسال الرسالة",
    },
  },
};

export default function Home({ searchParams }) {
  const rawLang = searchParams?.lang || "en";
  const lang = ["en", "fr", "ar"].includes(rawLang) ? rawLang : "en";
  const t = dict[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <div className="font-sans" dir={dir}>
      <Navbar lang={lang} labels={{ nav: t.nav, ctaQuote: t.ctaQuote }} />
      {/* Hero */}
      <section id="hero" className="hero-bg relative min-h-[88vh] flex items-center pt-24">
        <div className="grid-overlay" />
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1200px] container-padding py-16 md:py-20">
            <div className="flex flex-col gap-8">
              <p className="text-xs sm:text-sm text-muted/80 uppercase tracking-[0.2em] animate-rise" style={{ animationDelay: '80ms' }}>
                {t.eyebrow}
              </p>
              <div className="animate-rise" style={{ animationDelay: '100ms' }}>
                <span className="brand-mark text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">Soluva</span>
              </div>
              <h1 className="heading-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold max-w-3xl md:max-w-4xl animate-rise" style={{ animationDelay: '160ms' }}>
                {t.heroPre}
                <span className="text-gold">{t.heroEm}</span>
                {t.heroPost}
              </h1>
              <p className="text-base md:text-xl text-muted max-w-xl md:max-w-2xl animate-rise" style={{ animationDelay: '220ms' }}>
                {t.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-rise w-fit" style={{ animationDelay: '300ms' }}>
                <a href="#contact" className="cta-primary h-12 px-6 inline-flex items-center justify-center text-sm font-medium">
                  {t.primaryCta}
                </a>
                <a href="#contact" className="cta-secondary h-12 px-6 inline-flex items-center justify-center text-sm font-medium text-foreground">
                  {t.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Services */}
      <section id="services" className="relative py-14 md:py-20 gold-glow">
        <div className="mx-auto max-w-[1200px] container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((s, i) => (
              <div key={s.title} className="card p-6 flex flex-col gap-3 animate-rise" style={{ animationDelay: `${120 + i * 80}ms` }}>
                <div className="h-10 w-10 rounded-lg" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.35), rgba(212,175,55,0.05))', border: '1px solid var(--border)' }} />
                <h3 className="heading-lg text-xl font-semibold">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
                <p className="text-xs text-muted/80">{s.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative py-14 md:py-20 gold-glow">
        <div className="mx-auto max-w-[1200px] container-padding">
          <div className="card p-8">
            <h2 className="heading-lg text-3xl font-semibold mb-6">{t.approachHeading}</h2>
            <p className="text-muted max-w-3xl mb-6 md:mb-8 text-sm md:text-base">{t.approachParagraph}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {t.approachSteps.map((step, idx) => (
                <div key={step} className="p-4 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)]">
                  <div className="text-gold text-sm mb-2">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="font-medium">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="relative py-14 md:py-20 gold-glow">
        <div className="mx-auto max-w-[1200px] container-padding">
          <div className="flex items-end justify-between mb-6">
            <h2 className="heading-lg text-2xl md:text-3xl font-semibold">{t.success}</h2>
            <a href="#contact" className="hidden sm:inline text-sm text-gold hover:underline">{t.getQuote}</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.cases.map((c) => (
              <div key={c.title} className="card p-6 flex flex-col gap-3">
                <div className="h-36 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.18),transparent_60%)] border border-[var(--border)]" />
                <div className="font-medium">{c.title}</div>
                <div className="text-gold">{c.stat}</div>
                <div className="text-sm text-muted">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section id="why" className="relative py-14 md:py-20 gold-glow">
        <div className="mx-auto max-w-[1200px] container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="col-span-1">
              <h2 className="heading-lg text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{t.whyTitle}</h2>
              <p className="text-muted text-sm md:text-base">{t.whyDesc}</p>
            </div>
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.whyTiles.map((d) => (
                <div key={d.k} className="card p-6">
                  <div className="font-medium mb-1">{d.k}</div>
                  <div className="text-sm text-muted">{d.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                q: '“They felt like a true partner focused on our KPIs.”',
                a: 'CEO, E‑commerce brand',
              },
              {
                q: '“Clear communication, on time, and performance exceeded expectations.”',
                a: 'CTO, SaaS startup',
              },
              {
                q: '“We scaled painlessly and cut infrastructure costs by 28%.”',
                a: 'Founder, Productivity app',
              },
            ].map((t) => (
              <div key={t.q} className="card p-6">
                <div className="mb-3">{t.q}</div>
                <div className="text-sm text-muted">{t.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="relative py-14 md:py-20 gold-glow">
        <div className="mx-auto max-w-[1200px] container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="card p-6 md:p-8">
              <h3 className="heading-lg text-xl md:text-2xl font-semibold mb-2">{t.contact.title}</h3>
              <p className="text-muted text-sm md:text-base mb-6">{t.contact.intro}</p>

              <div className="space-y-5 md:space-y-6 text-sm">
                <div>
                  <div className="form-label">Email</div>
                  <div className="flex items-center gap-3 text-muted">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]">
                      @
                    </span>
                    <span>mouloudhasrane@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="form-label">GitHub</div>
                  <div className="flex items-center gap-3 text-muted">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]">
                      GH
                    </span>
                    <span>mouloud240</span>
                  </div>
                </div>
                <div>
                  <div className="form-label">LinkedIn</div>
                  <div className="flex items-center gap-3 text-muted">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]">
                      in
                    </span>
                    <span>Mouloud Hasrane</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-[var(--border)] pt-4">
                  <div className="form-label">What I can help with</div>
                  <ul className="text-sm text-muted space-y-2.5">
                    <li>System architecture design & review</li>
                    <li>API development with NestJS & TypeScript</li>
                    <li>Performance optimization & scaling</li>
                    <li>Database design & optimization</li>
                    <li>Cloud & DevOps setup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6 md:p-8">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="sm:col-span-1">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input id="name" className="form-control" placeholder={t.contact.name} />
                </div>
                <div className="sm:col-span-1">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-control" placeholder={t.contact.email} />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="subject">{t.contact.subject}</label>
                  <select id="subject" className="form-control">
                    <option>{t.contact.selectTopic}</option>
                    {t.contact.topics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" className="form-control form-textarea" placeholder={t.contact.message} />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mt-1 w-full min-w-0">
                  <div className="flex gap-2">
                    <a href="#lead" className="cta-secondary h-11 px-5 inline-flex items-center justify-center text-sm font-medium">{t.finalBookCta}</a>
                    <a href="tel:+10000000000" className="cta-secondary h-11 px-5 inline-flex items-center justify-center text-sm font-medium">{t.callLabel}</a>
                  </div>
                  <button type="submit" className="btn-send w-full sm:w-auto max-w-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h9" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 5l7 7-7 7" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {t.contact.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
