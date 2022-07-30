import { useEffect } from "react";
import NavBar from "./Component/Navbar/Navbar";

export default function HeroesApp (){
    const name = useSelector(state=>state.name)
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(name))
    },[])
    return(<div>
        <NavBar/>
        <h1>HeroesApp</h1>
    </div>)
}