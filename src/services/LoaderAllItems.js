import axios from 'axios';

const LoaderAllItems = async (setData, url) => {
    try {
      const response = await axios.get(url);
      setData(response.data.message); // Asegúrate de que la API devuelve la imagen en 'message'
    } catch (error) {
      console.error('Error al cargar los datos:', error);
      setData('Error al cargar la imagen'); // Mensaje de error en caso de fallo
    }
  };
  
  export default LoaderAllItems;