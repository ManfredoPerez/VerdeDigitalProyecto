import { useState } from "react"
import AdminDashboard from "./components/AdminDashboard"
import Header from "./components/Header"
import UserDashboard from "./components/UserDashboard"
// import { Home } from "lucide-react"
import Login from "./components/Login"
import Footer from "./components/Footer"
import Home from "./components/Home"


function App() {
  const [currentView, setCurrentView] = useState('home')
  const [recyclePoints, setRecyclePoints] = useState(0)

  const handleLogin = (userType) => {
    setCurrentView(userType === 'admin' ? 'admin' : 'user')
  }

  const handleLogout = () => {
    setCurrentView('home')
  }

  const handleRecycleSubmit = () => {
    setRecyclePoints(prevPoints => prevPoints + 10)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
        <main className="flex-grow">
          {currentView === 'home' && <Home setCurrentView={setCurrentView} />}
          {currentView === 'login' && <Login onLogin={handleLogin} />}
          {currentView === 'user' && (
            <UserDashboard
              recyclePoints={recyclePoints}
              handleRecycleSubmit={handleRecycleSubmit}
              handleLogout={handleLogout}
            />
          )}
          {currentView === 'admin' && <AdminDashboard handleLogout={handleLogout} />}
        </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
