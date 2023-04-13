import Item from "../Item/Item.jsx"

function ItemList({ catalogo }) {
    return (
        <div>
            {catalogo.map(function (varA, idx) {
                return <Item key={idx} objeto={varA} />
            })}
        </div>
    )
}

export default ItemList;