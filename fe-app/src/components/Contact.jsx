import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-white inline-block">
          Contact Me
        </h2>
        <form className="bg-gray-900 border-4 border-white rounded-2xl shadow-xl p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="p-4 bg-gray-800 text-white border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="p-4 bg-gray-800 text-white border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-gray-800 text-white border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 bg-gray-800 text-white border border-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
