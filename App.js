import logo from './logo.svg';
import './App.css';
export { default as POP } from "./POP";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <POP/>
      </header>
    </div>
  );
}

export default App;
