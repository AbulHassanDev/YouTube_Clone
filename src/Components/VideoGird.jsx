
import { MoreVertical } from 'lucide-react'
import vid1 from '../assets/vid1.png'
import vid2 from '../assets/vid2.png'
import vid3 from '../assets/vid3.png'
import port from '../assets/port.jpg'


function VideoCard({ video }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover rounded-xl"
        />
        <span className="absolute bottom-1 right-1 bg-black px-2 py-0.5 text-xs rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex gap-2">
        <img
          src={video.channelThumbnail}
          alt={video.channel}
          className="h-9 w-9 rounded-full"
        />
        <div className="flex flex-1 flex-col">
          <h3 className="font-medium text-sm line-clamp-2">{video.title}</h3>
          <p className="text-xs text-gray-400">{video.channel}</p>
          <p className="text-xs text-gray-400">
            {video.views} views • {video.uploadedAt}
          </p>
        </div>
        <button className="hover:bg-[#272727] p-1.5 rounded-full h-fit">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

function VideoGird() {
  const videos = [
    {
      id: 1,
      title: "Mix - Sukun layok bas nus new shina song by jabir khan jabir 2017",
      thumbnail: vid3,
      channelThumbnail: port,
      channel: port,
      views: "1.2M",
      uploadedAt: "3 months ago",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Mix - Sathiya Lyrics | Shreya Ghoshal | Ajay-Atul | Kajal Agarwal | Ajay Devgan | RB Lyrics",
      thumbnail: vid1,
      channelThumbnail: port,
      channel: port,
      views: "892K",
      uploadedAt: "2 months ago",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Learn React in 30 Minutes - Full Course for Beginners",
      thumbnail: vid2,
      channelThumbnail: port,
      channel: port,
      views: "1.1M",
      uploadedAt: "1 month ago",
      duration: "30:15"
    },
    {
      id: 4,
      title: "Building a Modern Website with Next.js and Tailwind CSS",
      thumbnail: vid1,
      channelThumbnail: port,
      channel: port,
      views: "450K",
      uploadedAt: "2 weeks ago",
      duration: "15:30"
    },
    {
      id: 5,
      title: "The Complete JavaScript Course 2024 - From Zero to Expert",
      thumbnail: vid2,
      channelThumbnail:port,
      channel: port,
      views: "2.3M",
      uploadedAt: "5 months ago",
      duration: "8:15"
    },
    {
      id: 6,
      title: "Understanding CSS Grid Layout in 20 Minutes",
      thumbnail: vid2,
      channelThumbnail: port,
      channel: port,
      views: "980K",
      uploadedAt: "1 month ago",
      duration: "20:45"
    },
    {
      id: 7,
      title: "Understanding CSS Grid Layout in 20 Minutes",
      thumbnail: vid2,
      channelThumbnail: port,
      channel: port,
      views: "990K",
      uploadedAt: "1 month ago",
      duration: "20:45"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoGird

