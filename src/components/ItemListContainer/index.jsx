import productos from "../../data/data.js";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [lista, setLista] = useState([]);

  const param = useParams();
  console.log(param);

  const todoOk = true;

  function generarProducto() {
    if (param.id !== undefined) {
      const filtro = productos.filter((x) => x.categoria === param.id);
      return filtro;
    } else {
      return productos;
    }
  }

  function datos() {
    return new Promise((resolve, reject) => {
      if (todoOk) {
        setTimeout(() => {
          resolve(generarProducto());
        }, 2000);
      } else {
        setTimeout(() => {
          reject("error");
        }, 2000);
      }
    });
  }

  useEffect(() => {
    const data = datos();
    data.then(function (res) {
      setLista(res);
    });
    data.catch(function (rej) {
      console.log(rej, "error");
    });
    console.log(lista);
  }, [param.id]);

  return (
    <div>
      <p>{greeting}</p>
      <ItemList catalogo={lista} />
    </div>
  );
};

export default ItemListContainer;
