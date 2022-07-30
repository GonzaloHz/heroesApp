import { Route, Routes } from "react-router-dom"
import Login from "../Component/Login/Login"
import DashboardRoutes from "./DashboardRoutes"

export default function AppRouter(){
    return(<div>
        <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route path='*' element={<DashboardRoutes/>}/>
        </Routes>
    </div>)
}