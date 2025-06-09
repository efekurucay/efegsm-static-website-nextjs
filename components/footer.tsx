"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-xl">{t("site.title")}</span>
            </div>
            <p className="text-gray-300 text-sm">Alanya'da profesyonel telefon tamiri ve aksesuar hizmetleri</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {t("nav.home")}
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {t("nav.services")}
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {t("nav.about")}
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("contact.title")}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Alanya, Antalya</p>
              <p>📞 +90 XXX XXX XX XX</p>
              <p>✉️ info@efegsmalanya.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 {t("site.title")} – Alanya | {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
