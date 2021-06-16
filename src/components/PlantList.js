import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  const {plantsArray, searchText} = props
  let filterPlants = plantsArray.filter(plants => plants.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <ul className="cards">
      {filterPlants.map(plant => <PlantCard key={plant.id} {...plant}/>)}
    </ul>
  );
}

export default PlantList;
