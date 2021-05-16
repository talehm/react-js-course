import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import MainClass from "./components/MainClass"

import dateFormat from "dateformat"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ErrorBoundary from "./ErrorBoundary"
import {useEffect,useState} from "react"

function App() {
  //const text=<h2> Hello All</h2>
  //const date= new Date();
  const [newComp, handleComponent] = useState(true)
  const [isLoading, handleLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      handleLoading(false)
    },5000)
  },[])

  return (
    <div className="App">
     <Header />
     <h2 onClick={()=>handleComponent(!newComp)}>Change Component</h2>
     {isLoading ? <h1> Loading ... </h1> 
                : <ErrorBoundary>
                    {newComp ?  <Main /> : <MainClass/> }
                  </ErrorBoundary> }
                  
     <Footer />
    </div>
  );
}

export default App;
