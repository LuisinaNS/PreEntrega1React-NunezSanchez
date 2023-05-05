import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { InfoCarrito } from "../../Context/InfoCarrito";

function CartWidget() {
    return <FontAwesomeIcon icon={faShoppingCart} />
}

export default CartWidget;