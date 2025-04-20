import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold text-blue-500">Rodrigo Slucka Zarate</a>
        
        {/* Menú para móviles */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Menú para desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500">Sobre mí</a>
          <a href="#skills" className="hover:text-blue-500">Habilidades</a>
          <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          <a href="#contact" className="hover:text-blue-500">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/tu-usuario" target="_blank"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank"><FaLinkedin size={20} /></a>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 pb-4">
          <a href="#about" className="block px-4 py-2 hover:bg-gray-100">Sobre mí</a>
          <a href="#skills" className="block px-4 py-2 hover:bg-gray-100">Habilidades</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-100">Proyectos</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contacto</a>
        </div>
      )}
    </nav>
  );
}