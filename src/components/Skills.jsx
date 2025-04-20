import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" />, level: 85 },
  { name: "CSS/Tailwind", icon: <FaCss3Alt size={40} className="text-blue-300" />, level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12 text-center">Mis Habilidades</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}