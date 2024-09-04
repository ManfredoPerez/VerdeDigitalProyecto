// import React from 'react'

import { Recycle } from "lucide-react"
import { Button } from "./ui/button"

const Header = ({ currentView, setCurrentView }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <Recycle className="h-8 w-8 text-green-500 mr-2" /> */}
            <img src="https://i.imgur.com/7k7qYLa.jpeg" alt="Logo" className="h-16"/>
            <span className="font-bold text-xl text-green-900">VerdeDigital</span>
          </div>
          {currentView !== 'login' && (
            <nav>
              <Button variant="ghost" onClick={() => setCurrentView('home')}>Inicio</Button>
              {currentView === 'user' && (
                <Button variant="ghost" onClick={() => setCurrentView('user')}>Dashboard</Button>
              )}
              {currentView === 'admin' && (
                <Button variant="ghost" onClick={() => setCurrentView('admin')}>Panel Admin</Button>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header