import { LOGIN, LOGOUT } from "./actionTypes"

// const init = ()=>{
//     return JSON.parse(localStorage.getItem('user')) || { logged:false } 
// }

const initialState={
    name:"",
    // init,
    logged:false
}

export const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                logged: true,
                name: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                name: "",
                logged: false
            }
        default: 
            return{
            ...state
            }
    }
}