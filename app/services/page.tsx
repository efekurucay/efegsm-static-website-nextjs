"use client"

import { Smartphone, Battery, Droplets, SmartphoneIcon as Sim, Headphones, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TelegramButton } from "@/components/telegram-button"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useLanguage()

  const repairServices = [
    {
      icon: Smartphone,
      title: "Ekran Değişimi",
      description: "Kırık veya çatlak ekranları profesyonel şekilde değiştiriyoruz",
      duration: "30 dakika",
      warranty: "6 ay garanti",
    },
    {
      icon: Battery,
      title: "Batarya Değişimi",
      description: "Orijinal bataryalarla değişim hizmeti",
      duration: "20 dakika",
      warranty: "1 yıl garanti",
    },
    {
      icon: Droplets,
      title: "Su Hasarı Tamiri",
      description: "Suya düşen telefonlar için özel temizlik ve tamir",
      duration: "2-4 saat",
      warranty: "3 ay garanti",
    },
  ]

  const simServices = [
    {
      title: "Türkiye Hatları",
      description: "Turkcell, Vodafone, Türk Telekom ön ödemeli hatlar",
      features: ["Anında aktivasyon", "Farklı paket seçenekleri", "Türkçe destek"],
    },
    {
      title: "Uluslararası Hatlar",
      description: "Rusya, Almanya, İngiltere ve diğer ülkeler için",
      features: ["Çok dilli destek", "Uygun roaming", "Kolay kullanım"],
    },
  ]

  const accessories = [
    {
      category: "Koruma",
      items: ["Temperli cam", "Telefon kılıfı", "Su geçirmez kılıf"],
    },
    {
      category: "Şarj Ürünleri",
      items: ["Powerbank", "Kablosuz şarj cihazı", "Hızlı şarj kablosu"],
    },
    {
      category: "Ses Ürünleri",
      items: ["Bluetooth kulaklık", "Kablolu kulaklık", "Hoparlör"],
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("nav.services")}</h1>
          <p className="text-xl text-gray-600">Profesyonel ve güvenilir hizmetlerimiz</p>
        </div>

        {/* Phone Repair Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("services.repair")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repairServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Süre:</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Garanti:</span>
                        <Badge variant="secondary">{service.warranty}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* SIM Card Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("services.sim")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {simServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Sim className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Accessories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("services.accessories")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Headphones className="w-8 h-8 text-purple-600" />
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Hizmet Almak İster misiniz?</h2>
          <p className="text-xl mb-8">Size en uygun çözümü bulmak için hemen iletişime geçin</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppButton className="bg-white text-green-600 hover:bg-gray-100" />
            <TelegramButton className="bg-white text-blue-600 hover:bg-gray-100" />
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-5 h-5" />
              <span>Pazartesi - Cumartesi: 09:00 - 19:00</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
