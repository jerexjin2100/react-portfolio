function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 text-gray-900 transition-colors duration-300 bg-white dark:bg-gray-950 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-pink-400">
          Contact Me
        </h1>

        <p className="mb-10 text-gray-600 dark:text-gray-400">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <form className="max-w-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg placeholder:text-gray-500 transition focus:outline-none focus:border-blue-500 focus:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:placeholder:text-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg placeholder:text-gray-500 transition focus:outline-none focus:border-blue-500 focus:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:placeholder:text-gray-400"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg placeholder:text-gray-500 transition focus:outline-none focus:border-blue-500 focus:shadow-md dark:bg-gray-900 dark:border-gray-700 dark:placeholder:text-gray-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 font-medium text-white transition bg-linear-to-r from-blue-500 to-pink-500 rounded-lg hover:from-blue-600 hover:to-pink-600 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
