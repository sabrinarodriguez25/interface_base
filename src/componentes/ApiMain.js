import React from 'react';

const ApiMain = ({ data }) => {
  return (
    <div>
      <img src={data} alt="Imagen de un perro" style={{ width: '300px', borderRadius: '8px' }} />
    </div>
  );
};

export default ApiMain;