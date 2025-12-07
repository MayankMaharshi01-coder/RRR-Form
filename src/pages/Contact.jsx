import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_kg8wxnh";
    const templateID = "template_d4nc59j";
    const publicKey = "6xEtIFLXeB_A4rwLM";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "RJ TechForce",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Message sent successfully!");
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <>
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-linear-to-tr from-[#98fbcb] via-[#7fcfa8] to-[#558b71] p-4">
      <div className="flex font-serief flex-col items-center rounded-2xl gap-10  inset-shadow-gray-900/50 inset-shadow-sm/50 justify-center bg-linear-to-tr from-[#98fbcb] via-[#7fcfa8] to-[#baffde] p-4">
      <h1 className="text-2xl lg:text-4xl text-green-600 font-bold tracking-tighter">Location: <a href="https://www.google.com/maps/search/Office+of+Cheaf+Education+officer,+opposite+PWD+office+Churu./@28.2873068,74.9569876,17z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline hover:text-green-500">Office of Chief District Education officer, opposite PWD office Churu.</a></h1>
      <h1 className="text-2xl lg:text-4xl text-green-600 font-bold">Nodal Incharge: Gaurav Sharma (Contact no. 9024303162)</h1>
      </div>

      <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-serif font-extrabold text-green-700 mb-8 drop-shadow-lg"
      >
        Write your issue here 👇🏻
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl w-full max-w-md p-8"
      >
        <div className="mb-5">
          <label
            className="block text-green-600 font-semibold mb-2 text-lg"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:bg-white/90 focus:ring-2 focus:ring-green-600 text-gray-800 outline-none transition-all duration-300"
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-green-600 font-semibold mb-2 text-lg"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:bg-white/90 focus:ring-2 focus:ring-green-600 text-gray-800 outline-none transition-all duration-300"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-green-600 font-semibold mb-2 text-lg"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 focus:bg-white/90 focus:ring-2 focus:ring-green-600 text-gray-800 outline-none transition-all duration-300"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full py-3 rounded-full bg-linear-to-tr from-[#06ff87] via-[#3fffa2] to-[#00d870] text-green-600 font-bold text-lg shadow-lg hover:shadow-pink-400/50 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
        >
          ✉️ Send Message
        </motion.button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 text-green-600 text-lg font-semibold"
      >
        © {new Date().getFullYear()} Code चूरू | Designed by RJ TechForce 🚀
      </motion.div>
    </div>
    </div>
    </>
  );
};

export default Contact;
