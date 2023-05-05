import { useState } from "react";
import productos from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({titulo}) => {
    const [item, modificarItem] = useState({});
    const todoOk = true;
    const params = useParams()
   
    const filtrado = productos.find((item)=> item.id === Number(params.id))

    
    function getItem() {
        return new Promise((resolve, reject) => {
            if (todoOk) { setTimeout(() => { resolve(filtrado) }, 2000); }
            else { setTimeout(() => { reject("error") }, 2000); }

        })
    }

    let promesaDeProducto = getItem()
  //getItem().then(function (respuestaPromesa) { modificarItem(respuestaPromesa) })
    promesaDeProducto.then(function (respuestaPromesa) { modificarItem(respuestaPromesa) })
    promesaDeProducto.catch(function (errorPromesa) { console.log(errorPromesa, "error") })
    console.log(item)

    return (
      <div>
        {item ? <ItemDetail itemDetalle={item} traigoTitulo={titulo}/>:
        <p>Cargando...</p>} 
      </div>          
    );

}

export default ItemDetailContainer;