import { useState } from "react";
import productos from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ({titulo}) => {
    const [item, modificarItem] = useState({});
    const todoOk = true;

    function getItem() {
        return new Promise((resolve, reject) => {
            if (todoOk) { setTimeout(() => { resolve(productos[2]) }, 2000); }
            else { setTimeout(() => { reject("error") }, 2000); }

        })
    }

    let promesaDeProducto = getItem()
  //getItem().then(function (respuestaPromesa) { modificarItem(respuestaPromesa) })
    promesaDeProducto.then(function (respuestaPromesa) { modificarItem(respuestaPromesa) })
    promesaDeProducto.catch(function (errorPromesa) { console.log(errorPromesa, "error") })
    console.log(item)

    return (
      <ItemDetail itemDetalle={item} traigoTitulo={titulo}/>      
    );

}

export default ItemDetailContainer;