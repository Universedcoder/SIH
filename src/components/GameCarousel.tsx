import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Game {
  id: number
  title: string
  description: string
  image: string
}

interface GameCarouselProps {
  games: Game[]
  onPlayGame: (game: Game) => void
}

const GameCarousel: React.FC<GameCarouselProps> = ({ games, onPlayGame }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex">
        {games.map((game) => (
          <div key={game.id} className="w-full flex-shrink-0">
            <img src={game.image} alt={game.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
              <button onClick={() => onPlayGame(game)} className="mt-4 btn btn-primary">Play Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronLeft className="text-gray-600" />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <ChevronRight className="text-gray-600" />
      </button>
    </div>
  )
}

export default GameCarousel