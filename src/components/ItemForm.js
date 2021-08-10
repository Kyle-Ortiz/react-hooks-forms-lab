import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemForm,setItemForm] = useState("");
  const [selection,setSelection]= useState("Produce");
  
  function handleSelectChange(event) {
    setSelection(event.target.value);
  }
  function handleItemForm(event) {
    setItemForm(event.target.value);
  }

  return (
    <form className="NewItem" onSubmit={(e)=>{
      e.preventDefault();
      props.onItemFormSubmit(
      {
        id: uuid(),
        name: itemForm,
        category:selection
      } 
    )}}>
      <label>
        Name:
        <input onChange={handleItemForm}type="text" name="name" value={itemForm}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSelectChange} value={selection}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
