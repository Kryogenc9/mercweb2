import React from "react";
import Transaccion from "../Paginas/Transaccion";
import a from "../CSS/SideNav.module.css"
function OnClick() {

}
export default function ComprarBtn() {

    return(
        <div>
            <button type={"submit"} value={<Transaccion/>} style={{
                position: "relative",
                top: "100%",
                bottom: "auto",
                left: "50%",
                right: "auto",
                height: "50px",
                width: "250px",
                fontSize:"24px",
                backgroundColor: "rgb(40, 44, 52)"


            }}><label>Realizar compra</label> </button>


        </div>
    );

}