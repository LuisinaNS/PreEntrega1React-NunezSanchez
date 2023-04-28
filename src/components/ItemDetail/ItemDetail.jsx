import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ itemDetalle, traigoTitulo }) {

    const [cantidad, ModCantidad] = useState();
        
    const mostrarNro = (contar) => {
        console.log("cualquier cosa", contar)
        //window.alert(contar)
        ModCantidad(contar)
      }

      console.log(cantidad, "ver cantidad")

    return (      
        <div style={{border:"2px violet solid", margin:"0 0 2% 0" }}>
            <p>{traigoTitulo}</p>
            <p>{itemDetalle.nombre}</p>
            <img style={{width: 300}} src={itemDetalle.imagen}/>
            <p>Precio ${itemDetalle.precio}</p>
            <p>{itemDetalle.descripcion}</p>
            <p>Unidades disponibles: {itemDetalle.stock}</p>
            {cantidad === undefined? <ItemCount stock={itemDetalle.stock} inicial={0} onAdd={mostrarNro} /> : <Link to={"/Cart"}><button>"Ir al Carrito"</button></Link>}          
        </div>
    
    )}

   export default ItemDetail;