"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, ArrowLeft, HelpCircle, Phone, Mail, Smartphone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

      {/* Support Tabs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
              <TabsTrigger value="contact">Contacto Directo</TabsTrigger>
              <TabsTrigger value="guides">Guías de Uso</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="space-y-6">
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
            </TabsContent>

            <TabsContent value="contact">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Contacta con nuestro equipo de soporte
                      </h2>

                      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 mb-8">
                        <motion.div
                          variants={item}
                          className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-[#233567] dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Email</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">info@devmace.com</p>
                            <a
                              href="mailto:info@devmace.com"
                              className="text-[#233567] dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                            >
                              Envíanos un correo
                              <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          variants={item}
                          className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="w-12 h-12 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-[#233567] dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Teléfono</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">+52 (123) 456 7890</p>
                            <a
                              href="tel:+521234567890"
                              className="text-[#233567] dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                            >
                              Llámanos
                              <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                            </a>
                          </div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="p-6 rounded-lg bg-[#233567]/5 dark:bg-[#233567]/10 border border-[#233567]/10 dark:border-[#233567]/20"
                      >
                        <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                          Horario de atención
                        </h3>
                        <div className="space-y-2 text-gray-700 dark:text-gray-300">
                          <div className="flex justify-between">
                            <span>Lunes - Viernes:</span>
                            <span>9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sábado:</span>
                            <span>10:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Domingo:</span>
                            <span>Cerrado</span>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envíanos un mensaje</h2>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Nombre
                            </label>
                            <Input
                              id="name"
                              placeholder="Tu nombre"
                              className="border-gray-300 dark:border-gray-700 focus:ring-[#233567] dark:focus:ring-blue-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              Email
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="tu@email.com"
                              className="border-gray-300 dark:border-gray-700 focus:ring-[#233567] dark:focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="issue" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Tipo de problema
                          </label>
                          <select
                            id="issue"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#233567] dark:focus:ring-blue-500"
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="app">Problema con la aplicación móvil</option>
                            <option value="web">Problema con la aplicación web</option>
                            <option value="account">Problema con mi cuenta</option>
                            <option value="other">Otro</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Descripción del problema
                          </label>
                          <Textarea
                            id="message"
                            rows={5}
                            placeholder="Describe tu problema en detalle"
                            className="border-gray-300 dark:border-gray-700 focus:ring-[#233567] dark:focus:ring-blue-500"
                          />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button className="w-full bg-[#233567] hover:bg-[#1a284f] text-white">
                            <Send className="w-4 h-4 mr-2" />
                            Enviar solicitud de soporte
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-8">
                <motion.div variants={item}>
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-[#233567] dark:text-blue-400" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        Guía de la aplicación móvil
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Aprende a utilizar todas las funciones de nuestra aplicación móvil para empleados, desde el
                        registro de asistencia hasta la descarga de reportes.
                      </p>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button className="bg-[#233567] hover:bg-[#1a284f] text-white w-full">Ver guía</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={item}>
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                      <HelpCircle className="w-16 h-16 text-[#233567] dark:text-blue-400" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        Guía de la aplicación web
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Descubre cómo administrar empleados, generar códigos QR y obtener reportes detallados desde el
                        panel de administración web.
                      </p>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Button className="bg-[#233567] hover:bg-[#1a284f] text-white w-full">Ver guía</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
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

