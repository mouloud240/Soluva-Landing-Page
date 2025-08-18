import React from 'react';

const Cases = ({ t }) => {
  return (
    <section id="cases" className="relative py-14 md:py-20 gold-glow">
      <div className="mx-auto max-w-[1200px] container-padding">
        <div className="flex items-end justify-between mb-6">
          <h2 className="heading-lg text-2xl md:text-3xl font-semibold">
            {t.success}
          </h2>
          <a
            href="#contact"
            className="hidden sm:inline text-sm text-gold hover:underline"
          >
            {t.getQuote}
          </a>
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
  );
};

export default Cases;
