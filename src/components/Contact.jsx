import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // Reemplaza con tus credenciales de EmailJS
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => alert("Mensaje enviado!"))
    .catch(() => alert("Error al enviar"));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">Contáctame</h2>
      <form 
        ref={form} 
        onSubmit={sendEmail}
        className="max-w-lg mx-auto"
      >
        <div className="mb-4">
          <input 
            type="text" 
            name="user_name" 
            placeholder="Nombre" 
            className="w-full p-3 border rounded"
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            type="email" 
            name="user_email" 
            placeholder="Email" 
            className="w-full p-3 border rounded"
            required 
          />
        </div>
        <div className="mb-6">
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Mensaje" 
            className="w-full p-3 border rounded"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center mx-auto"
        >
          Enviar <FiSend className="ml-2" />
        </button>
      </form>
    </section>
  );
}