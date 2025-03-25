import { motion } from "framer-motion"

export const DayScene = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Fondo del cielo */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100 opacity-30" />
      
      {/* Sol */}
      <motion.div 
        className="absolute top-20 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-md"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Nubes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full blur-md opacity-60"
          initial={{
            x: -100,
            y: Math.random() * 200 + 50,
            width: Math.random() * 100 + 100,
            height: Math.random() * 40 + 20,
          }}
          animate={{
            x: ["calc(-10vw)", "calc(110vw)"],
          }}
          transition={{
            duration: Math.random() * 20 + 30,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
        />
      ))}
      
      {/* Pájaros */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: -50,
            y: Math.random() * 200 + 100,
          }}
          animate={{
            x: ["calc(-10vw)", "calc(110vw)"],
            y: [
              Math.random() * 200 + 100,
              Math.random() * 200 + 50,
              Math.random() * 200 + 100,
            ],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <motion.div
            className="w-2 h-2 bg-gray-800 rounded-full relative"
            animate={{
              rotate: [-20, 20, -20],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute w-4 h-0.5 bg-gray-800 -left-3 top-1 rotate-45" />
            <div className="absolute w-4 h-0.5 bg-gray-800 left-1 top-1 -rotate-45" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export const NightScene = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Fondo del cielo nocturno */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 opacity-30" />
      
      {/* Luna */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-gray-100 rounded-full blur-sm"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Estrellas */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Constelaciones */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
          }}
        >
          <motion.div
            className="relative w-40 h-40"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50" />
            <div className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50" style={{ top: "30%", left: "60%" }} />
            <div className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50" style={{ top: "70%", left: "40%" }} />
            <div className="absolute w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50" style={{ top: "90%", left: "80%" }} />
            <div className="absolute inset-0">
              <svg className="w-full h-full">
                <line x1="0" y1="0" x2="60%" y2="30%" className="stroke-white/20 stroke-[0.5]" />
                <line x1="60%" y1="30%" x2="40%" y2="70%" className="stroke-white/20 stroke-[0.5]" />
                <line x1="40%" y1="70%" x2="80%" y2="90%" className="stroke-white/20 stroke-[0.5]" />
              </svg>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
} 