import React from "react";
import {SideNav} from "../Componentes/SideNav"
import CuadroVentas from "../Componentes/CuadroVentas"
import ComprarBtn from "../Componentes/ComprarBtn"

export function Ventas(){
    return(
     <div>
         <div>
             <SideNav/>
         </div>
         <div style={{/*backgroundColor:"#f2f2f2",*/
             position: "relative",
             top: "100px",
             left: "30%",
             bottom: "203px",
             width: "41%",
             height: "auto"}}>
             <CuadroVentas/>
         </div>
         <div style={{/*backgroundColor:"#f2f2f2",*/
             position: "relative",
             top: "150px",
             left: "-100px",
             bottom: "50px",
             width: "auto",
             height: "auto"}}>
             <ComprarBtn/>
         </div>
     </div>
    );


}