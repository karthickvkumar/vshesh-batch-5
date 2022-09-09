import ClassComponent from "./components/class-component";
import FunctionalComponent from "./components/functional-component";
import FormSubmittion from "./components/form-submittion";

import './App.css';

function App() {
  return (
    <div>
      <h1 className="heading">Hello, Welcome to React JS</h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <FormSubmittion></FormSubmittion>
    </div>
  );
}

export default App;
