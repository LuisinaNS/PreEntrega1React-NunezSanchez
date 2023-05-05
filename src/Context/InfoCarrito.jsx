import React, {Children} from "react";
import { useState } from "react";

export const InfoCart = React.createContext();



function Provider ({Children}) {
    const [carrito, setCarrito] = useState([]);


    return (
        <InfoCartContext.Provider value={[]}>{Children}</InfoCartContext.Provider>
    )
}

export default Provider;