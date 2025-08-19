"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Cases from "@/components/Cases";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Notification from "@/components/notification";

export default function Home({ searchParams }) {
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [t, setT] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "040e97fe-4e5b-4393-bf18-fdf5a1baa2a7");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        event.target.reset();
      } else {
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch (err) {
      setNotification({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    }
  }

  const handleCloseNotification = () => {
    setNotification({ message: "", type: "" });
  };

  const searchParamsParsed=React.use(searchParams);
  const rawLang = searchParamsParsed.lang || "en";
  const lang = ["en", "fr", "ar"].includes(rawLang) ? rawLang : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const fetchTranslations = async () => {
      const translations = await import(`@/constants/${lang}.json`);
      setT(translations.default);
    };
    fetchTranslations();
  }, [lang]);

  if (!t) {
    return null;
  }

  return (
    <div className="font-sans" dir={dir}>
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
      <Navbar
        lang={lang}
        labels={{ nav: t.nav, ctaQuote: t.ctaQuote, social: t.social }}
      />
      <Hero t={t} />
      <Services t={t} />
      <Approach t={t} />
      <Cases t={t} />
      <Why t={t} />
      <Contact t={t} handleSubmit={handleSubmit} />
    </div>
  );
}
