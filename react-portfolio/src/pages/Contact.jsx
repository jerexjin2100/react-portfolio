function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:px-20">
      <h2 className="mb-6 text-3xl font-bold text-center dark:text-white">Contact Me</h2>
      <form className="flex flex-col max-w-lg gap-4 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
