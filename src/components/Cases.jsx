import React, { useState, useRef } from 'react';

const Cases = ({ t }) => {
  const [visibleCases, setVisibleCases] = useState(3);
  const casesSectionRef = useRef(null);

  const handleViewMore = () => {
    setVisibleCases(t.cases.length);
  };

  const handleViewLess = () => {
    setVisibleCases(3);
    casesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cases" ref={casesSectionRef} className="relative py-14 md:py-20 gold-glow">
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
          {t.cases.slice(0, visibleCases).map((c) => (
            <div key={c.title} className="card p-6 flex flex-col gap-3">
              <div
                className="h-36 rounded-lg border border-[var(--border)] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${c.image})`,
                }}
              />
              <div className="font-medium">{c.title}</div>
              <div className="text-gold">{c.stat}</div>
              <div className="text-sm text-muted">{c.detail}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          {visibleCases < t.cases.length ? (
            <button onClick={handleViewMore} className="text-gold hover:underline btn-click-effect golden-glow">
              {t.viewMore}
            </button>
          ) : (
            <button onClick={handleViewLess} className="text-gold hover:underline btn-click-effect golden-glow">
              {t.viewLess}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cases;
