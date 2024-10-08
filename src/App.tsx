import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NewsTicker from './components/NewsTicker'
import Hero from './components/Hero'
import Features from './components/Features'
import DeepDives from './components/DeepDives'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'
import GamesPage from './pages/GamesPage'
import NotificationsPage from './pages/NotificationsPage'
import CommunityPage from './pages/CommunityPage'
import ChatButton from './components/ChatButton'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NewsTicker />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <DeepDives />
                <LatestNews />
              </>
            } />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatButton />
      </div>
    </Router>
  )
}

export default App