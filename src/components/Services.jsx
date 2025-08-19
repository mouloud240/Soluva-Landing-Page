import React from 'react';
import { Database, AppWindow, Cloud, Palette } from 'lucide-react';

const icons = [<Database />, <AppWindow />, <Cloud />, <Palette />];

const Services = ({ t }) => {
  return (
    <section id="services" className="relative py-14 md:py-20 gold-glow">
      <div className="mx-auto max-w-[1200px] container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.map((s, i) => (
            <div
              key={s.title}
              className="card p-6 flex flex-col gap-3 animate-rise"
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <div
                className="h-10 w-10 rounded-lg flex items-center justify-center text-gold"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(212,175,55,0.35), rgba(212,175,55,0.05))",
                  border: "1px solid var(--border)",
                }}
              >
                {icons[i]}
              </div>
              <h3 className="heading-lg text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
              {/* <p className="text-xs text-muted/80">{s.tech}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
