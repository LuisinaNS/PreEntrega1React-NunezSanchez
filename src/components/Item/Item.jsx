import { Link } from "react-router-dom";
import styles from "./Item.module.css";

function Item({ objeto }) {
  return (
    <Link to={`/item/${objeto.id}`}>
      <div className= {styles.item}>
        <p>{objeto.nombre}</p>
        <img src={objeto.imagen} />
        <p>Descripción: {objeto.descripcion}</p>
        <p>Unidades disponibles: {objeto.stock}</p>
      </div>
    </Link>
  );
}

export default Item;
