import React, {useState} from "react";

function PlantCard(props) {
  const {name, image, price} = props
  const [stockStatus, setStockStatus] = useState(true)

  const handleStock = () => {
    setStockStatus(stockStatus => !stockStatus)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
