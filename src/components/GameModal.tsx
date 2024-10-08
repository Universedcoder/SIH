import React, { useState, useEffect } from 'react'
import { X, RotateCw } from 'lucide-react'

interface Game {
  id: number
  title: string
  description: string
  category: string
  difficulty: string
  rating: number
  image: string
  type: 'quiz' | 'wheel'
  questions?: {
    question: string
    options: string[]
    correctAnswer: number
  }[]
  wheelSections?: {
    name: string
    color: string
    explanation: string
  }[]
}

interface GameModalProps {
  game: Game
  onClose: () => void
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  const [wheelRotation, setWheelRotation] = useState(0)
  const [selectedSection, setSelectedSection] = useState<typeof game.wheelSections[0] | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)

  const spinWheel = () => {
    if (isSpinning || !game.wheelSections) return

    setIsSpinning(true)
    const rotation = Math.floor(Math.random() * 360) + 1440 // 4 full rotations + random
    setWheelRotation(rotation)
    setSelectedSection(null)

    setTimeout(() => {
      if (game.wheelSections) {
        const sectionIndex = Math.floor((rotation % 360) / (360 / game.wheelSections.length))
        setSelectedSection(game.wheelSections[sectionIndex])
      }
      setIsSpinning(false)
    }, 5000) // Wait for the wheel to stop spinning
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">{game.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          {game.type === 'wheel' && (
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-8">
                <div 
                  className="w-full h-full rounded-full shadow-lg"
                  style={{
                    transform: `rotate(${wheelRotation}deg)`,
                    transition: 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)'
                  }}
                >
                  {game.wheelSections?.map((section, index) => (
                    <div
                      key={index}
                      className="absolute w-full h-full"
                      style={{
                        transform: `rotate(${index * (360 / game.wheelSections.length)}deg)`
                      }}
                    >
                      <div 
                        className="absolute w-1/2 h-full origin-right"
                        style={{
                          backgroundColor: section.color,
                          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                          transform: `rotate(${180 / game.wheelSections.length}deg)`
                        }}
                      ></div>
                      <span 
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 text-white font-bold text-sm"
                        style={{
                          transform: `translateX(30%) rotate(${180 / game.wheelSections.length}deg)`
                        }}
                      >
                        {section.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-1/2 w-2 h-8 bg-red-500 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              {selectedSection ? (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">You landed on: <span className="text-primary">{selectedSection.name}</span></h3>
                  <p className="text-gray-700">{selectedSection.explanation}</p>
                </div>
              ) : (
                <p className="text-xl mb-4">Spin the wheel to learn about a constitutional topic!</p>
              )}
              <button 
                onClick={spinWheel} 
                className={`btn btn-primary mb-4 flex items-center justify-center mx-auto ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSpinning}
              >
                <RotateCw className="mr-2 w-5 h-5" />
                {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
              </button>
            </div>
          )}
          {/* Add other game types here if needed */}
        </div>
      </div>
    </div>
  )
}

export default GameModal