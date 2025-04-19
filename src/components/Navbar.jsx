import { useState } from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <nav className="">
            <div>
                <a>Rodrigo Slucka</a>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div>
                    <a>Sobre mi</a>
                    <a>Habilidades</a>
                    <a>Proyectos</a>
                    <a>Contacto</a>
                </div>
            )}
        </nav>
    );
}
