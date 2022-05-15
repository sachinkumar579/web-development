import "./App.css";
import Effect from "./Effect";
import Reducer from "./Reducer";
import State from "./State";
import Ref from "./Ref";

function App() {
  return (
    <div className="main">
      <State></State>
      --------------------------
      <Effect></Effect>
      --------------------------
      <Ref></Ref>
      --------------------------
      <Reducer></Reducer>
    </div>
  );
}

export default App;
