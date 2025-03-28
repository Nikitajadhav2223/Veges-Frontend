
import 'bootstrap/dist/css/bootstrap.min.css';
import VegesNavbar from './Component/Navbar/VegesNavbar';
import { Route,BrowserRouter as Router,Routes} from "react-router-dom";
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
// import Prod from './Component/VegesFrontend/Phase3/Prod';
 


function App() {
  return (
    <div className="App">


    <VegesNavbar/>

 
    <Router>
      <Routes>
       
       
      
      <Route path="/ProductsTitle/:Title" element={<ProductTitle/>}/>
      <Route path="/ProductsType/:type" element={<ProductType/>}/>
      <Route path="/AllProducts" element={<ProductAxios/>}/>
      <Route path="/Type/:type" element={<ProductsByType/>}/>
      <Route path="/ProdType" element={<ProdType/>}/>
      <Route path="/Product/:Title" element={<ProductDetails/>}/> 
      <Route path="/Prod/:Title" element={<ProdDetails/>}/> 
      {/* <Route path="/Prod" element={<Prod/>}/> */}
      <Route path="/Producttype" element={<Productstypee/>}/>
      <Route path="ProdTitle/:Title" element={<ProdTitle/>}/>
      <Route path="Typess" element={<ProdTypesss/>}/>
      </Routes>
    </Router>

  
     
    </div>
  );
}

export default App;
