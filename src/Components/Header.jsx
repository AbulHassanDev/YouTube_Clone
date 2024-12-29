
import { Menu, Search, Mic, Video, Bell, User, Plus } from 'lucide-react'
import { FaYoutube } from "react-icons/fa";

function Header({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center px-4 lg:px-6 py-2 bg-[#0f0f0f] sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button className="hover:bg-[#272727] p-2 rounded-full" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </button>
        <a href="/" className="flex items-center  ">
        <FaYoutube  className='  rounded-full   w-10 h-10 '/> 
        <h1 className='font-sans font-semibold ml-2 '>YouTube</h1>
          <span className="text-xs align-top">PK</span>
        </a>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-[720px] mx-4">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-[#121212] border border-[#303030] rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="px-4 lg:px-6 py-2 bg-[#272727] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#3f3f3f]">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <button className="p-2 hover:bg-[#272727] rounded-full ml-4">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <button className="md:hidden p-2 hover:bg-[#272727] rounded-full">
          <Search className="w-6 h-6" />
        </button>
        <button className="md:hidden p-2 hover:bg-[#272727] rounded-full">
          <Mic className="w-6 h-6" />
        </button>
        <button className="hidden md:block p-2 hover:bg-[#272727] rounded-full">
          <Plus className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-[#272727] rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Header

