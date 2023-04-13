import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (

    <div>
      <Navbar> </Navbar>
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  );
}

export default App;
