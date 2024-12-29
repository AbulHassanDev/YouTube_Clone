import  { useState } from 'react'
import Header from './components/Header'
import Sidebar from './Components/Sidebar'
import VideoGird from './Components/VideoGird'
import CategoryPills from './Components/CategoryPills'



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-[#0f0f0f] text-white">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 lg:px-6 py-4">
            <CategoryPills />
            <VideoGird/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

