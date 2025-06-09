"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCurrency, setShowCurrency] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  return (
    <>
      <header className="bg-white shadow-lg border-b-2 border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/efe-gsm-logo.png" alt="Efe GSM Alanya Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-red-600">{t("site.title")}</span>
                <span className="text-xs text-gray-600 hidden sm:block">{t("site.subtitle")}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                {t("nav.home")}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                {t("nav.services")}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                {t("nav.about")}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Currency, Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex border-yellow-200 hover:border-yellow-600 text-yellow-600"
                onClick={() => setShowCurrency(!showCurrency)}
              >
                <DollarSign className="w-4 h-4 mr-1" />
                {t("header.currency")}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:flex border-red-200 hover:border-red-600">
                    <Globe className="w-4 h-4 mr-2" />
                    {languages.find((lang) => lang.code === language)?.flag}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className="cursor-pointer hover:bg-red-50"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-red-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-red-100">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.services")}
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact")}
                </Link>
                <div className="pt-4 border-t border-red-100">
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? "default" : "outline"}
                        size="sm"
                        className={
                          language === lang.code ? "bg-red-600 hover:bg-red-700" : "border-red-200 hover:border-red-600"
                        }
                        onClick={() => {
                          setLanguage(lang.code as any)
                          setIsMenuOpen(false)
                        }}
                      >
                        <span className="mr-1">{lang.flag}</span>
                        {lang.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center border-yellow-200 hover:border-yellow-600 text-yellow-600 mt-2"
                  onClick={() => {
                    setShowCurrency(!showCurrency)
                    setIsMenuOpen(false)
                  }}
                >
                  <DollarSign className="w-4 h-4 mr-1" />
                  {t("header.exchange.rates")}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Currency Widget */}
      {showCurrency && (
        <div className="fixed top-20 right-0 z-40 bg-white shadow-lg rounded-bl-lg overflow-hidden border border-gray-200">
          <div className="flex justify-between items-center p-2 bg-gray-100">
            <h3 className="text-sm font-medium">{t("header.exchange.rates")}</h3>
            <button onClick={() => setShowCurrency(false)} className="text-gray-500 hover:text-gray-700">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="currency-widget-container" style={{ maxWidth: "300px", height: "200px", overflow: "hidden" }}>
            <iframe
              src="https://api.genelpara.com/iframe/?symbol=para-birimleri&pb=USD,EUR&stil=stil-7&renk=beyaz"
              title="Döviz ve Altın Fiyatları"
              frameBorder="0"
              width="100%"
              height="100%"
              style={{ transform: "scale(0.9)", transformOrigin: "0 0" }}
            />
          </div>
        </div>
      )}
    </>
  )
}
