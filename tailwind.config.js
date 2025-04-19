import { plugin } from "typescript-eslint";

export default{
    content: ["./index.html", "./src/**/*.{js.ts.jsx.tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6", // Azul para botones
                secondary: "#1E293B", //Fondo oscurso
            },
        },
    },
    plugins: [],
}