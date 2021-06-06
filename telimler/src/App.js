import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import MainClass from "./components/MainClass"

import About from "./components/home/About"
import Projects from "./components/home/Projects"
import Blog from "./components/home/Blog"
import Article from  "./components/home/Article"
import dateFormat from "dateformat"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import ErrorBoundary from "./ErrorBoundary"
import {useEffect,useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  //const text=<h2> Hello All</h2>
  //const date= new Date();
  const [newComp, handleComponent] = useState(true)
  const [isLoading, handleLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      handleLoading(false)
    },5000)
  },[])

  return (
    <div>
    <Router>
    <div className="App">
     <Header />
     <Switch>
        <Route exact path="/">
          <h2 onClick={()=>handleComponent(!newComp)}>Change Component</h2>

          <div style={{width:'100%'}}>
            
            {isLoading ? <h1> Loading ... </h1> 
                        : <ErrorBoundary >
                            {newComp ?  <Main /> : <MainClass/> }
                          </ErrorBoundary> }
            </div>   
      </Route>
        <Route exact path="/about"> <About /></Route>
        <Route exact path="/projects"> <Projects /></Route>
        <Route exact path="/blog"> <Blog /></Route>
        <Route exact path="/blog/:id"> <Article /> </Route>
      </Switch>
     <Footer />
    </div>
    </Router>   
</div>
    
  );
}

export default App;
