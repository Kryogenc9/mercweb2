import React from "react";
import a from "../CSS/SideNav.module.css"
import ico from "@fortawesome/free-brands-svg-icons"
import core from "@fortawesome/fontawesome-svg-core"
import solid from "@fortawesome/free-solid-svg-icons"
import reactfont from "@fortawesome/react-fontawesome"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"



export function SideNav() {
    return(
        <div>
            <header></header>
                <nav>
                    <ul>
                        <li className={a.Logo}> MercWeb </li>
                        <div className={a.Items}>
                            <li><FontAwesomeIcon icon={"home"}/><a href={"#"}>Home</a></li>
                            <li><FontAwesomeIcon icon={"cash-register"}/><a href={"#"}>Ofertas</a></li>
                            <li><FontAwesomeIcon icon={"dollar-sign"}/><a href={"#"}>Ventas</a></li>
                            <li><FontAwesomeIcon icon={"star"}/><a href={"#"}>Ingresar Productos</a></li>
                            <li><FontAwesomeIcon icon={"barcode"}/><a href={"#"}>Cambio de Codigo</a></li>
                            <li><FontAwesomeIcon icon={"cog"}/><a href={"#"}>Configuración</a></li>
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