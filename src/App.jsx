import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contador from './components/Contador/Contador'
import AlumnoCard from './components/AlumnoCard/AlumnoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />
      {/* 2. Contenedor principal de la página */}
      <div className="container">
      <h2 className="mb-4">Directorio de Alumnos</h2>
      <div className="row">
        {/* 3. Reutilizamos el componente AlumnoCard pasándole Props

        diferentes */}
        <AlumnoCard
        nombre="Daniel Puccio"
        carrera="Desarrollo de Software"
        estado="Matriculado"
        />
        <AlumnoCard
        nombre="Maria Perez"
        carrera="Diseño Gráfico"
        estado="Inactivo"
        />
        <AlumnoCard
        nombre="Carlos Mendoza"
        carrera="Administración Industrial"
        estado="Matriculado"
        />
        </div>
        <div className="row mt-2">
        <AlumnoCard
        nombre="Lucía Fernández"
        carrera="Desarrollo de Software"
        estado="Matriculado"
        />
        <AlumnoCard
        nombre="Javier Torres"
        carrera="Diseño Gráfico"
        estado="Inactivo"
        />
        <AlumnoCard
        nombre="Sofía Ramírez"
        carrera="Administración Industrial"
        estado="Matriculado"
        />
        </div>
        <div className="mt-4">
        <Contador />
        </div>
        </div>
        </>
        );
        }

export default App
