import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode: El modo estricto solamente son ejecutadas en el modo de desarrollo
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)

// netlify.com: Ayuda mucho para desplegar nuestro proyecto que no contenga un backend a un dominio propio y de esta manera ver que está funcionando correctamente nuestra app
