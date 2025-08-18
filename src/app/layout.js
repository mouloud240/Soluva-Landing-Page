import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Soluva";
const BASE_URL = "https://soluva.dev";
const titles = {
  en: "Engineering Excellence. Business Results. | Soluva",
  fr: "Excellence d’ingénierie. Résultats business. | Soluva",
  ar: "هندسة فائقة. نتائج أعمال. | Soluva",
};

const descriptions = {
  en: "We design and build scalable software that drives measurable ROI. Backend, frontend, cloud, and UX—delivered end‑to‑end.",
  fr: "Nous concevons et développons des logiciels scalables qui génèrent un ROI mesurable. Backend, frontend, cloud et UX — de bout en bout.",
  ar: "نصمّم ونبني برمجيات قابلة للتوسّع تُحقق عائدًا ملموسًا. الواجهة الخلفية والأمامية والسحابة وتجربة المستخدم — تسليم متكامل.",
};

export async function generateMetadata({ searchParams }) {
  const langParam = searchParams?.lang;
  const lang = ["en", "fr", "ar"].includes(langParam) ? langParam : "en";
  const title = titles[lang];
  const description = descriptions[lang];
  const canonical = lang === "en" ? `${BASE_URL}/` : `${BASE_URL}/?lang=${lang}`;

  return {
    title,
    description,
    keywords: [
      "software development agency",
      "backend engineering",
      "Next.js",
      "NestJS",
      "Prisma",
      "Redis",
      "PostgreSQL",
      "cloud",
      "system design",
      "UI/UX",
      "Flutter",
      "web app development",
      "scalable architectures",
      "performance optimization",
      "DevOps",
      "ROI",
    ],
    applicationName: siteName,
    creator: siteName,
    publisher: siteName,
    category: "technology",
    alternates: {
      canonical,
      languages: {
        "en-US": `${BASE_URL}/`,
        "fr-FR": `${BASE_URL}/?lang=fr`,
        ar: `${BASE_URL}/?lang=ar`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: lang === "fr" ? "fr_FR" : lang === "ar" ? "ar" : "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/globe.svg`,
          width: 1200,
          height: 630,
          alt: "Dev Agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/globe.svg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    themeColor: "#000000",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: BASE_URL,
            logo: `${BASE_URL}/favicon.ico`,
            sameAs: [
              "https://github.com/mouloud240",
              "https://www.linkedin.com/in/mouloud-hasrane",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "mouloudhasrane@gmail.com",
                availableLanguage: ["en", "fr", "ar"],
              },
            ],
            areaServed: "Global",
            description: descriptions.en,
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
