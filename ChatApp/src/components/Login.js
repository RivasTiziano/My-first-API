import "./Login.css"
import Button from '@mui/material/Button';
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../Stateprovider";

const Login = () => {
  const [{user}, dispatch] = useStateValue();
  const signin = ()=>{
    auth.signInWithPopup(provider).then(result=>dispatch({
      type: actionTypes.SET_USER,
      user: result.user,
    })).catch((err)=> alert(err.message));
  }
  return (
    <div className="login">
        <h1>Welcome. Log in now!</h1>
        <Button onClick={signin} className="login__button">Sign in with Google</Button>
    </div>
    );
};

export default Login;
