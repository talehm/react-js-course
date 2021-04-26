import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Main data="text"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Main />
          Learn React Course
        </a>
        <Main />
      </header>
    </div>
  );
}

export default App;
