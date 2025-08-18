import React from 'react';

const Hero = ({ t }) => {
  return (
    <section
      id="hero"
      className="hero-bg relative min-h-[88vh] flex items-center pt-24"
    >
      <div className="grid-overlay" />
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-[1200px] container-padding py-16 md:py-20">
          <div className="flex flex-col gap-8">
            <p
              className="text-xs sm:text-sm text-muted/80 uppercase tracking-[0.2em] animate-rise"
              style={{ animationDelay: "80ms" }}
            >
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
            <p
              className="text-base md:text-xl text-muted max-w-xl md:max-w-2xl animate-rise"
              style={{ animationDelay: "220ms" }}
            >
              {t.heroSubtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-rise w-fit"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#contact"
                className="cta-primary h-12 px-6 inline-flex items-center justify-center text-sm font-medium"
              >
                {t.primaryCta}
              </a>
              <a
                href="#contact"
                className="cta-secondary h-12 px-6 inline-flex items-center justify-center text-sm font-medium text-foreground"
              >
                {t.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
