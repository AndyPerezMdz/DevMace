import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <CardContent className="p-8">
        <div className="mb-6 w-16 h-16 rounded-2xl bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center group-hover:bg-[#233567] transition-colors duration-300">
          <div className="text-[#233567] dark:text-blue-400 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

