
import {useEffect, useState} from 'react'
import Paper from "./home/Paper"
import Chip from "./home/Chip"
import ArticleForm from "./home/ArticleForm"
function Main(props) {
   
    const [test, handleTest] = useState(null);
    const [isFormActive, activateForm] = useState(false);
    
    const [articles, setArticles] = useState([]);
    const logMe=(text)=>{
        console.log(text)
       
    }
   const showForm=(active)=>{
       activateForm(active);
   } 
   const submitForm=(data)=>{
    setArticles([...articles, data])
   }    
    
    const fetchArticles = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(articles => setArticles(articles.slice(0,10)))
    }
    const data=[{
        id:1,
        text: "Text 1",
        func:()=>{ logMe("blabla")}
    },
    {
        id:2,
        text: "Text 2",
        func: ()=>{
            console.log("2")
        }
    },
    {
        id:3,
        text: "Text 3",
        func: ()=>{
            console.log("3")
        }
    },
    {
        id:4,
        text: "Text 4 bla bla bla",
        func: ()=>{
            console.log("4")
        }
    }]

    // to raise an error
    // if (props){         throw new Error("Crashed");
    //  }

     useEffect(() => {
        // It will be called before unmounting.
        fetchArticles();
        //console.log('Component is updated');
        
      }, [test]);
      console.log(isFormActive)
    return (
        <div>
            <div style={{width:"100%", float:"left"}}>
            <Chip data={data} />
            {/* <h1 onClick={()=> showForm(!isFormActive)}>Add Article</h1>
            {isFormActive ? <ArticleForm  submitForm={(data)=>submitForm(data)} /> : null}
            <Paper info={data} myarticles={articles}  style={{width:"100%"}} /> */}
            
            </div>
        </div>
    )
}

export default Main
