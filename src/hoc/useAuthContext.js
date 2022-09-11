import { AuthContext } from "../contexts/AuthContext.js"
import { useContext } from "react"

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('useAuthContext must be used within an AuthProvider')
    }

    return context
}