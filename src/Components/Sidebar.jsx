
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react'

function SidebarItem({ Icon, text, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-[#272727] ${
        active ? 'bg-[#272727]' : ''
      }`}
    >
      <Icon className="w-6 h-6" />
      <span className="text-sm">{text}</span>
    </a>
  )
}

function Sidebar({ open }) {
  return (
    <aside className={`${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static inset-y-0 left-0 w-64 overflow-y-auto pb-4 flex-shrink-0 bg-[#0f0f0f] z-40 md:z-0`}>
      <div className="px-2 py-3">
        <SidebarItem Icon={Home} text="Home" active />
        <SidebarItem Icon={Compass} text="Shorts" />
        <SidebarItem Icon={PlaySquare} text="Subscriptions" />

        <hr className="my-3 border-[#272727]" />

        <h3 className="px-3 mt-2 mb-1 text-sm">You</h3>
        <SidebarItem Icon={Clock} text="History" />
        <SidebarItem Icon={ThumbsUp} text="Liked videos" />

        <hr className="my-3 border-[#272727]" />

        <h3 className="px-3 mt-2 mb-1 text-sm">Explore</h3>
        <SidebarItem Icon={Film} text="Movies & Shows" />
        <SidebarItem Icon={Gamepad} text="Gaming" />
        <SidebarItem Icon={Newspaper} text="News" />
        <SidebarItem Icon={Trophy} text="Sports" />

        <hr className="my-3 border-[#272727]" />

        <h3 className="px-3 mt-2 mb-1 text-sm">More from YouTube</h3>
        <SidebarItem Icon={PlaySquare} text="YouTube Premium" />
        <SidebarItem Icon={PlaySquare} text="YouTube Studio" />
        <SidebarItem Icon={PlaySquare} text="YouTube Music" />
        <SidebarItem Icon={PlaySquare} text="YouTube Kids" />

        <hr className="my-3 border-[#272727]" />

        <SidebarItem Icon={Settings} text="Settings" />
        <SidebarItem Icon={Flag} text="Report history" />
        <SidebarItem Icon={HelpCircle} text="Help" />
        <SidebarItem Icon={MessageSquare} text="Send feedback" />
      </div>
    </aside>
  )
}

export default Sidebar

