import { useSelector } from "react-redux"
import { selectUser } from "../../store/Users/user.selctor"
import { Navigate } from "react-router-dom"
function PrivateRouter ({children, userTypes}) {
   const user = useSelector(selectUser)
   if(!user) {
       return <Navigate to='/login'/>
   }
   if( userTypes && !userTypes.includes(user.type)) {
       return <Navigate to='/'/>
   }
    return children
}
export default PrivateRouter