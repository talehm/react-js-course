import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import dateFormat from "dateformat"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
function App() {
  //const text=<h2> Hello All</h2>
  //const date= new Date();

  return (
    <div className="App">
     <Header />
     <Main / >
     <Footer />
    </div>
  );
}

export default App;
