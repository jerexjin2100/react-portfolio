function Footer() {
  return (
    <footer className="py-8 text-gray-600 border-t border-gray-200 transition-colors duration-300 bg-gray-50 dark:bg-gray-950 dark:text-gray-400 dark:border-gray-800">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Jeremy John Robert. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="transition text-blue-600 dark:text-blue-400 hover:text-pink-600 dark:hover:text-pink-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="transition text-blue-600 dark:text-blue-400 hover:text-pink-600 dark:hover:text-pink-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
