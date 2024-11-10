import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../../componentes/ItemList"; 
import '../../styles/ItemList.css'
import Card from "../../componentes/Card";
import Navbar from "../../componentes/Navbar";
function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://catfact.ninja/fact') //consumo de api//
      .then(response => {
        // Transformar la respuesta en un arreglo
        setItems([response.data.fact]);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (

    
    <div className="items-container">
      <h2>Lista de Hechos Interesantes</h2>
      <ItemList items={items} /> {/* Componente que muestra los datos de la API */}

      <Navbar/>

      {/* Bloque de tarjetas con descripciones de personajes */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Card 
          className="card-container"
          image="https://investigativegeek.com/wp-content/uploads/2023/05/inosuke-demon-slayer.jpeg"
          title="Inosuke" 
          description="Inosuke es un Cazador de Demonios feroz y temperamental conocido por su máscara de jabalí y su naturaleza salvaje. Fue criado por animales en las montañas, lo que lo hizo desarrollar una personalidad salvaje y un instinto de lucha inigualable."
        />
        <Card 
          image="https://elcomercio.pe/resizer/v2/6FAR7QTRW5DQ5CMMC3HFHEOC6Y.jpg?auth=cfd3bd3907b4bd00d76dc1207ce4dafce5fbd60ebbf7381e0d5bb406e7d940aa&width=1200&height=810&quality=90&smart=true" 
          title="Tanjiro Kamado" 
          description="Tanjiro es el protagonista de Demon Slayer, un joven amable y de buen corazón que busca vengar a su familia y salvar a su hermana Nezuko, quien fue convertida en un demonio."
        />
        <Card 
          image="https://www.mundodeportivo.com/alfabeta/hero/2024/06/zenitsu-furioso-en-demon-slayer.jpg?width=1200" 
          title="Zenitsu" 
          description="Zenitsu es un Cazador de Demonios que al principio parece cobarde y temeroso, a menudo entrando en pánico en situaciones peligrosas. Sin embargo, cuando está inconsciente o bajo una presión extrema, su verdadero poder sale a la luz."
        />
      </div>
    </div>
  );
}



export default ItemsPage;
