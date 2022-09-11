import {createContext , useReducer , useEffect , useState} from 'react';
import {GetMeDetails} from '../service/UserService';
import {getItemFromStorage , removeItemFromStorage} from'../helpers/convertTimeToMilliSec';

export const AuthContext = createContext();

export const authReducer = (state={isAuthenticated: false}, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
        return {...state};
        case 'USER':
            return {  ...state, user: action.payload ,isAuthenticated : true }
        case 'LOGOUT_USER':
            return { ...state ,user: "" , isAuthenticated: false}
        case "LOGIN_ERROR":
            return { ...state ,  errorMessage: action.error};
        default:
            // throw new Error(`Unhandled action type: ${action.type}`);
            return state        
    }
}

const admin = getItemFromStorage('admin');
const $token = getItemFromStorage('token');

export const AuthProvider = ({children })  =>  {
    
    const [state, dispatch] = useReducer(authReducer ,admin || null);

    useEffect( () =>  {
   
        async function currentUser() {
            try{
                if($token){
                    let res = await GetMeDetails($token);
                    if (res.ok) {
                        dispatch({type: 'USER' , payload : admin})

                           
                    } else {
                        let err = await res.json();
                        throw err[0].message;
                    }

                    
                }
                else{
                    
                    throw 'You mut login'
                }
            }
            catch(err){
                removeItemFromStorage('admin');
                removeItemFromStorage('token');
                
            }
        }
        currentUser()

    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
     )


}