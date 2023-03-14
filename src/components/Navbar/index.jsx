import styles from "./navbar.module.scss";

const Navbar = ({ icono }) => {
  return (
    <div className={styles.container}>
      <p><a href="">Inicio</a></p>
      <p><a href="">Sobre Nosotros</a></p>
      <p><a href="">Servicios</a></p>
      <p><a href="">Contactanos</a></p>
      <div className={styles.cart}><a href=""><img src={icono} alt="" width="30" height="30" /></a>
      <p>1</p>      
      </div>
      
    </div>
  );
};

export default Navbar;
