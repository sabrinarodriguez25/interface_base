import React, { useEffect, useState } from 'react';
import LoaderAllItems from "../../services/LoaderAllItems";
import '../../styles/global.css';
import ApiMain from "../../componentes/ApiMain"


const Main = () => {
  const url = "https://dog.ceo/api/breeds/image/random"; // URL de la API de perros
  const [cleanDataDetail, setcleanDataDetail] = useState('');

  useEffect(() => {
    LoaderAllItems(setcleanDataDetail, url);
  }, []);

  return (
    <div>
        
      <h1 className="main-title">API de Perros</h1>
      
      {/* Mostrar la imagen si cleanDataDetail no está vacío */}
      {cleanDataDetail ? (
        <ApiMain data={cleanDataDetail} />
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
};

export default Main;
