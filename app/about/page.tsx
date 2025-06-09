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
      label: t("about.stats.experience"),
    },
    {
      icon: Users,
      number: "1000+",
      label: t("about.stats.customers"),
    },
    {
      icon: Award,
      number: "30",
      label: t("about.stats.guarantee"),
    },
    {
      icon: Star,
      number: "4.9",
      label: t("about.stats.rating"),
    },
  ]

  const values = [
    {
      icon: Shield,
      title: t("about.values.reliability"),
      description: t("about.values.reliability.desc"),
    },
    {
      icon: Clock,
      title: t("about.values.speed"),
      description: t("about.values.speed.desc"),
    },
    {
      icon: Award,
      title: t("about.values.quality"),
      description: t("about.values.quality.desc"),
    },
    {
      icon: Users,
      title: t("about.values.customer"),
      description: t("about.values.customer.desc"),
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("about.story.title")}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("about.values.title")}</h2>
            <p className="text-lg text-gray-600">{t("about.values.subtitle")}</p>
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
                <h2 className="text-3xl font-bold mb-4">{t("about.location.title")}</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <span className="text-lg">{t("about.location.address")}</span>
                  </div>
                  <p className="text-lg opacity-90">{t("about.location.desc")}</p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h3 className="font-semibold mb-2">{t("about.hours.title")}</h3>
                      <p className="text-sm opacity-90">{t("about.hours.weekdays")}</p>
                      <p className="text-sm opacity-90">{t("about.hours.time")}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t("about.support.title")}</h3>
                      <p className="text-sm opacity-90">🇹🇷 Türkçe</p>
                      <p className="text-sm opacity-90">🇬🇧 English</p>
                      <p className="text-sm opacity-90">🇷🇺 Русский</p>
                      <p className="text-sm opacity-90">🇩🇪 Deutsch</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">{t("about.why.title")}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("about.why.feature1")}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("about.why.feature2")}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("about.why.feature3")}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("about.why.feature4")}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{t("about.why.feature5")}</span>
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
