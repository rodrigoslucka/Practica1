import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/rodrigoslucka" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Rodrigo Slucka Zarate. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}