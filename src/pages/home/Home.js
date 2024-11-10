import React, {useState,useEffect} from "react";
import Navbar from "../../componentes/Navbar";
import Card from "../../componentes/Card";
import "../../styles/Card.css";

//importar estilos y otros componentes//

function Home() {
    const[menssage, setMenssage] = useState('cargando...');

    useEffect(() => {
        setTimeout(() => {
            setMenssage('Demon Slayer');

        },2000);
    },[]);

    //Hook que inicializa la variable menssage y se utiliza el setTimeout para ejecutar despues de 2 segundos y muestra em mensaje//

    return (

        <div >
        
        <h1>{menssage}</h1>  {/*muestra la variable almacenada*/}

        <Navbar/> {/* componente  que tiene el menu de navegación*/}

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
                    description=" Tanjiro es el protagonista de Demon Slayer, un joven amable y de buen corazón que busca vengar a su familia y salvar a su hermana Nezuko, quien fue convertida en un demonio."
                />
                <Card 
                    image="https://www.mundodeportivo.com/alfabeta/hero/2024/06/zenitsu-furioso-en-demon-slayer.jpg?width=1200" 
                    title="Zenitsu" 
                    description=" Zenitsu es un Cazador de Demonios que al principio parece cobarde y temeroso, a menudo entrando en pánico en situaciones peligrosas. Sin embargo, cuando está inconsciente o bajo una presión extrema, su verdadero poder sale a la luz"
                />
            </div>

        

        </div>
        

        
    
    )
    
   
}

export default Home;