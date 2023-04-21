import productos from "../../data/data.js";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [lista, setLista] = useState([]);
 

  const todoOk = true;

  function datos() {
    return new Promise((resolve, reject) => {
      if (todoOk) { setTimeout(() => { resolve(productos) }, 2000); }
      else { setTimeout(() => { reject("error") }, 2000); }

    })
  }

    const data = datos()
  data.then(function (res) {setLista(res)})
  data.catch(function (rej) { console.log(rej, "error") })
  console.log(lista)

  return (
    <div style={{border:"2px green solid"}}>
      <p>{greeting}</p>
      <ItemList catalogo={lista}/>  
    </div> 
  );
};



export default ItemListContainer;
