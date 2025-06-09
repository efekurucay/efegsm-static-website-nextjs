"use client"

import { Smartphone, SmartphoneIcon as Sim, Headphones, Star, Shield, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TelegramButton } from "@/components/telegram-button"
import { BlogPosts } from "@/components/blog-posts"
import { useLanguage } from "@/components/language-provider"
import { GoogleReviewButton } from "@/components/google-review-button"

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Smartphone,
      title: t("services.repair"),
      description: t("services.repair.desc"),
      duration: t("services.duration.30min"),
      keywords: t("services.keywords.repair"),
    },
    {
      icon: Sim,
      title: t("services.sim"),
      description: t("services.sim.desc"),
      duration: t("services.duration.5min"),
      keywords: t("services.keywords.sim"),
    },
    {
      icon: Headphones,
      title: t("services.accessories"),
      description: t("services.accessories.desc"),
      duration: t("services.duration.instant"),
      keywords: t("services.keywords.accessories"),
    },
  ]

  const features = [
    {
      icon: Zap,
      title: t("features.30min"),
      description: t("features.30min.desc"),
    },
    {
      icon: Shield,
      title: t("features.6month"),
      description: t("features.6month.desc"),
    },
    {
      icon: Award,
      title: t("features.original"),
      description: t("features.original.desc"),
    },
    {
      icon: Star,
      title: t("features.experience"),
      description: t("features.experience.desc"),
    },
  ]

  const phoneModels = [
    "iPhone 15",
    "iPhone 14",
    "iPhone 13",
    "Samsung Galaxy S24",
    "Samsung Galaxy S23",
    "Huawei P60",
    "Xiaomi 14",
    "Oppo Find X7",
    "OnePlus 12",
    "Google Pixel 8",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{t("hero.title")}</h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold mb-6">{t("hero.subtitle")}</p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">{t("hero.description")}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <WhatsAppButton size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg" />
              <TelegramButton size="lg" className="px-8 py-4 text-lg" />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Phone Models */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("phonemodels.title")}</h2>
            <p className="text-gray-600">{t("phonemodels.subtitle")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {phoneModels.map((model, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-red-200 rounded-full text-sm font-medium text-gray-700 hover:border-red-400 transition-colors"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
            <p className="text-lg text-gray-600">{t("services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-red-600 group"
                >
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-center items-center text-sm mb-4">
                      <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{service.duration}</span>
                    </div>
                    <p className="text-xs text-gray-500 italic">{service.keywords}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              {t("services.viewall")}
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPosts />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("seo.repair.title")}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{t("seo.repair.content1")}</p>
                <p>{t("seo.repair.content2")}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("seo.why.title")}</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>{t("seo.why.feature1")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>{t("seo.why.feature2")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>{t("seo.why.feature3")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>{t("seo.why.feature4")}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span>{t("seo.why.feature5")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <WhatsAppButton className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg" />
            <TelegramButton className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg" />
          </div>
          <div className="mb-8">
            <GoogleReviewButton className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3" />
          </div>
          <div className="text-red-100">
            <p className="text-sm">{t("cta.location")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
