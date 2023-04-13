function Item({objeto}){
return(
    <div>
       <p>{objeto.nombre}</p>
       <p>{objeto.precio}</p>
       <p>{objeto.stock}</p>        
    </div>
)
}

export default Item;