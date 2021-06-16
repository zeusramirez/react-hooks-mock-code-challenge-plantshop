import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantsArray, setPlantsArray] = useState([])
  const [searchText, setSearchText] = useState("")



  function handleSubmit(e, newName, newImage, newPrice){
    e.preventDefault()
    let newPlantObj = {
      name: newName,
      image: newImage,
      price: newPrice
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlantObj)
    })
      .then(res => res.json())
      .then(newPlant => appendNewPlant(newPlant))
  }
   const appendNewPlant = (newPlant) => {
     let updatedPlants = [...plantsArray]
     updatedPlants.push(newPlant)
     setPlantsArray(updatedPlants)
   }


  function handleSearch(e){
    setSearchText(e.target.value)
  }
  //fetch data 
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data =>setPlantsArray(data))
  }, [])

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plantsArray={plantsArray} searchText={searchText}/>
    </main>
  );
}

export default PlantPage;
