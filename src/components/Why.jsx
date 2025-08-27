import React from 'react';

const Why = ({ t }) => {
  return (
    <section id="why" className="relative py-14 md:py-20 gold-glow">
      <div className="mx-auto max-w-[1200px] container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="col-span-1">
            <h2 className="heading-lg text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
              {t.whyTitle}
            </h2>
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
[
          ].map((t) => (
            <div key={t.q} className="card p-6">
              <div className="mb-3">{t.q}</div>
              <div className="text-sm text-muted">{t.a}</div>
            </div>
          ))          ].map((t) => (
            <div key={t.q} className="card p-6">
              <div className="mb-3">{t.q}</div>
              <div className="text-sm text-muted">{t.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
