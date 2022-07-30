import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function NavBar(){
    const Navigate = useNavigate();

    const name = useSelector(state=>state.name)
    console.log(name,"!!!!!")

    const nombre = useMemo(()=>name, [name])
    console.log(nombre,"22222")
    const handleLogout =()=>{
        Navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact="true"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact="true"
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact="true"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                        { name }
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    > 
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}