import Cart from "../CartWidget/CartWidget";
import styles from "../Navbar/navbar.module.css";
import logo from "../../assets/images/LogoOpticaOnline.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>     
      <Link to={"/"}> <img src={logo} /> </Link>
      <Link to={"/category/Cristales"}>Cristales</Link>      
      <Link to={"/category/Lentes de Contacto"}>Lentes de Contacto</Link>
      <Link to={"/category/Recetados"}>Recetados</Link>
      <Link to={"/category/Anteojos de Sol"}>Anteojos de Sol</Link>

      <Cart />
    </div>
  );
};

export default Navbar;
