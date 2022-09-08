import ClassComponent from "./components/class-component";
import FunctionalComponent from "./components/functional-component";

import './App.css';

function App() {
  return (
    <div>
      <h1 className="heading">Hello, Welcome to React JS</h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
    </div>
  );
}

export default App;
