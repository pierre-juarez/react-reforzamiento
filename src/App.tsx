import { Contador } from "./Components/Contador";
import { ContadorConHook } from "./Components/ContadorConHook";
import { Login } from "./Components/Login";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr />
      <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones />
      <hr />
      <Contador />
      <hr />
      <ContadorConHook />
      <hr />
      <Login />
    </div>
  );
};

export default App;
