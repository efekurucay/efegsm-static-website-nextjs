"use client"

import { MapPin, Phone, Mail, Clock, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TelegramButton } from "@/components/telegram-button"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.address"),
      content: t("about.location.address"),
      subContent: t("contact.info.address.desc"),
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: "+90 532 368 15 55",
      subContent: t("contact.info.phone.desc"),
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: t("contact.info.email.content"),
      subContent: t("contact.info.email.desc"),
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      content: t("contact.info.hours.content"),
      subContent: t("contact.info.hours.desc"),
    },
  ]

  const languages = [
    { flag: "🇹🇷", name: "Türkçe", level: t("contact.language.turkish") },
    { flag: "🇬🇧", name: "English", level: t("contact.language.english") },
    { flag: "🇷🇺", name: "Русский", level: t("contact.language.russian") },
    { flag: "🇩🇪", name: "Deutsch", level: t("contact.language.german") },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
        </div>

        {/* Quick Contact */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">{t("contact.quick.title")}</h2>
            <p className="text-xl mb-8">{t("contact.quick.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="bg-white text-green-600 hover:bg-gray-100" size="lg" />
              <TelegramButton className="bg-white text-blue-600 hover:bg-gray-100" size="lg" />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-2">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.subContent}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Language Support */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.language.title")}</h2>
            <p className="text-lg text-gray-600">{t("contact.language.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{lang.flag}</div>
                  <h3 className="font-semibold text-lg mb-2">{lang.name}</h3>
                  <p className="text-sm text-gray-600">{lang.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.map.title")}</h2>
            <p className="text-lg text-gray-600">{t("contact.map.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.3678882241697!2d32.0112344!3d36.5452416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc993f392cec03%3A0xbacf785c8beeda01!2sEFE%20GSM!5e0!3m2!1str!2str!4v1749486642956!5m2!1str!2str"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Efe GSM Alanya Konum"
              />
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span>{t("contact.details.title")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p>
                      <strong>{t("contact.details.address")}</strong> {t("about.location.address")}
                    </p>
                    <p>
                      <strong>{t("contact.details.nearby")}</strong> {t("contact.details.nearby.content")}
                    </p>
                    <p>
                      <strong>{t("contact.details.transport")}</strong> {t("contact.details.transport.content")}
                    </p>
                    <p>
                      <strong>{t("contact.details.parking")}</strong> {t("contact.details.parking.content")}
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://g.page/r/CQHa7otceM-6EBM/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Star className="w-4 h-4 mr-2" />
                        {t("contact.review")}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span>{t("contact.info.hours.title")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>{t("contact.hours.monday")}</span>
                      <span className="font-semibold">09:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.hours.saturday")}</span>
                      <span className="font-semibold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.hours.sunday")}</span>
                      <span className="font-semibold text-red-500">{t("contact.hours.closed")}</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>{t("contact.emergency")}</strong> {t("contact.emergency.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-lg text-gray-600">En çok merak edilen konular</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tamir süresi ne kadar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ekran değişimi 30 dakika, batarya değişimi 20 dakika, su hasarı tamiri 2-4 saat sürmektedir.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Garanti süresi nedir?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Orijinal parçalarda kullanıcı taraflı hasar tespit edilmedikçe garanti veriyoruz.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hangi dillerde hizmet veriyorsunuz?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Türkçe, İngilizce, Rusça ve Almanca dillerinde hizmet veriyoruz.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ödeme seçenekleri nelerdir?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Nakit, kredi kartı ve mobil ödeme seçenekleri mevcuttur.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hala Soru mu Var?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Size yardımcı olmaktan mutluluk duyarız. Hemen iletişime geçin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" />
              <TelegramButton size="lg" />
            </div>
          </div>
        </section>
      </div>
      <div className="mt-8 text-red-100">
        <p className="text-sm">📍 Alanya Merkez | 📞 +90 532 368 15 55 | ⏰ Pazartesi-Cumartesi 09:00-19:00</p>
      </div>
    </div>
  )
}
