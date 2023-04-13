import Cart from "../CartWidget/CartWidget";
import styles from "../Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>     
      <p><a href="">Inicio</a></p>
      <p><a href="">Sobre Nosotros</a></p>
      <p><a href="">Servicios</a></p>
      <p><a href="">Contactanos</a></p>
      <Cart />
    </div>
  );
};

export default Navbar;
