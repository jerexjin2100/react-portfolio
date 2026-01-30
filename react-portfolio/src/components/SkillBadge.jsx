function SkillBadge({ skill }) {
  return (
    <span className="px-4 py-2 text-sm text-gray-300 transition border border-gray-600 rounded-full hover:bg-pink-500 hover:border-pink-500 hover:text-white">
      {skill}
    </span>
  )
}

export default SkillBadge
