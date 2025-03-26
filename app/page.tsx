"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Download, Smartphone, Building, QrCode, Moon, Sun, ArrowRight, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileAppShowcase } from "@/components/mobile-app-showcase"
import { WebAppShowcase } from "@/components/web-app-showcase"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ThemeLayout } from "./components/theme-layout"

export default function DownloadPage() {
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
    <ThemeLayout>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="transition-transform hover:scale-105">
              {theme === "dark" ? (
                <Image src="/images/DevMaceLogoW.png" alt="DevMace Logo" width={150} height={45} className="h-8 w-auto" />
              ) : (
                <Image src="/images/DevMaceLogoB.png" alt="DevMace Logo" width={150} height={45} className="h-8 w-auto" />
              )}
            </Link>

            <div className="hidden md:flex gap-6 ml-8">
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group"
              >
                Equipo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#233567] dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/soporte"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group"
              >
                Soporte
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#233567] dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/privacidad"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white relative group"
              >
                Privacidad
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#233567] dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.15] dark:opacity-10 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#233567]/10 via-[#3a5ca9]/5 to-transparent dark:from-[#233567]/10 dark:via-[#3a5ca9]/5 dark:to-transparent -z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#233567]/10 dark:bg-[#233567]/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#3a5ca9]/5 dark:bg-[#3a5ca9]/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#233567]/15 dark:bg-[#233567]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#233567]/15 dark:bg-[#233567]/10 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3a5ca9]/5 dark:bg-[#3a5ca9]/5 rounded-full blur-2xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#233567]/5 dark:bg-[#233567]/5 rounded-full blur-2xl -z-10"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(35,53,103,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle,_rgba(59,130,246,0.1)_1px,_transparent_1px)] -z-10"></div>

        {/* Floating shapes */}
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#233567]/5 dark:bg-[#233567]/10 rounded-full blur-xl -z-10 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[#3a5ca9]/5 dark:bg-[#3a5ca9]/10 rounded-full blur-xl -z-10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-2/3 left-1/3 w-12 h-12 bg-[#233567]/5 dark:bg-[#233567]/10 rounded-full blur-lg -z-10 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-[#3a5ca9]/5 dark:bg-[#3a5ca9]/10 rounded-full blur-lg -z-10 animate-float" style={{ animationDelay: "3s" }}></div>

        {/* Gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#233567]/10 to-transparent dark:via-[#3a5ca9]/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#233567]/10 to-transparent dark:via-[#3a5ca9]/10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#233567] to-[#3a5ca9] dark:from-blue-400 dark:to-blue-600 pb-1"
            >
              Control de asistencia inteligente
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-10"
            >
              Solución completa para gestionar la asistencia de empleados con aplicación web para RH y móvil para
              empleados
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-3 h-12 w-[200px] text-lg bg-[#233567] hover:bg-[#1a284f] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                href="/HolidayInnExpressAplicacion.apk"
                download
              >
                <Smartphone className="w-5 h-5" />
                App Móvil
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="flex items-center justify-center rounded-full px-6 py-3 h-12 w-[200px] text-lg border-[#233567] text-[#233567] hover:bg-[#233567]/5 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById("web-app")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conocer App Web
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <MobileAppShowcase />
              <WebAppShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web App Section */}
      <section id="web-app" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#233567]/10 dark:bg-[#233567]/20 rounded-full text-[#233567] dark:text-blue-400 font-medium text-sm mb-6 hover:bg-[#233567]/20 dark:hover:bg-[#233567]/30 transition-colors duration-300">
                Aplicación Web
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Gestión completa para <span className="text-[#233567] dark:text-blue-400">Recursos Humanos</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                Nuestra aplicación web proporciona a los equipos de RH todas las herramientas necesarias para gestionar
                eficientemente la asistencia de los empleados.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 mb-8"
              >
                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Monitoreo en tiempo real
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Visualiza las entradas y salidas de todos los empleados en un panel intuitivo.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <Building className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Gestión de empleados
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Administra altas, bajas y modificaciones de empleados desde un solo lugar.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <QrCode className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Generación de códigos QR
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Crea y gestiona códigos QR personalizados para cada empleado.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                * La aplicación web está disponible para uso en línea, no requiere descarga.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#233567] to-[#3a5ca9] rounded-2xl blur opacity-30 dark:opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300">
                <div className="h-8 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="col-span-1">
                      <div className="h-full bg-[#233567]/10 dark:bg-[#233567]/20 rounded-lg p-4 hover:bg-[#233567]/20 dark:hover:bg-[#233567]/30 transition-colors duration-300">
                        <div className="w-full h-6 bg-[#233567]/20 dark:bg-[#233567]/30 rounded mb-3"></div>
                        <div className="w-full h-4 bg-[#233567]/20 dark:bg-[#233567]/30 rounded mb-2"></div>
                        <div className="w-3/4 h-4 bg-[#233567]/20 dark:bg-[#233567]/30 rounded mb-2"></div>
                        <div className="w-full h-4 bg-[#233567]/20 dark:bg-[#233567]/30 rounded"></div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 flex items-center px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                        <div className="w-32 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="ml-auto w-24 h-8 bg-[#233567] dark:bg-blue-600 rounded"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                        <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1 relative flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-[280px]">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#233567]/40 to-[#3a5ca9]/20 rounded-[3rem] blur-md"></div>
                <div className="relative mx-auto w-[280px] bg-black rounded-[2.5rem] p-2 shadow-xl z-10 hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-[580px] bg-white dark:bg-gray-800 rounded-[2.25rem] overflow-hidden border-[3px] border-black">
                    <div className="h-8 bg-black flex items-center justify-center">
                      <div className="w-24 h-5 rounded-full bg-black border border-gray-800"></div>
                    </div>
                    <div className="p-4 h-full bg-gray-50 dark:bg-gray-900">
                      <div className="h-8 w-1/2 bg-[#233567] dark:bg-blue-600 rounded-full mb-6 mx-auto flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div className="h-32 bg-[#233567]/10 dark:bg-[#233567]/20 rounded-xl mb-6 flex items-center justify-center hover:bg-[#233567]/20 dark:hover:bg-[#233567]/30 transition-colors duration-300">
                        <QrCode className="w-20 h-20 text-[#233567] dark:text-blue-400" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
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
                        <div className="h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                            <Building className="w-4 h-4 text-[#233567] dark:text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="ml-auto">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                        <div className="h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                          <div className="w-8 h-8 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center">
                            <Download className="w-4 h-4 text-[#233567] dark:text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="ml-auto">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#233567]/10 dark:bg-[#233567]/20 rounded-full text-[#233567] dark:text-blue-400 font-medium text-sm mb-6 hover:bg-[#233567]/20 dark:hover:bg-[#233567]/30 transition-colors duration-300">
                Aplicación Móvil
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Control de asistencia <span className="text-[#233567] dark:text-blue-400">en tu bolsillo</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                Nuestra aplicación móvil permite a los empleados gestionar su asistencia de manera sencilla y acceder a
                información importante desde cualquier lugar.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 mb-8"
              >
                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <QrCode className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Código QR personal
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Realiza check-in y check-out rápidamente con tu código QR único.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <Building className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Anuncios departamentales
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Recibe anuncios específicos para tu departamento y mantente informado.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#233567]/10 dark:bg-[#233567]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#233567]/20 dark:group-hover:bg-[#233567]/30 transition-colors duration-300">
                    <Download className="w-5 h-5 text-[#233567] dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white group-hover:text-[#233567] dark:group-hover:text-blue-400 transition-colors duration-300">
                      Reportes mensuales
                    </h3>
                    <p className="text-gray-700 dark:text-gray-400">
                      Descarga tus reportes de asistencia mensual directamente desde la app.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/HolidayInnExpressAplicacion.apk"
                  download
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg bg-[#233567] hover:bg-[#1a284f] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar Aplicación Móvil
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Características <span className="text-[#233567] dark:text-blue-400">principales</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 dark:text-gray-300 text-lg"
            >
              Nuestras aplicaciones ofrecen funcionalidades completas para la gestión eficiente de la asistencia de
              empleados
            </motion.p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <FeatureCard
                icon={<Clock className="w-6 h-6" />}
                title="Control de Asistencia"
                description="Registro preciso de entradas y salidas mediante código QR, con geolocalización opcional para mayor seguridad."
              />
            </motion.div>

            <motion.div variants={item}>
              <FeatureCard
                icon={<Building className="w-6 h-6" />}
                title="Anuncios Personalizados"
                description="Comunicación efectiva con anuncios específicos para cada departamento, asegurando que la información llegue a quien corresponde."
              />
            </motion.div>

            <motion.div variants={item}>
              <FeatureCard
                icon={<Download className="w-6 h-6" />}
                title="Reportes Detallados"
                description="Generación y descarga de reportes mensuales de asistencia para empleados y administradores con métricas avanzadas."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#233567] dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              ¿Listo para mejorar la gestión de asistencia?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 mb-10 text-lg"
            >
              Descarga nuestra aplicación móvil ahora y lleva el control de asistencia al siguiente nivel
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/HolidayInnExpressAplicacion.apk"
                download
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg bg-white text-[#233567] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Ahora
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="transition-transform hover:scale-105">
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
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} DevMace. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </ThemeLayout>
  )
}

