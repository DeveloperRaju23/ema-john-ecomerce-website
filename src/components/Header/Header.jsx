import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user , logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(result => {
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
     <div className='nav-container'>
        <div className='container'>
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign">Sign Up</Link>
                {
                    user && <Link to="/sign"><span onClick={handleLogOut}>LogOut</span></Link>
                }
            </div>
        </nav>
       </div>  
     </div>
    )
};

export default Header;