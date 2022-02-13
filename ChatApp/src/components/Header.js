import "./Header.css";
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from "../Stateprovider";
import { actionTypes } from "../reducer";



const Header = () => {

  const [{isopen}, dispatch] = useStateValue();
  
  const toggleMenu = ()=>{
    dispatch({
      type: actionTypes.TOGGLE_MENU,
      isopen: !isopen, 
    });  
  }

  return (
    <div className="header">
        <div className="header__left">
          <IconButton onClick={toggleMenu}><MenuIcon/></IconButton>
          <img alt="logo" src="https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg"></img>
        </div>
        <div className="header__menu">
          <h3>Home</h3>
          <h3>Quick Menu <span><ExpandMoreIcon/></span></h3>
        </div>
        <div className="header__right">
          <form className="text__imput">
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </form>
          <Avatar alt="Remy Sharp"/>
        </div>
    </div>
  );
};

export default Header;
