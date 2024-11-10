import React from "react";

function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.length > 0 ? ( // si cumple es porque la lista no esta vacía 
        items.map((item, index) => (
          <p key={index} className="item">
            {item}
          </p> // renderiza cada item dentro de p 
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemList;
