import { useState } from "react";
import "./css/App.css";

function App() {
  const [name, setName] = useState("Hola Mundo");

  return (
    <>
      <main className="container">
        <h1 className="titulo">
          Administrador de Citas Veterinario{" "}
          <span className="titulo-bold">Veterinario</span>
        </h1>
        <button
          type="button"
          className="btn-nueva-cita"
          onClick={() => setName("Hola javi")}
        >
          <span className="btn-texto-nueva-cita">Nueva Cita</span>
        </button>
      </main>
    </>
  );
}

export default App;
