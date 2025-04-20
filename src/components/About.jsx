export default function About() {
    return (
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              ¡Hola! Soy Rodrigo, desarrollador frontend con experiencia en React y JavaScript. 
              Me apasiona crear interfaces modernas y accesibles.
            </p>
            <p>
              Cuando no estoy programando, disfruto de la fotografía y el senderismo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Habilidades clave</h3>
            <ul className="space-y-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Git'].map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }