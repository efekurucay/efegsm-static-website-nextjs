"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "tr" | "en" | "ru" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Update translations with more SEO-focused content and keywords
const translations = {
  tr: {
    "site.title": "Efe GSM Alanya",
    "nav.home": "Ana Sayfa",
    "nav.services": "Hizmetler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",
    "hero.title": "30 Dakikada Telefon Tamiri",
    "hero.subtitle": "Alanya'nın En Hızlı GSM Servisi",
    "hero.description":
      "iPhone, Samsung, Huawei, Xiaomi ve tüm marka telefonlar için profesyonel tamir hizmeti. Ekran değişimi, batarya tamiri, su hasarı onarımı. Garantili ve uygun fiyatlı çözümler.",
    "services.repair": "Telefon Tamiri",
    "services.sim": "Sim Kart Satışı",
    "services.accessories": "Telefon Aksesuarları",
    "contact.whatsapp": "WhatsApp Destek",
    "contact.telegram": "Telegram Destek",
    "blog.title": "Teknoloji Haberleri ve İpuçları",
    "blog.back": "Geri Dön",
    "blog.readmore": "Devamını Oku",
    "footer.rights": "Tüm Hakları Saklıdır",
    "services.repair.desc": "Ekran kırığı, batarya sorunu, su hasarı, şarj problemi ve daha fazlası",
    "services.sim.desc": "Turkcell, Vodafone, Türk Telekom ön ödemeli hatlar",
    "services.accessories.desc": "Powerbank, telefon kılıfı, kulaklık, şarj cihazı ve daha fazlası",
    "about.title": "Hakkımızda",
    "about.description":
      "Efe GSM olarak Alanya'da 2019'dan beri kaliteli GSM hizmeti veriyoruz. Tüm marka telefonlar için hızlı tamir, garantili işçilik ve uygun fiyatlarla hizmetinizdeyiz.",
    "contact.title": "İletişim",
    "contact.address": "Adres",
    "contact.phone": "Telefon",
    "contact.email": "E-posta",
    "seo.keywords": "telefon tamiri, ekran değişimi, batarya tamiri, gsm servisi, alanya telefon tamir",
  },
  en: {
    "site.title": "Efe GSM Alanya",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Phone Repair in 30 Minutes",
    "hero.subtitle": "Alanya's Fastest GSM Service",
    "hero.description":
      "Professional repair service for iPhone, Samsung, Huawei, Xiaomi and all phone brands. Screen replacement, battery repair, water damage restoration. Guaranteed and affordable solutions.",
    "services.repair": "Phone Repair",
    "services.sim": "SIM Card Sales",
    "services.accessories": "Phone Accessories",
    "contact.whatsapp": "WhatsApp Support",
    "contact.telegram": "Telegram Support",
    "blog.title": "Tech News and Tips",
    "blog.back": "Go Back",
    "blog.readmore": "Read More",
    "footer.rights": "All Rights Reserved",
    "services.repair.desc": "Screen damage, battery issues, water damage, charging problems and more",
    "services.sim.desc": "Turkcell, Vodafone, Türk Telekom prepaid lines",
    "services.accessories.desc": "Powerbank, phone cases, headphones, chargers and more",
    "about.title": "About Us",
    "about.description":
      "As Efe GSM, we have been providing quality GSM services in Alanya since 2019. Fast repair for all phone brands, guaranteed workmanship and affordable prices.",
    "contact.title": "Contact",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "seo.keywords": "phone repair, screen replacement, battery repair, gsm service, alanya phone repair",
  },
  ru: {
    "site.title": "Efe GSM Алания",
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "hero.title": "Ремонт телефона за 30 минут",
    "hero.subtitle": "Самый быстрый GSM сервис в Алании",
    "hero.description":
      "Профессиональный ремонт iPhone, Samsung, Huawei, Xiaomi и всех марок телефонов. Замена экрана, ремонт батареи, восстановление после попадания воды. Гарантированные и доступные решения.",
    "services.repair": "Ремонт телефонов",
    "services.sim": "Продажа SIM-карт",
    "services.accessories": "Аксессуары для телефонов",
    "contact.whatsapp": "Поддержка WhatsApp",
    "contact.telegram": "Поддержка Telegram",
    "blog.title": "Технические новости и советы",
    "blog.back": "Назад",
    "blog.readmore": "Читать далее",
    "footer.rights": "Все права защищены",
    "services.repair.desc":
      "Повреждение экрана, проблемы с батареей, повреждение водой, проблемы с зарядкой и многое другое",
    "services.sim.desc": "Предоплаченные линии Turkcell, Vodafone, Türk Telekom",
    "services.accessories.desc": "Powerbank, чехлы для телефонов, наушники, зарядные устройства и многое другое",
    "about.title": "О нас",
    "about.description":
      "Как Efe GSM, мы предоставляем качественные GSM услуги в Алании с 2019 года. Быстрый ремонт для всех марок телефонов, гарантированная работа и доступные цены.",
    "contact.title": "Контакты",
    "contact.address": "Адрес",
    "contact.phone": "Телефон",
    "contact.email": "Электронная почта",
    "seo.keywords": "ремонт телефонов, замена экрана, ремонт батареи, gsm сервис, алания ремонт телефонов",
  },
  de: {
    "site.title": "Efe GSM Alanya",
    "nav.home": "Startseite",
    "nav.services": "Dienstleistungen",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "hero.title": "Handy-Reparatur in 30 Minuten",
    "hero.subtitle": "Alanyas schnellster GSM-Service",
    "hero.description":
      "Professioneller Reparaturservice für iPhone, Samsung, Huawei, Xiaomi und alle Handy-Marken. Bildschirmaustausch, Batteriereparatur, Wasserschadenreparatur. Garantierte und erschwingliche Lösungen.",
    "services.repair": "Handy-Reparatur",
    "services.sim": "SIM-Karten-Verkauf",
    "services.accessories": "Handy-Zubehör",
    "contact.whatsapp": "WhatsApp Support",
    "contact.telegram": "Telegram Support",
    "blog.title": "Tech-News und Tipps",
    "blog.back": "Zurück",
    "blog.readmore": "Weiterlesen",
    "footer.rights": "Alle Rechte vorbehalten",
    "services.repair.desc": "Bildschirmschäden, Batterieprobleme, Wasserschäden, Ladeprobleme und mehr",
    "services.sim.desc": "Prepaid-Leitungen von Turkcell, Vodafone, Türk Telekom",
    "services.accessories.desc": "Powerbank, Handyhüllen, Kopfhörer, Ladegeräte und mehr",
    "about.title": "Über uns",
    "about.description":
      "Als Efe GSM bieten wir seit 2019 qualitativ hochwertige GSM-Dienstleistungen in Alanya an. Schnelle Reparatur für alle Handy-Marken, garantierte Arbeit und erschwingliche Preise.",
    "contact.title": "Kontakt",
    "contact.address": "Adresse",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "seo.keywords": "handy reparatur, bildschirm austausch, batterie reparatur, gsm service, alanya handy reparatur",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split("-")[0] as Language
    if (["tr", "en", "ru", "de"].includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
