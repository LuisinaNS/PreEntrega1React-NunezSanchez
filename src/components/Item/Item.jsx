import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ objeto }) {
  return (
    <Link to={`/item/${objeto.id}`}>
      <div className= {styles.cajita}>
        <p className= {styles.titulo}>{objeto.nombre}</p>
        <img className= {styles.imagen} src={objeto.imagen} />
        <p className= {styles.desc}>Descripción: {objeto.descripcion}</p>
        <p>Unidades disponibles: {objeto.stock}</p>
      </div>
    </Link>
  );
}

export default Item;
