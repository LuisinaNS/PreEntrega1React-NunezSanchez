import Cart from "../CartWidget/CartWidget";
import styles from "../Navbar/navbar.module.css";
import logo from "../../assets/images/LogoOpticaOnline.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>     
      <Link to={"/"}> <img src={logo} /> </Link>
      <p><a href="">Sobre Nosotros</a></p>
      <p><a href="">Servicios</a></p>
      <p><a href="">Contactanos</a></p>
      <Cart />
    </div>
  );
};

export default Navbar;
