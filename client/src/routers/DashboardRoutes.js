import { Route, Routes, Navigate } from "react-router-dom"
import DC from "../Component/DC/DC"
import HeroesScreen from "../Component/Heroes/HeroesScreen"
import Marvel from "../Component/Marvel/Marvel"
import NavBar from "../Component/Navbar/Navbar"
import SearchScreen from "../Component/Search/SearchScreen"

export default function DashboardRoutes(){
    // const Navigate = useNavigate();
    return(<>
        <NavBar/>
        <div className="container mt-4">
        <Routes>
            <Route exact path='/marvel' element={<Marvel/>}/>
            <Route exact path='/heroe/:heroeid' element={<HeroesScreen/>}/>
            <Route exact path='/dc' element={<DC/>}/>
            <Route exact path='/search' element={<SearchScreen/>}/>
            <Route path='*' element={<Marvel/> && <Navigate to="/marvel"/>}/>
            
        </Routes>
        </div>
    </>)
}