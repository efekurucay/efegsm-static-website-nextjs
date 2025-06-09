"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

export function MediumBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Mock blog posts - In real implementation, you would fetch from Medium RSS
    const mockPosts: BlogPost[] = [
      {
        title: "Telefon Ekranı Nasıl Değiştirilir?",
        link: "https://medium.com/@efegsmalanya/telefon-ekrani-nasil-degistirilir",
        pubDate: "2025-01-15",
        description: "Telefon ekranı değişimi hakkında bilmeniz gereken her şey. Adım adım rehber ve ipuçları.",
      },
      {
        title: "Su Hasarı Gören Telefonlar İçin İlk Yardım",
        link: "https://medium.com/@efegsmalanya/su-hasari-goren-telefonlar",
        pubDate: "2025-01-10",
        description: "Telefonunuz suya düştüğünde yapmanız gerekenler ve kaçınmanız gereken hatalar.",
      },
      {
        title: "Batarya Ömrünü Uzatmanın Yolları",
        link: "https://medium.com/@efegsmalanya/batarya-omrunu-uzatma",
        pubDate: "2025-01-05",
        description: "Telefon bataryanızın daha uzun süre dayanması için pratik öneriler.",
      },
    ]

    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">{t("blog.title")}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{new Date(post.pubDate).toLocaleDateString("tr-TR")}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
              <Button variant="outline" size="sm" onClick={() => window.open(post.link, "_blank")} className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("blog.readmore")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
