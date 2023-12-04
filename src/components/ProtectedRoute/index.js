// Write your JS code here
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'
import Home from '../Home'

const ProtectedRoute = () => {
  const jwtToken = Cookies.get('jwt_Token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route exact path="/" component={Home} />
}

export default ProtectedRoute
