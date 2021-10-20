import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <header>
    <h1 style="margin-top: 3%; text-align: center;">PLATAFORMA DE GESTIÓN DE VENTAS</h1>
    <div>
    <ul class="navbar">
        <li> <button class="mainbutton">Módulo- Usuarios </button>  
        </li>
        <li> <button class="mainbutton">Módulo-Productos</button>
        </li>
        <li><button class="mainbutton">Módulo- Ventas</button>
        </li>
    </ul>
    </div>

    <img src="./media/alan-navarro-621lL8sdbtI-unsplash.jpg" alt="foto de una sala" width="1300" height="400"/>
    <a 
     href="./formulario.html"> <h1  style="margin-top:3%; text-align: center; background-color: tan;">Acceso con Google</h1>
    </a>
  </header>
<footer></footer>
    </div>
  );
}

export default App;
