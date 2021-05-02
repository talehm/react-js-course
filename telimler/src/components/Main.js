
import Paper from "./home/Paper"
import Chip from "./home/Chip"
function Main(props) {

    const data=[{
        id:1,
        text: "Text 1",
        func: ()=>{
            console.log("1")
        }
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

    return (
        <div>
            <Paper data={data} style={{width:"100%"}} />
            <div style={{width:"100%", float:"left"}}>
                <Chip data={data}/>
            </div>
        </div>
    )
}

export default Main
