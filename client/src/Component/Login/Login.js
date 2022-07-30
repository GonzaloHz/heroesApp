import { useDispatch } from "react-redux"
import { getLogin } from "../../Redux/Redux/Actions/Actions";
import { useNavigate } from "react-router-dom"



export default function Login(){
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const handleLogin =()=>{
        
        dispatch(getLogin("Gonzalo"))
        localStorage.setItem("user", "gonzaloooo")
        
        Navigate('/') 
    }
    return(<div>
        <h1>Login</h1>
        <hr/>
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>)
}