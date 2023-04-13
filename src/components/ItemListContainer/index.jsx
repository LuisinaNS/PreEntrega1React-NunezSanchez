import ItemCount from "../ItemCount/ItemCount";
import productos from "../../data/data.json";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [lista, setLista] = useState([]);
  const mostrarNro = (contar) => {
    console.log("cualquier cosa", contar)
    window.alert(contar)
  }

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
    <div>
      <p>{greeting}</p>
      <ItemList catalogo={lista}/>
      <ItemCount stock={10} inicial={0} onAdd={mostrarNro} />
    </div>
  );
};



export default ItemListContainer;
