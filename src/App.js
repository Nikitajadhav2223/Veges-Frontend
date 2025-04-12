
import 'bootstrap/dist/css/bootstrap.min.css';
// import VegesNavbar from './Component/Navbar/VegesNavbar';
import { Route,BrowserRouter as  Router,NavLink,Routes} from "react-router-dom";
import React from "react";


import ProductAxios from './Component/VegesFrontend/Phase1/ProductAxios';
import ProductTitle from './Component/VegesFrontend/Phase1/ProductTitle';
import ProductType from './Component/VegesFrontend/Phase1/ProductType';

import ProductsByType from './Component/VegesFrontend/Phase2/Producttype';

import ProdType from './Component/VegesFrontend/Phase3/ProdType';
import ProductDetails from './Component/VegesFrontend/Phase3/ProductDetails';

import Productstypee from './Component/VegesFrontend/Phase4/Productstypee';
import ProdDetails from './Component/VegesFrontend/Phase4/ProdDetails';

import ProdTitle from './Component/VegesFrontend/Phase4(updated)/ProdTitle';
import ProdTypesss from './Component/VegesFrontend/Phase4(updated)/ProdType';

import Roots from './Component/VegesFrontend/Types/Roots';
import Stems from './Component/VegesFrontend/Types/Stems';
import Bulbs from './Component/VegesFrontend/Types/Bulbs';
import SeedsPods from './Component/VegesFrontend/Types/SeedsPods';
import DryFruits from './Component/VegesFrontend/Types/DryFruits';
import Leaves from './Component/VegesFrontend/Types/Leaves';

import Home from './Component/Pages/Home/Home';
import About from './Component/Pages/About Us/About';
import Products from './Component/Pages/Products/Products';
import Features from './Component/Pages/Features/Features';
import Help from './Component/Pages/Help/Help';
import Search from './Component/Pages/Search/Search';
import SignUp from './Component/Pages/SignUp/SignUp';
// import './Navbar.css';
// import Prod from './Component/VegesFrontend/Phase3/Prod';
import './App.css';
import Results from './Component/VegesFrontend/Phase5/Results';
import { AuthProvider } from './Component/Pages/Context/AuthContext';
import Login from './Component/Pages/SignUp/Login';
 


function App() {
  return (
   <Router>
<AuthProvider>
      <div className="App">
        {/* Navbar */}




        <nav className='navbar'>
            <NavLink to='/Home' className='navbarlogo'>
            <div>GreenVeges</div>
            </NavLink>


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
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>

       
      
      <Route path="/ProductsTitle/:Title" element={<ProductTitle/>}/>
      <Route path="/ProductsType/:type" element={<ProductType/>}/>
      <Route path="/AllProducts" element={<ProductAxios/>}/>
      <Route path="/Type/:type" element={<ProductsByType/>}/>
      <Route path="/ProdType" element={<ProdType/>}/>
      <Route path="/Product/:Title" element={<ProductDetails/>}/> 
      <Route path="/Prod/:Title" element={<ProdDetails/>}/> 
      {/* <Route path="/Prod" element={<Prod/>}/> */}
      <Route path="/Producttype" element={<Productstypee/>}/>
      <Route path="/ProdTitle/:Title" element={<ProdTitle/>}/>
      <Route path="/Typesss" element={<ProdTypesss/>}/>



      <Route path="/Roots" element={<Roots/>}/>
      <Route path="/Stems" element={<Stems/>}/>
      <Route path="/Bulbs" element={<Bulbs/>}/>
      <Route path="/SeedsPods" element={<SeedsPods/>}/>
      <Route path="/DryFruits" element={<DryFruits/>}/>
      <Route path="/Leaves" element={<Leaves/>}/>


      <Route path="/products/type/:type" element={<Results/>} />
     
      </Routes>
    
   

  </div>
  </AuthProvider>
 
     </Router>
  
  );
}

export default App;
