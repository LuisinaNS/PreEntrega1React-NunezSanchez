import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar icono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
      <h1>Óptica Online</h1>
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  );
}

export default App;
