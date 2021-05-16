
import {useEffect, useState} from 'react'
import Paper from "./home/Paper"
import Chip from "./home/Chip"

function Main(props) {
   
    const [test, handleTest] = useState(null);
    
    const logMe=(text)=>{
        console.log(text)
       
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
        text: "Text 4",
        func: ()=>{
            console.log("4")
        }
    }]

    // if (props){
    //     throw new Error("Crashed");
    // }

     useEffect(() => {
        // It will be called before unmounting.

        console.log('Component is updated');
        
      }, [test]);
    return (
        <div>
            
            <Paper data={data} style={{width:"100%"}} />
            <div style={{width:"100%", float:"left"}}>
            <Chip data={data} />
            <h1 onClick={()=> handleTest("Test Paragraph")}>Test Me</h1>
            <h2>{test}</h2>
            </div>
        </div>
    )
}

export default Main
