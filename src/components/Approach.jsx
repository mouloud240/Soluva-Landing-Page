import React from 'react';

const Approach = ({ t }) => {
  return (
    <section id="approach" className="relative py-14 md:py-20 gold-glow">
      <div className="mx-auto max-w-[1200px] container-padding">
        <div className="card p-8">
          <h2 className="heading-lg text-3xl font-semibold mb-6">
            {t.approachHeading}
          </h2>
          <p className="text-muted max-w-3xl mb-6 md:mb-8 text-sm md:text-base">
            {t.approachParagraph}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {t.approachSteps.map((step, idx) => (
              <div
                key={step}
                className="p-4 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)]"
              >
                <div className="text-gold text-sm mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
