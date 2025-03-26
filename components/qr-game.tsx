"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GameState {
  score: number
  isPlaying: boolean
  gameOver: boolean
  timeLeft: number
  customers: Array<{
    id: number
    x: number
    y: number
    isSpecial?: boolean
  }>
  easterEggActive: boolean
}

export function QRGame({ onClose }: { onClose: () => void }) {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    isPlaying: false,
    gameOver: false,
    timeLeft: 30,
    customers: [],
    easterEggActive: false
  })

  const gameLoopRef = useRef<number | undefined>(undefined)
  const customerIdRef = useRef(0)

  const startGame = () => {
    setGameState({
      score: 0,
      isPlaying: true,
      gameOver: false,
      timeLeft: 30,
      customers: [],
      easterEggActive: false
    })
    customerIdRef.current = 0
    startGameLoop()
  }

  const startGameLoop = () => {
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current)
    }

    const gameLoop = () => {
      setGameState(prev => {
        if (!prev.isPlaying || prev.gameOver) return prev

        // Generar nuevo cliente aleatoriamente
        const shouldSpawnCustomer = Math.random() < 0.05
        const newCustomers = shouldSpawnCustomer
          ? [...prev.customers, {
              id: customerIdRef.current++,
              x: Math.random() * 80 + 10,
              y: Math.random() * 60 + 20,
              isSpecial: Math.random() < 0.1 // 10% de probabilidad de cliente especial
            }]
          : prev.customers

        // Actualizar tiempo
        const newTimeLeft = prev.timeLeft - 0.016
        const gameOver = newTimeLeft <= 0

        return {
          ...prev,
          customers: newCustomers,
          timeLeft: newTimeLeft,
          gameOver
        }
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoop()
  }

  const handleCustomerClick = (customerId: number, isSpecial: boolean) => {
    setGameState(prev => {
      if (isSpecial && !prev.easterEggActive) {
        // Activar easter egg
        return {
          ...prev,
          score: prev.score + 5,
          customers: prev.customers.filter(c => c.id !== customerId),
          easterEggActive: true,
          timeLeft: Math.min(prev.timeLeft + 5, 30) // Bonus de 5 segundos
        }
      }
      return {
        ...prev,
        score: prev.score + 1,
        customers: prev.customers.filter(c => c.id !== customerId)
      }
    })
  }

  useEffect(() => {
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">¡Atiende a los Clientes!</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Haz clic en los clientes antes de que se acabe el tiempo. ¡Cada cliente vale 1 punto!
        </p>

        {gameState.isPlaying ? (
          <div className="relative h-[400px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Clientes */}
            <AnimatePresence>
              {gameState.customers.map(customer => (
                <motion.div
                  key={customer.id}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    rotate: customer.isSpecial ? [0, 10, -10, 0] : 0
                  }}
                  transition={{
                    rotate: customer.isSpecial ? {
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : undefined
                  }}
                  exit={{ scale: 0 }}
                  className="absolute w-16 h-16 cursor-pointer"
                  style={{
                    left: `${customer.x}%`,
                    top: `${customer.y}%`,
                  }}
                  onClick={() => handleCustomerClick(customer.id, !!customer.isSpecial)}
                >
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-200 ${
                    customer.isSpecial 
                      ? "bg-yellow-400 animate-pulse" 
                      : "bg-[#233567] text-white"
                  }`}>
                    {customer.isSpecial ? "🙉" : "👤"}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Puntuación y Tiempo */}
            <div className="absolute top-4 left-4 text-lg font-semibold text-gray-900 dark:text-white">
              Puntos: {gameState.score}
            </div>
            <div className="absolute top-4 right-4 text-lg font-semibold text-gray-900 dark:text-white">
              Tiempo: {Math.ceil(gameState.timeLeft)}s
            </div>

            {/* Game Over */}
            {gameState.gameOver && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                  <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">¡Tiempo!</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Puntuación final: {gameState.score}
                  </p>
                  <button
                    onClick={startGame}
                    className="bg-[#233567] text-white px-6 py-2 rounded-lg hover:bg-[#1a284f] transition-colors duration-300"
                  >
                    Jugar de nuevo
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={startGame}
            className="w-full py-3 bg-[#233567] text-white rounded-lg hover:bg-[#1a284f] transition-colors duration-300"
          >
            Iniciar Juego
          </button>
        )}
      </div>
    </div>
  )
}