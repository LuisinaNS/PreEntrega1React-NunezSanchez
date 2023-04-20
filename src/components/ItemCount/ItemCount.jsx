import { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, inicial, onAdd }) {

    const [contador, setContador] = useState(inicial);

    function handleSuma() {
        if (contador < stock) { setContador(contador + 1) }
    }

    function handleResta() {
        if (contador > 1) { setContador(contador - 1) }
    }

    function handleOnAdd() {
        onAdd(contador)
    }

    return (
        <div>
            <div className={styles.count}>
                <button className="btn btn-light" onClick={handleResta}>-</button>
                <h4>{contador}</h4>
                <button className="btn btn-light" onClick={handleSuma}>+</button>
            </div>

            <button className="btn btn-secondary" onClick={handleOnAdd}>Agregar al carrito</button>

        </div>

    )
}


export default ItemCount;