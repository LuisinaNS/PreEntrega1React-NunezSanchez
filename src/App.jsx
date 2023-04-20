import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  
  return (
    <div>   
    <Navbar />
    <ItemDetailContainer titulo="Este es el contenido de IDC"/>
    <ItemListContainer greeting="Bienvenidos!" />
    </div>
  );
}

export default App;
