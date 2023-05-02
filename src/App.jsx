import styles from "./App.module.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.all}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer/>}
          />

          <Route
            path="/category/:id"
            element={<ItemListContainer/>}
          />

          <Route
            path="/item/:id"
            element={
              <ItemDetailContainer/>
            }
          />

          <Route path="/Cart" element={<Carrito />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
