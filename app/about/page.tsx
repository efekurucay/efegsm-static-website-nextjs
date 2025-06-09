"use client"

import { Users, Award, Clock, MapPin, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Clock,
      number: "5+",
      label: "Yıl Tecrübe",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Mutlu Müşteri",
    },
    {
      icon: Award,
      number: "30",
      label: "Dakika Garanti",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Müşteri Puanı",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Müşterilerimizin güvenini kazanmak için her zaman dürüst ve şeffaf hizmet veriyoruz.",
    },
    {
      icon: Clock,
      title: "Hızlı Hizmet",
      description: "Zamanınızın değerli olduğunu biliyoruz. Bu yüzden en hızlı şekilde hizmet vermeye odaklanıyoruz.",
    },
    {
      icon: Award,
      title: "Kalite",
      description: "Sadece orijinal parçalar kullanıyor ve işçiliğimizin arkasında duruyoruz.",
    },
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description: "Her müşterimizi özel hissettirmek ve ihtiyaçlarına özel çözümler sunmak önceliğimiz.",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.description")}</p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Efe GSM, 2019 yılında Alanya'da küçük bir dükkan olarak başladı. Kurucumuz Efe, teknoloji tutkusu ve
                  müşteri memnuniyetini her şeyin üstünde tutan yaklaşımıyla bu yolculuğa çıktı.
                </p>
                <p>
                  İlk günden itibaren "30 dakikada ekran değişimi" sloganımızla hızlı ve kaliteli hizmet verme
                  prensibimizden ödün vermedik. Bugün binlerce mutlu müşterimizle Alanya'nın en güvenilir GSM servisi
                  haline geldik.
                </p>
                <p>
                  Sadece yerel halk değil, Alanya'yı ziyaret eden turistlere de çok dilli hizmet vererek onların
                  tatillerinin aksamamasını sağlıyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600">Bizi farklı kılan değerler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Konumumuz</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <span className="text-lg">Alanya Merkez, Antalya</span>
                  </div>
                  <p className="text-lg opacity-90">
                    Alanya'nın kalbinde, kolay ulaşılabilir konumumuzda sizleri bekliyoruz. Hem yerli hem de yabancı
                    müşterilerimize hizmet veriyoruz.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                      <p className="text-sm opacity-90">Pazartesi - Cumartesi</p>
                      <p className="text-sm opacity-90">09:00 - 19:00</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Dil Desteği</h3>
                      <p className="text-sm opacity-90">🇹🇷 Türkçe</p>
                      <p className="text-sm opacity-90">🇬🇧 English</p>
                      <p className="text-sm opacity-90">🇷🇺 Русский</p>
                      <p className="text-sm opacity-90">🇩🇪 Deutsch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Neden Bizi Seçmelisiniz?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>30 dakika garanti ile hızlı hizmet</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Orijinal parça kullanımı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Çok dilli müşteri desteği</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Uygun fiyat garantisi</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Uzun süreli garanti</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
