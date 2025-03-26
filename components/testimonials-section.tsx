"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy } from "lucide-react"
import { QRGame } from "./qr-game"

interface Testimonial {
  id: number
  name: string
  company: string
  text: string
  hasGame?: boolean
}

interface QRPosition {
  x: number
  y: number
}

interface GameState {
  score: number
  timeLeft: number
  isPlaying: boolean
  qrCodes: QRPosition[]
  currentQR: QRPosition | null
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    company: "Holiday Inn Express",
    text: "Este sistema ha mejorado enormemente la experiencia de check-in y check-out en nuestro hotel. ¡Rápido y eficiente!",
 
  },
  {
    id: 2,
    name: "Laura Méndez",
    company: "Hotel Emporio Cancún",
    text: "La integración con nuestra plataforma actual fue sencilla y nuestros clientes lo aprecian mucho.",
 
  },
  {
    id: 3,
    name: "Miguel Ángel Torres",
    company: "Holiday Inn Express Monterrey",
    text: "Los reportes detallados nos han permitido optimizar los horarios y mejorar la productividad en un 30%.",
 
  },
  {
    id: 4,
    name: "Ana García",
    company: "Resort Las Palmas Acapulco",
    text: "El soporte técnico es excelente. Cualquier duda o problema se resuelve en minutos.",
 
  },
  {
    id: 5,
    name: "Roberto Vega",
    company: "Hotel Ejecutivo CDMX",
    text: "Después de probar varios sistemas, este es el más completo y fácil de usar para nuestro equipo de RH.",
 
  },
  {
    id: 6,
    name: "Patricia Núñez",
    company: "Cadena Hoteles del Norte",
    text: "La función de anuncios internos ha mejorado nuestra comunicación con el personal.",
 
  },
  {
    id: 7,
    name: "Fernando Díaz",
    company: "Hotel Playa Azul Veracruz",
    text: "Desde que implementamos este sistema, las incidencias de asistencia se han reducido en un 40%.",
 
  },
  {
    id: 8,
    name: "Sofía Ramírez",
    company: "Grupo Restaurantero MX",
    text: "La aplicación web para administradores es potente y completa. Tenemos control total sobre la gestión de personal.",
 
  },
  {
    id: 9,
    name: "Jorge Escobar",
    company: "Holiday Inn Express Guadalajara",
    text: "El sistema nos ha permitido reducir el tiempo de espera en recepción en un 50%.",
 
  },
  {
    id: 10,
    name: "Gabriela Suárez",
    company: "Hotel Mar y Sol Mazatlán",
    text: "La interfaz es intuitiva y nuestros huéspedes han notado la diferencia en rapidez.",
 
  },
  // Testimonios adicionales hasta llegar a 50...
  {
    id: 51,
    name: "Luis Martínez",
    company: "Hotel Paraíso Maya",
    text: "La administración del personal es ahora mucho más sencilla y organizada.",
 
  },
  {
    id: 52,
    name: "Andrea Fernández",
    company: "Holiday Inn Express Mérida",
    text: "Nuestros huéspedes han expresado su satisfacción con el nuevo sistema de reservas.",
    hasGame: true
  },
  {
    id: 53,
    name: "Ricardo López",
    company: "Hotel Estrella del Mar",
    text: "La plataforma es increíblemente intuitiva y fácil de usar para nuestro equipo.",
 
  },
  {
    id: 54,
    name: "Mariana Torres",
    company: "Resort Los Cabos",
    text: "Hemos logrado reducir los tiempos de espera en la recepción en un 60%.",
 
  },
  {
    id: 55,
    name: "Hugo Ramírez",
    company: "Holiday Inn Express Puebla",
    text: "La implementación fue rápida y sin inconvenientes. Estamos muy satisfechos.",
 
  },
  {
    id: 56,
    name: "Diana Castillo",
    company: "Hotel Boutique San Miguel",
    text: "La experiencia del usuario ha mejorado significativamente con este sistema.",
 
  },
  {
    id: 57,
    name: "Javier Mendoza",
    company: "Hotel Real del Sur",
    text: "La facilidad de gestión y la reducción de errores han sido clave para nosotros.",
 
  },
  {
    id: 58,
    name: "Rosa Estrada",
    company: "Holiday Inn Express León",
    text: "El equipo de soporte siempre está disponible para ayudarnos cuando lo necesitamos.",
 
  },
  {
    id: 59,
    name: "Pedro Guzmán",
    company: "Hotel Vista Hermosa",
    text: "La funcionalidad de reportes nos ha permitido tomar mejores decisiones estratégicas.",
 
  },
  {
    id: 60,
    name: "Beatriz Olvera",
    company: "Resort Riviera Maya",
    text: "La integración con nuestro software anterior fue fluida y sin problemas.",
  }
];

const moreTestimonials = [...testimonials, ...testimonials.map((t) => ({ ...t, id: t.id + 100 }))]

export function TestimonialsSection() {
  const [showGame, setShowGame] = useState(false)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100

      if (row1Ref.current) {
        row1Ref.current.style.setProperty("--mouse-x", `${x}%`)
        row1Ref.current.style.setProperty("--mouse-y", `${y}%`)
      }

      if (row2Ref.current) {
        row2Ref.current.style.setProperty("--mouse-x", `${x}%`)
        row2Ref.current.style.setProperty("--mouse-y", `${y}%`)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(35,53,103,0.15)_0%,rgba(35,53,103,0)_50%)] dark:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15)_0%,rgba(59,130,246,0)_50%)]"></div>

      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Lo que dicen nuestros <span className="text-[#233567] dark:text-blue-400">clientes</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Empresas de todos los tamaños confían en nuestro sistema para gestionar la asistencia de sus empleados
          </p>
        </div>
      </div>

      <div
        ref={row1Ref}
        className="relative w-full overflow-hidden py-4"
        style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1920] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 40,
            ease: "linear",
          }}
        >
          {moreTestimonials.slice(0, 8).map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              onCardClick={() => {
                if (testimonial.name === "Andrea Fernández") {
                  setShowGame(true)
                }
              }}
            />
          ))}
        </motion.div>
      </div>

      <div
        ref={row2Ref}
        className="relative w-full overflow-hidden py-4 mt-6"
        style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: [-1920, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 40,
            ease: "linear",
          }}
        >
          {moreTestimonials.slice(8, 16).map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              onCardClick={() => {
                if (testimonial.name === "Andrea Fernández") {
                  setShowGame(true)
                }
              }}
            />
          ))}
        </motion.div>
      </div>

      {showGame && <QRGame onClose={() => setShowGame(false)} />}
    </section>
  )
}

function TestimonialCard({ 
  testimonial, 
  onCardClick 
}: { 
  testimonial: Testimonial
  onCardClick: () => void
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 relative group cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px 5px rgba(35, 53, 103, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onCardClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#233567]/5 to-transparent dark:from-blue-500/10 dark:to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-[#233567] dark:text-blue-400">{testimonial.company}</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 relative z-10">"{testimonial.text}"</p>

      {testimonial.name === "Andrea Fernández" && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-4 right-4 text-2xl"
        >
          🏆
        </motion.div>
      )}
    </motion.div>
  )
}

