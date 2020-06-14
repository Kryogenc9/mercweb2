import React from "react";
import Login from "../Paginas/Login";
import a from "../CSS/SideNav.module.css"
function OnClick() {

}
export default function LogOut() {

    return(
        <div>
            <button type={"submit"} value={<Login/>} style={{
                position: "relative",
                top: "100%",
                bottom: "auto",
                left: "50%",
                right: "auto",
                height: "50px",
                width: "250px",
                fontSize:"24px",
                backgroundColor: "rgb(40, 44, 52)"


            }}><label>Cerrar Sesión</label> </button>


        </div>
    );

}