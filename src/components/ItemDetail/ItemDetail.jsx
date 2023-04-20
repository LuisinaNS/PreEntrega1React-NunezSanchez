import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ itemDetalle, traigoTitulo }) {
    
    const mostrarNro = (contar) => {
        console.log("cualquier cosa", contar)
        window.alert(contar)
      }

    return (      
        <div style={{border:"2px violet solid", margin:"0 0 2% 0" }}>
            <p>{traigoTitulo}</p>
            <p>{itemDetalle.nombre}</p>
            <img style={{width: 300}} src={itemDetalle.imagen}/>
            <p>Precio ${itemDetalle.precio}</p>
            <p>{itemDetalle.descripcion}</p>
            <p>Unidades disponibles: {itemDetalle.stock}</p>
            <ItemCount stock={itemDetalle.stock} inicial={0} onAdd={mostrarNro} />
        </div>
    
    )}

   export default ItemDetail;