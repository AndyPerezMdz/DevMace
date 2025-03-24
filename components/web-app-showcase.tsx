"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Clock, FileText, Bell } from "lucide-react"

export function WebAppShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const screens = [
    {
      title: "Dashboard",
      icon: <Clock className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Panel de control con métricas en tiempo real",
    },
    {
      title: "Empleados",
      icon: <Users className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Gestión completa de empleados",
    },
    {
      title: "Anuncios",
      icon: <Bell className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Creación de anuncios por departamento",
    },
    {
      title: "Reportes",
      icon: <FileText className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Generación de reportes detallados",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#233567]/30 to-[#3a5ca9]/20 rounded-2xl blur-md -z-10"></div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 relative z-10">
        <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-64 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex flex-col items-center justify-center p-6 text-center shadow-md"
            >
              {screens[currentScreen].icon}
              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
                {screens[currentScreen].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{screens[currentScreen].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mb-6">
            {screens.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${index === currentScreen ? "bg-[#233567] dark:bg-blue-500" : "bg-gray-300 dark:bg-gray-700"}`}
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-[#233567] dark:text-blue-400" />
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-[#233567] dark:text-blue-400" />
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

