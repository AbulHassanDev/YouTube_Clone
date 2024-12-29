

function CategoryPills() {
  const categories = [
    "All", "Music", "Mixes", "Lo-fi", "Jukebox", "Pashto music", 
    "Pritam Chakraborty", "Middle Eastern Music", "News", "Live", "Gaming"
  ]

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className="px-3 py-1.5 bg-[#272727] text-white rounded-lg hover:bg-[#3f3f3f] whitespace-nowrap text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryPills

