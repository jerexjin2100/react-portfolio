function SkillBadge({ skill }) {
  return (
    <span
      className="px-4 py-2 text-sm font-medium text-blue-700 transition bg-blue-100 border border-blue-300 rounded-full dark:text-blue-200 dark:border-blue-600 dark:bg-blue-900 hover:bg-pink-100 hover:border-pink-400 hover:text-pink-700 dark:hover:bg-pink-900 dark:hover:border-pink-600 dark:hover:text-pink-200"
    >
      {skill}
    </span>
  )
}

export default SkillBadge
