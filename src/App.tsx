import { useState } from "react";
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";

interface Hints {
  [key: string]: string;
}

interface Category {
  words: string[];
  hints: Hints;
}

interface WordCategories {
  [key: string]: Category;
}

const wordCategories: WordCategories = {
  planetas: {
    words: ['tierra', 'marte', 'venus', 'jupiter', 'saturno', 'neptuno'],
    hints: {
      tierra: 'El tercer planeta del sistema solar y el único conocido por albergar vida',
      marte: 'El cuarto planeta del sistema solar, apodado el "Planeta Rojo"',
      venus: 'El segundo planeta del sistema solar, conocido como el "Planeta Gemelo de la Tierra"',
      jupiter: 'El quinto planeta del sistema solar, el más grande y poderoso',
      saturno: 'El sexto planeta del sistema solar, conocido por sus impresionantes anillos',
      neptuno: 'El octavo planeta del sistema solar, un gigante de hielo distante'
    }
  },
  deportesExtremos: {
    words: ['paracaidismo', 'buceo', 'alpinismo', 'surf', 'escalada', 'rafting'],
    hints: {
      paracaidismo: 'Deporte en el que se salta desde un avión y se cae libremente antes de abrir un paracaídas',
      buceo: 'Actividad en la que se nada bajo el agua equipado con un tanque de aire',
      alpinismo: 'Deporte de escalar montañas, a menudo incluyendo condiciones extremas',
      surf: 'Deporte acuático en el que se monta una tabla en la cresta de una ola',
      escalada: 'Actividad de escalar rocas o paredes de manera vertical u horizontal',
      rafting: 'Deporte de navegar en balsas inflables por aguas rápidas o tumultuosas'
    }
  },
  inventosRevolucionarios: {
    words: ['internet', 'televisor', 'telegrafo', 'automovil', 'telefono', 'aviacion'],
    hints: {
      internet: 'Red mundial de comunicación que conecta millones de dispositivos y usuarios en todo el mundo',
      televisor: 'Dispositivo electrónico que recibe señales de televisión y muestra imágenes en movimiento',
      telegrafo: 'Sistema de comunicación de largo alcance que utiliza señales eléctricas para transmitir mensajes',
      automovil: 'Vehículo motorizado diseñado para transportar personas y carga',
      telefono: 'Dispositivo de comunicación que permite la transmisión de voz a larga distancia',
      aviacion: 'El desarrollo y operación de aeronaves, incluyendo aviones y helicópteros'
    }
  },
  cine: {
    words: ['pelicula', 'director', 'actor', 'actriz', 'guion', 'fotografia'],
    hints: {
      pelicula: 'Un largometraje cinematográfico que cuenta una historia a través de imágenes y sonidos',
      director: 'La persona responsable de la realización artística y técnica de una película',
      actor: 'Persona que interpreta un papel en una película, obra de teatro o programa de televisión',
      actriz: 'Una mujer que actúa en películas, obras de teatro o programas de televisión',
      guion: 'Texto escrito que describe la historia, diálogos y acciones de una película antes de ser filmada',
      fotografia: 'El arte y la técnica de capturar imágenes utilizando una cámara fotográfica'
    }
  }
};

function App() {
  const [currentCategory, setCurrentCategory] = useState<keyof WordCategories | null>(null);

  const selectRandomCategory = () => {
    const categories = Object.keys(wordCategories) as (keyof WordCategories)[];
    const randomIndex = Math.floor(Math.random() * categories.length);
    setCurrentCategory(categories[randomIndex]);
  };

  return (
    <div className="App">
      <Welcome />
      {currentCategory && <Clock />}
      <div className="category-container">
        <button onClick={selectRandomCategory} className="random-button">
          Select Random Category
        </button>
        {currentCategory && (
          <div className="category-animation">
            <h2>{currentCategory}</h2>
            <Hangman
              words={wordCategories[currentCategory].words}
              hints={wordCategories[currentCategory].hints}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
