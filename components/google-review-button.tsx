"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GoogleReviewButtonProps {
  className?: string
  size?: "sm" | "default" | "lg"
}

export function GoogleReviewButton({ className, size = "default" }: GoogleReviewButtonProps) {
  const handleReviewClick = () => {
    window.open("https://g.page/r/CQHa7otceM-6EBM/review", "_blank")
  }

  return (
    <Button
      onClick={handleReviewClick}
      variant="outline"
      className={`border-yellow-400 text-yellow-600 hover:bg-yellow-50 ${className}`}
      size={size}
    >
      <Star className="w-4 h-4 mr-2" />
      Google'da Yorum Yap
    </Button>
  )
}
