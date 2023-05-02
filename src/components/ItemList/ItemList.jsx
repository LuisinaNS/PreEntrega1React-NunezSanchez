import styles from "./ItemList.module.css";
import Item from "../Item/Item.jsx"

function ItemList({ catalogo }) {
    return (
        <div className={styles.lista}>
            {catalogo.map(function (varA, idx) {
                return <Item key={idx} objeto={varA} />
            })}
        </div>
    )
}

export default ItemList;