import React from 'react'
import { Star } from 'lucide-react'

interface Game {
  id: number
  title: string
  description: string
  category: string
  difficulty: string
  rating: number
  image: string
}

interface GameCardProps {
  game: Game
  onPlay: () => void
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{game.description}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium bg-primary text-white px-2 py-1 rounded">
            {game.category}
          </span>
          <span className="text-sm text-gray-600">{game.difficulty}</span>
        </div>
        <div className="flex items-center mb-4">
          <Star className="text-yellow-400 w-5 h-5" />
          <span className="ml-1 text-sm font-medium">{game.rating.toFixed(1)}</span>
        </div>
        <button onClick={onPlay} className="w-full btn btn-primary">
          Play Now
        </button>
      </div>
    </div>
  )
}

export default GameCard