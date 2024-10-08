import React, { useState } from 'react'
import { Book, Puzzle, Users, Swords, LayoutGrid, Square } from 'lucide-react'
import GameCarousel from '../components/GameCarousel'
import GameCategory from '../components/GameCategory'
import GameCard from '../components/GameCard'
import GameModal from '../components/GameModal'

const categories = [
  { id: 'quizzes', name: 'Quizzes', icon: 'quizzes' },
  { id: 'puzzles', name: 'Puzzles', icon: 'puzzles' },
  { id: 'role-playing', name: 'Role-Playing', icon: 'role-playing' },
  { id: 'strategy', name: 'Strategy', icon: 'strategy' },
  { id: 'trivia', name: 'Trivia', icon: 'trivia' },
  { id: 'other', name: 'Other', icon: 'other' },
]

const games = [
  {
    id: 1,
    title: "Constitution Wheel",
    description: "Spin the wheel to learn about different aspects of the Indian Constitution",
    category: "Trivia",
    difficulty: "Medium",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: 'wheel',
    wheelSections: [
      { name: "Preamble", color: "#FF6B6B", explanation: "The Preamble outlines the Constitution's guiding principles and ideals." },
      { name: "Fundamental Rights", color: "#4ECDC4", explanation: "These are the basic human rights guaranteed to all citizens of India." },
      { name: "Directive Principles", color: "#45B7D1", explanation: "These are guidelines for the government to create a just society." },
      { name: "Fundamental Duties", color: "#F7B731", explanation: "These are moral obligations of all citizens towards the nation." },
      { name: "Federal Structure", color: "#5D5FEF", explanation: "This defines the division of powers between the Centre and States." },
      { name: "Amendment Process", color: "#FF8A5B", explanation: "This outlines how the Constitution can be changed or updated." },
    ]
  },
  {
    id: 2,
    title: "Rights & Duties Match",
    description: "Match fundamental rights with corresponding duties",
    category: "Puzzles",
    difficulty: "Easy",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: 'quiz'
  },
  {
    id: 3,
    title: "Constitutional Timeline",
    description: "Arrange key events in the making of the Indian Constitution",
    category: "Quizzes",
    difficulty: "Hard",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565982238447-4f91b443c942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    type: 'quiz'
  }
]

const GamesPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handlePlayGame = (game: typeof games[0]) => {
    setSelectedGame(game)
  }

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId)
  }

  const filteredGames = selectedCategory
    ? games.filter(game => game.category.toLowerCase() === selectedCategory)
    : games

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Constitutional Games</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Games</h2>
        <GameCarousel games={games} onPlayGame={handlePlayGame} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Game Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(category => (
            <GameCategory
              key={category.id}
              category={category}
              isSelected={category.id === selectedCategory}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">All Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} onPlay={() => handlePlayGame(game)} />
          ))}
        </div>
      </div>

      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </div>
  )
}

export default GamesPage