"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
   // e.preventDefault();
    
    setSubmitted(true);
  };

  return (
    <div id="contact" className="w-full h-screen flex items-center justify-center bg-black">
      <form
      action={`https://getform.io/f/aqoeqkda`}
      method="POST"
        onSubmit={handleSubmit}
        className="bg-black backdrop-blur-lg rounded-xl p-8 shadow-lg border border-blue-600 flex flex-col gap-4 max-w-lg w-full justify-center items-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-black text-white placeholder-gray-400 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-black text-white placeholder-gray-400 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-4 py-2 rounded bg-black text-white placeholder-gray-400 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      <motion.button
  type="submit"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="mt-2 px-6 py-2  cursor-pointer rounded bg-gradient-to-r from-blue-600 to-blue-300 hover:bg-blue-700 text-white font-semibold shadow-md transition-all self-center"
>
  {submitted ? "Thank you!" : "Send Message"}
</motion.button>

      </form>
    </div>
  );
};

export default ContactForm;
