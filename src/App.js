import './App.css';
import Otro from './Otro';
import Formulario from './Formulario';
import Formularioboots from './componentes/Formularioboots';


function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
    </div>
    <div className="col-4">
    </div>
    <div className="col-4">
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>
      <Otro />
      <Formulario />
      <div className="container-fluid p-3 ">
        <Formularioboots />
      </div>
    </div>
    </>
  );
}

export default App;
