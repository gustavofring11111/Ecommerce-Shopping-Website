import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ShopLogo from '../images/logo.svg';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [display, setDisplay] = useState(false);

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={ShopLogo} alt=""/>
      </div>

      <div className='rightSide' >
      <div className="rightSide-hidden-links" id={display ? 'open' : 'close'}>
      

        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

        <CloseIcon id='close-icon' onClick={() => setDisplay(false)}/>
        

        </div>

      <div className="rightSide-links">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/perchases'>
        <ShoppingBagIcon/>
        </Link>
        </div>

      <div className="menu-icon-div">
        <MenuIcon onClick={() => setDisplay(true)}/>
      </div>
      </div>
    </div>
      
    


  )
}

export default Header
