function Item({objeto}){
return(
    <div style={{border:"2px solid grey"}}>
       <p>{objeto.nombre}</p>
       <img style={{width: 200}} src={objeto.imagen}/>
       <p>Descripción: {objeto.descripcion}</p>
       <p>Unidades disponibles: {objeto.stock}</p>        
    </div>
)
}

export default Item;