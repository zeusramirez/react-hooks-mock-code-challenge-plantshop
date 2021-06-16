import React, {useState} from "react";

function NewPlantForm(props) {

  const [newName, setNewName] = useState("")
  const [newImage, setNewImage] = useState("")
  const [newPrice, setNewPrice] = useState(0)

  function handleName(e){
    setNewName(e.target.value)
  }  
  function handleImage(e){
    setNewImage(e.target.value)
  }
  function handlePrice(e){
    setNewPrice(e.target.value)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => props.handleSubmit(e, newName, newImage, newPrice)}>
        <input type="text" name="name" placeholder="Plant name" value={newName} onChange={e => handleName(e)} />
        <input type="text" name="image" placeholder="Image URL" value={newImage} onChange={e =>handleImage(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice} onChange={e => handlePrice(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
