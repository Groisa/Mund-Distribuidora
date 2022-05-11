import { useSelector } from "react-redux"
import { selectUser } from "../../store/Users/user.selctor"
import { Navigate } from "react-router-dom"
function PrivateRouter ({children}) {
   const user = useSelector(selectUser)
   if(!user) {
       return <Navigate to='/login'/>
   }
    return children
}
export default PrivateRouter