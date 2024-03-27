import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, logIn, logOut } from "./redux/actions";
import Profile from "./Components/Profile";
import CounterActions from "./Components/CounterActions";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Bienvenue dans cette démo React-Redux</h1>
      {/* Affichage et gestion du compteur */}
      <h3>Compteur: {counter.value}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      {/* Affichage et gestion de l'authentification */}
      <h3>Authentification: {auth ? "Connecté" : "Déconnecté"}</h3>
      <button onClick={() => dispatch(logIn())}>Log In</button>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
      <br />

      <Profile />
      <br></br>
      <CounterActions />
    </div>
  );
}

export default App;
