import ClassComponent from "../components/ClassComponent"
import {matematicas, naturales} from "../data/data"
import Header from "../components/generic/Header"

export default ()=>(
    <div>
        <Header/>
        <h1 style={{textAlign:"center"}}>Curso del plan</h1>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <ClassComponent nombreClase="Matematicas" estudiantes={matematicas}/>
            <ClassComponent nombreClase="Naturales" estudiantes={naturales}/>
        </div>
    </div>
)