"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, ArrowLeft, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactoPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const teamMembers = [
    {
      name: "Andrés Pérez",
      role: "Desarrollador Frontend",
      bio: "Desarrollador front-end con experiencia en la creación de interfaces web modernas y funcionales con HTML, CSS y JavaScript. Familiarizado con el uso de API para integrar funcionalidades dinámicas y especializado en el desarrollo de aplicaciones móviles y web con React y Flutter. Conocimiento del uso adecuado de IA para la creación de proyectos.",
      image: "/images/AndresPerez.png",
      socialLinks: {
        email: "aperezmdz21@gmail.com",
        github: "https://github.com/AndyPerezMdz",
        linkedin: "https://www.linkedin.com/in/itsmenadyp/",
        twitter: "",
      },
    },
    {
      name: "Diego Cen",
      role: "Desarrollador Frontend",
      bio: "Especialista en desarrollo de aplicaciones móviles nativas y multiplataforma con experiencia en React Native y Flutter.",
      image: "/images/DiegoCen.png",
      socialLinks: {
        email: "miguel@devmace.com",
        github: "https://github.com/DiegoCenC",
        linkedin: "https://www.linkedin.com/in/diego-caballero-7398bb2b8",
        twitter: "",
      },
    },
    {
      name: "Eduardo Flores",
      role: "Desarrollador Backend",
      bio: "Desarrollador de software en formación con experiencia en desarrollo de aplicaciones web y APIs REST. Habilidades probadas en gestión de datos, integración de sistemas y optimización de procesos.",
      image: "/images/EduardoFlores.png",
      socialLinks: {
        email: "eduardoflores121298@gmail.com",
        github: "https://github.com/EduardoFlores117",
        linkedin: "https://www.linkedin.com/in/eduardo-flores-475bb4210",
        twitter: "",
      },
    },
    {
      name: "Adrián Caraveo",
      role: "Desarrollador Backend",
      bio: "Conocimiento de SQL, NoSQL y diseño de bases de datos. Capacidad para diseñar, desarrollar e integrar API. Conocimiento de servicios en la nube (AWS, Azure, Google Cloud). Conocimiento de Git y GitHub para la colaboración de código y la gestión de versiones.",
      image: "/images/AdrianCaraveo.png",
      socialLinks: {
        email: "adricarav0528@gmail.com",
        github: "https://github.com/AdrianXD20",
        linkedin: "",
        twitter: "",
      },
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
          <div className="flex items-center mb-8">
            <Link href="/" className="flex items-center text-[#233567] dark:text-blue-400 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#233567] to-[#3a5ca9] dark:from-blue-400 dark:to-blue-600"
            >
              Nuestro Equipo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300"
            >
              Conoce a los profesionales detrás del desarrollo de nuestras aplicaciones de control de asistencia
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} variants={item} />
            ))}
          </motion.div>
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

// First, add this interface above the TeamMemberCard component
interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  socialLinks: {
    email: string
    github: string
    linkedin: string
    twitter: string
  }
}

// Then update the component definition
function TeamMemberCard({ member, variants }: { member: TeamMember; variants: any }) {
  return (
    <motion.div variants={variants} className="group">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 h-full">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#233567]/10 to-[#3a5ca9]/5 dark:from-[#233567]/20 dark:to-[#3a5ca9]/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex space-x-3 justify-center">
              <a
                href={`mailto:${member.socialLinks.email}`}
                className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#233567] hover:bg-[#233567] hover:text-white transition-colors"
                aria-label={`Email a ${member.name}`}
              >
                <Mail className="w-4 h-4" />
              </a>
              {member.socialLinks.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#233567] hover:bg-[#233567] hover:text-white transition-colors"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#233567] hover:bg-[#233567] hover:text-white transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
          <p className="text-[#233567] dark:text-blue-400 font-medium mb-4">{member.role}</p>
          <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

