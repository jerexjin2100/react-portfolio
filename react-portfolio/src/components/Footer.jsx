function Footer() {
  return (
    <footer className="py-6 text-gray-400 border-t border-gray-800 bg-gray-950">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Jeremy John Robert. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
