"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacidadPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
              Política de Privacidad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              ¿Cómo protegemos tus datos y respetamos tu privacidad?
            </motion.p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            >
              <motion.div variants={item}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-[#233567] dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Protección de Datos</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Tus datos están protegidos con los más altos estándares de seguridad.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-4">
                      <Lock className="w-8 h-8 text-[#233567] dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Encriptación</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Utilizamos encriptación de extremo a extremo para proteger tu información.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-4">
                      <Eye className="w-8 h-8 text-[#233567] dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Transparencia</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Somos transparentes sobre cómo utilizamos tus datos.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-[#233567] dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Control</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Tienes control sobre tus datos y puedes solicitar su eliminación.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 shadow-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Introducción</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    En DevMace, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta
                    política de privacidad te informará sobre cómo cuidamos tus datos personales cuando utilizas nuestra
                    aplicación de control de asistencia y te informará sobre tus derechos de privacidad y cómo la ley te
                    protege.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Esta política de privacidad se aplica a todos los usuarios de nuestras aplicaciones móviles y web.
                    Por favor, léela detenidamente para entender nuestras prácticas con respecto a tus datos personales.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Datos que recopilamos</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Recopilamos diferentes tipos de información para proporcionar y mejorar nuestro servicio:
                  </p>

                  <div className="space-y-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Datos de identificación personal
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        • Nombre y apellidos
                        <br />• Dirección de correo electrónico
                        <br />• Número de empleado
                        <br />• Departamento o área de trabajo
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Datos de uso</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        • Registros de entrada y salida
                        <br />• Ubicación al momento del registro (si la función está habilitada)
                        <br />• Dispositivo utilizado para el registro
                        <br />• Fecha y hora de acceso a la aplicación
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Datos técnicos</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        • Dirección IP
                        <br />• Tipo de navegador
                        <br />• Tipo de dispositivo
                        <br />• Sistema operativo
                        <br />• Preferencias de configuración
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    No recopilamos datos sensibles como información médica, religiosa, política o biométrica a menos que
                    sea estrictamente necesario para el funcionamiento del servicio y con tu consentimiento explícito.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 shadow-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Cómo utilizamos tus datos</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Utilizamos tus datos personales para los siguientes propósitos:
                  </p>

                  <div className="space-y-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Proporcionar y mantener nuestro servicio
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Utilizamos tus datos para registrar tu asistencia, generar reportes y administrar tu cuenta de
                        usuario.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mejorar nuestro servicio</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Analizamos cómo utilizas nuestra aplicación para mejorar su funcionalidad y experiencia de
                        usuario.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Comunicarnos contigo</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Podemos utilizar tu información de contacto para enviarte notificaciones importantes sobre tu
                        cuenta o cambios en nuestros términos y políticas.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Cumplir con obligaciones legales
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        En algunos casos, estamos obligados por ley a recopilar y procesar cierta información sobre
                        nuestros usuarios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-0 shadow-md mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tus derechos</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Como usuario de nuestro servicio, tienes ciertos derechos con respecto a tus datos personales:
                  </p>

                  <div className="space-y-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Derecho de acceso</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Tienes derecho a solicitar copias de tus datos personales.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Derecho de rectificación</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Tienes derecho a solicitar que corrijamos cualquier información que consideres inexacta.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Derecho de eliminación</h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Tienes derecho a solicitar que eliminemos tus datos personales en determinadas circunstancias.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Derecho a restringir el procesamiento
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Tienes derecho a solicitar que restrinjamos el procesamiento de tus datos personales en
                        determinadas circunstancias.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Derecho a la portabilidad de datos
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 pl-4">
                        Tienes derecho a solicitar que transfiramos los datos que hemos recopilado a otra organización o
                        directamente a ti.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    Para ejercer cualquiera de estos derechos, por favor contáctanos a través de nuestro formulario de
                    contacto o envíanos un correo electrónico a privacidad@devmace.com.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Cambios a esta política</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Podemos actualizar nuestra política de privacidad de vez en cuando. Te notificaremos cualquier
                    cambio publicando la nueva política de privacidad en esta página y, si los cambios son
                    significativos, te enviaremos una notificación.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Te recomendamos que revises esta política de privacidad periódicamente para estar informado sobre
                    cómo protegemos tu información.
                  </p>

                  <div className="text-center">
                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
                      Última actualización: 21 de marzo de 2025
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-[#233567] hover:bg-[#1a284f] text-white px-6 py-2">
                        Descargar política completa (PDF)
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

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

