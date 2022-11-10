import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar  />
        <ItemListContainer greeting={"Hola"} />
      </main>
    </div>
  );
}

export default App;
