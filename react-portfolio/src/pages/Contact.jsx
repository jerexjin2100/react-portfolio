function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 text-white bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold">
          Contact Me
        </h1>

        <p className="mb-10 text-gray-400">
          Feel free to reach out for opportunities or collaboration.
        </p>

        <form className="max-w-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-500"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 transition bg-pink-500 rounded-lg hover:bg-pink-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
