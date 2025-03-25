import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { DayScene, NightScene } from "./theme-scenes"

interface ThemeLayoutProps {
  children: React.ReactNode
}

export const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Escenas dinámicas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-0"
      >
        {theme === "light" ? <DayScene /> : <NightScene />}
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 