import React from "react";
import a from "../CSS/SideNav.module.css"
import ico from "@fortawesome/free-brands-svg-icons"
import core from "@fortawesome/fontawesome-svg-core"
import solid from "@fortawesome/free-solid-svg-icons"
import reactfont from "@fortawesome/react-fontawesome"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom";



export function SideNav() {
    return(
        <div>
            <header></header>
                <nav>
                    <ul>
                        <li className={a.Logo}> MercWeb </li>
                        <div className={a.Items}>
                            <li><FontAwesomeIcon icon={"home"}/><a><Link to={"/Lobby"}>Home</Link></a></li>
                            <li><FontAwesomeIcon icon={"cash-register"}/><a><Link to={"/Oferta"}>Oferta</Link></a></li>
                            <li><FontAwesomeIcon icon={"dollar-sign"}/><a><Link to={"/Venta"}>Ventas</Link></a></li>
                            <li><FontAwesomeIcon icon={"star"}/><a><Link to={"/NewProd"}>Ingresar Producto</Link></a></li>
                            <li><FontAwesomeIcon icon={"barcode"}/><a><Link to={"/ChangeCod"}>Cambio de Codigo</Link></a></li>
                            <li><FontAwesomeIcon icon={"cog"}/><a><Link to={"/Config"}>Configuración</Link></a></li>
                        </div>
                        <li className={a.searchIcon}>
                            <input type="search" placeholder={"Search"}/>
                            <label className={a.icon}>
                                <FontAwesomeIcon icon={"search"} />
                            </label>

                        </li>
                    </ul>
                </nav>
        </div>
    );


}