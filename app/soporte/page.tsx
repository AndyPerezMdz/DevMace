"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, ArrowLeft, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SoportePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const faqs = [
    {
      question: "¿Cómo puedo descargar la aplicación móvil?",
      answer:
        "Puedes descargar nuestra aplicación móvil directamente desde nuestra página principal. Busca el botón 'Descargar App Móvil' y sigue las instrucciones para completar la instalación en tu dispositivo.",
    },
    {
      question: "¿La aplicación es compatible con iOS y Android?",
      answer:
        "Actualmente, nuestra aplicación está disponible para dispositivos Android. Estamos trabajando en una versión para iOS que estará disponible próximamente.",
    },
    {
      question: "¿Cómo puedo acceder a la aplicación web?",
      answer:
        "La aplicación web está disponible para uso en línea y no requiere descarga. Los administradores de recursos humanos pueden acceder a través de nuestro portal web utilizando las credenciales proporcionadas por su organización.",
    },
    {
      question: "¿Qué hago si olvidé mi contraseña?",
      answer:
        "Si olvidaste tu contraseña, puedes utilizar la opción 'Olvidé mi contraseña' en la pantalla de inicio de sesión. Recibirás un correo electrónico con instrucciones para restablecerla.",
    },
    {
      question: "¿Cómo funciona el registro de asistencia con código QR?",
      answer:
        "Cada empleado recibe un código QR único que puede ser escaneado al entrar o salir del lugar de trabajo. Simplemente abre la aplicación, selecciona la opción 'Escanear' y apunta la cámara al lector de códigos QR en tu lugar de trabajo.",
    },
    {
      question: "¿Puedo ver mis registros de asistencia anteriores?",
      answer:
        "Sí, puedes ver tu historial de asistencia en la sección 'Reportes' de la aplicación móvil. También puedes descargar reportes mensuales en formato PDF.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            {theme === "dark" ? (
              <Image src="/images/DevMaceLogoW.png" alt="DevMace Logo" width={150} height={45} className="h-8 w-auto" />
            ) : (
              <Image src="/images/DevMaceLogoB.png" alt="DevMace Logo" width={150} height={45} className="h-8 w-auto" />
            )}

            <div className="hidden md:flex gap-6 ml-8">
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Equipo
              </Link>
              <Link
                href="/soporte"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Soporte
              </Link>
              <Link
                href="/privacidad"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Privacidad
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#233567]/5 to-transparent dark:from-[#233567]/10 dark:to-transparent -z-10"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#233567]/5 dark:bg-[#233567]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#233567]/5 dark:bg-[#233567]/10 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8"
          >
            <Link href="/" className="flex items-center text-[#233567] dark:text-blue-400 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#233567] to-[#3a5ca9] dark:from-blue-400 dark:to-blue-600"
            >
              Centro de Soporte
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Estamos aquí para ayudarte con cualquier duda o problema que puedas tener
            </motion.p>
          </div>
        </div>
      </section>

      {/* Support Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start gap-3">
                        <HelpCircle className="w-6 h-6 text-[#233567] dark:text-blue-400 flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 ml-9">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              {theme === "dark" ? (
                <Image
                  src="/images/DevMaceLogoW.png"
                  alt="DevMace Logo"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                />
              ) : (
                <Image
                  src="/images/DevMaceLogoB.png"
                  alt="DevMace Logo"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                />
              )}
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} DevMace. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

