import React from 'react'
import './Navbar.css';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Features from '../Pages/Features/Features';
import Help from '../Pages/Help/Help';
import SignUP from '../Pages/SignUp/SignUp';
import About from '../Pages/About Us/About';
import Search from '../Pages/Search/Search';

const VegesNavbar=()=>{
    return(
        
        <Router>
        <nav className='navbar'>
            <div className='navbarlogo'>GreenVeges</div>


            <ul className='navbarlink'>
                <li>
                    <NavLink to='/Home'>Home</NavLink>
                </li>

                <li>
                    <NavLink to='/About'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/Products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/Features'>Features</NavLink>
                </li>
                <li>
                    <NavLink to='/Help'>Help</NavLink>
                </li>
            </ul>

            <ul className='Icons'>
                <li>
                    <NavLink to='/Search'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg></NavLink>
                </li>
                <li>
                    <NavLink to='/SignUp'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Features' element={<Features/>}/>
            <Route path='/Help' element={<Help/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/SignUp' element={<SignUP/>}/>
        </Routes>
        </Router>


    )
};
export default VegesNavbar;