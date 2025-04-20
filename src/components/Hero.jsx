import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Hola, soy <span className="text-blue-500">Rodrigo Slucka Zarate</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8"
        >
          Desarrollador Frontend | React | JavaScript
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-flex items-center"
        >
          Contáctame <FiDownload className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
}   