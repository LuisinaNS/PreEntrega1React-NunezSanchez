import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      
      <Navbar/>

        <Routes>
          <Route path="/"
          element={<ItemListContainer greeting="Bienvenidos!" />}
          />

          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Bienvenidos!" />}
          />

          <Route
            path="/item/:id"
            element={<ItemDetailContainer titulo="Este es el contenido de IDC" />}
          />         
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
