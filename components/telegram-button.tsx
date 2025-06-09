"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

interface TelegramButtonProps {
  className?: string
  size?: "sm" | "default" | "lg"
}

export function TelegramButton({ className, size = "default" }: TelegramButtonProps) {
  const { t } = useLanguage()

  const handleTelegramClick = () => {
    window.open("https://t.me/efegsmalanya", "_blank")
  }

  return (
    <Button
      onClick={handleTelegramClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white border-0 ${className}`}
      size={size}
    >
      <Send className="w-4 h-4 mr-2" />
      {t("contact.telegram")}
    </Button>
  )
}
