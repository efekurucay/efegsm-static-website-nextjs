"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface WhatsAppButtonProps {
  className?: string
  size?: "sm" | "default" | "lg"
}

export function WhatsAppButton({ className, size = "default" }: WhatsAppButtonProps) {
  const { t } = useLanguage()

  const handleWhatsAppClick = () => {
    const phoneNumber = "905323681555" // Gerçek telefon numarası
    const message = encodeURIComponent("Merhaba, telefon tamiri hakkında bilgi almak istiyorum.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
      size={size}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {t("contact.whatsapp")}
    </Button>
  )
}
