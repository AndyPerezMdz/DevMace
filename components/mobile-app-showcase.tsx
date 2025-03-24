"use client"

import { useState, useEffect } from "react"
import { QrCode, Clock, Bell, FileText, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileAppShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const screens = [
    {
      title: "Check-in/out",
      icon: <QrCode className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Escanea tu código QR para registrar tu entrada y salida",
    },
    {
      title: "Anuncios",
      icon: <Bell className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Recibe anuncios específicos para tu departamento",
    },
    {
      title: "Reportes",
      icon: <FileText className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Descarga tus reportes mensuales de asistencia",
    },
    {
      title: "Perfil",
      icon: <User className="w-16 h-16 text-[#233567] dark:text-blue-400" />,
      description: "Gestiona tu información personal y preferencias",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <div className="mx-auto w-[280px] bg-black rounded-[2.5rem] p-2 shadow-xl relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#233567]/30 to-[#3a5ca9]/20 rounded-[2.5rem] blur-md -z-10"></div>
      <div className="h-[580px] bg-white dark:bg-gray-800 rounded-[2.25rem] overflow-hidden border-[3px] border-black relative z-10">
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="w-24 h-5 rounded-full bg-black border border-gray-800"></div>
        </div>
        <div className="p-4 h-full bg-gray-50 dark:bg-gray-900">
          <div className="h-8 w-1/2 bg-[#233567] dark:bg-blue-600 rounded-full mb-6 mx-auto flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-64 bg-white dark:bg-gray-800 rounded-xl mb-6 flex flex-col items-center justify-center p-6 text-center shadow-md"
            >
              {screens[currentScreen].icon}
              <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">
                {screens[currentScreen].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{screens[currentScreen].description}</p>
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

          <div className="space-y-4">
            <div className="h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center px-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#233567] dark:text-blue-400" />
              </div>
              <div className="ml-3">
                <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
              <div className="ml-auto">
                <div className="w-8 h-8 rounded-full bg-[#233567] dark:bg-blue-600"></div>
              </div>
            </div>
            <div className="h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center px-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                <Bell className="w-4 h-4 text-[#233567] dark:text-blue-400" />
              </div>
              <div className="ml-3">
                <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
              <div className="ml-auto">
                <div className="w-5 h-5 rounded-full bg-[#233567] dark:bg-blue-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

