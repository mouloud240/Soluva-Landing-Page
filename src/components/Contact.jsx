import React from "react";

const Contact = ({ t, handleSubmit }) => {
  return (
    <section id="contact" className="relative py-14 md:py-20 gold-glow">
      <div className="mx-auto max-w-[1200px] container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="card p-6 md:p-8">
            <h3 className="heading-lg text-xl md:text-2xl font-semibold mb-2">
              {t.contact.title}
            </h3>
            <p className="text-muted text-sm md:text-base mb-6">
              {t.contact.intro}
            </p>

            <div className="space-y-5 md:space-y-6 text-sm">
              <div>
                <div className="form-label">Email</div>
                <div className="flex items-center gap-3 text-muted">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]">
                    @
                  </span>
                  <span>contact@soluva.dev</span>
                </div>
              </div>
              <div>
                <div className="form-label">Instagram</div>
                <div className="flex items-center gap-3 text-muted">
                  <a
                    href="https://www.instagram.com/soluva.dev?igsh=MTlzd2JjYXYzcDZseg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]"
                  >
                    IG
                  </a>
                  <span>soluva.dev</span>
                </div>
              </div>
              <div>
                <div className="form-label">LinkedIn</div>
                <div className="flex items-center gap-3 text-muted">
                  <a
                    href="https://www.linkedin.com/company/108645820/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[rgba(255,255,255,0.04)] border border-[var(--border)]"
                  >
                    in
                  </a>
                  <span>Soluva</span>
                </div>
              </div>

              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <div className="form-label">How we can help</div>
                <ul className="text-sm text-muted space-y-2.5">
                  <li>Enterprise System Architecture</li>
                  <li>Scalable API Development</li>
                  <li>Performance & Scalability Consulting</li>
                  <li>Database Architecture & Optimization</li>
                  <li>Cloud & DevOps Transformation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
              onSubmit={handleSubmit}
            >
              <div className="sm:col-span-1">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder={t.contact.name}
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder={t.contact.email}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="subject">
                  {t.contact.subject}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="form-control"
                  required
                >
                  <option>{t.contact.selectTopic}</option>
                  {t.contact.topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control form-textarea"
                  placeholder={t.contact.message}
                  required
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 w-full mt-1">
                <div className="flex flex-col gap-3 w-full">
                  <a
                    href="#lead"
                    className="cta-secondary h-11 px-5 inline-flex items-center justify-center text-sm font-medium"
                  >
                    {t.finalBookCta}
                  </a>
                  <a
                    href="tel:+10000000000"
                    className="cta-secondary h-11 px-5 inline-flex items-center justify-center text-sm font-medium"
                  >
                    {t.callLabel}
                  </a>
                </div>
                <button type="submit" className="btn-send w-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h9"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 5l7 7-7 7"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  {t.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="text-center mt-8">
        <p className="text-muted text-sm">{t.copyright}</p>
      </footer>
    </section>
  );
};

export default Contact;
