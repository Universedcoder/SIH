import React from 'react'
import { BookOpen, Puzzle, Users, Swords, LayoutGrid, Square } from 'lucide-react'

interface GameCategoryProps {
  category: {
    id: string
    name: string
    icon: string
  }
  isSelected: boolean
  onClick: () => void
}

const GameCategory: React.FC<GameCategoryProps> = ({ category, isSelected, onClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'quizzes':
        return <BookOpen className="w-6 h-6" />
      case 'puzzles':
        return <Puzzle className="w-6 h-6" />
      case 'role-playing':
        return <Users className="w-6 h-6" />
      case 'strategy':
        return <Swords className="w-6 h-6" />
      case 'trivia':
        return <LayoutGrid className="w-6 h-6" />
      case 'other':
        return <Square className="w-6 h-6" />
      default:
        return null
    }
  }

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-200 ${
        isSelected ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className={`mb-2 ${isSelected ? 'text-white' : 'text-primary'}`}>
        {getIcon(category.icon)}
      </div>
      <span className="text-sm font-medium">{category.name}</span>
    </button>
  )
}

export default GameCategory