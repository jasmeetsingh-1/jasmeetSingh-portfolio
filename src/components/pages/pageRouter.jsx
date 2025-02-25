import React from "react";

import Navbar from "../reusable/navbar/navbar";
import Footer from "../reusable/footer/footer";

//page imports 
import Home from "./home/home"; 


//this file will have the navbar and the footer 
//and interior of the webpage will be based on the route
function PageRouter(){
    return <div>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
}

export default PageRouter;