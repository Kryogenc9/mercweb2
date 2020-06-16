import React from "react";
import TextField from "./TextField";
import {Link} from "react-router-dom";
import a from "../CSS/LoginCss.css"

export default function Login() {
    return(
        <form style={ {   left: "12%",
            position: "relative",
            top: "5%"}} >
            <TextField ClassName={a.TextField} label={"Correo"} type={"email"} required/>
            <TextField ClassName={a.TextField2} label={"Contraseña"} type={"password"}/>
            <button style={{backgroundColor: "rgb(40, 44, 52)"}}><Link to={"/Lobby"}>Ingresar</Link></button>
        </form>
    );

}