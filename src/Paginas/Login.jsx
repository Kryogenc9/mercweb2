import React from "react";

import LoginForm from "../Componentes/LoginForm";

export default function Login() {
    return(
        <div style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            backgroundColor: "rgb(35, 35, 46)"
        }}>

            <h1 style={{
                position:"relative",
                top:"15%",
                bottom:"10%",
                left:"47%",
                right:"45%",
                width:"16%",
                height:"45px",
                textAlign:"center",
                borderRadius: "30px 30px 30px 30px",
                mozborderRadius: "30px 30px 30px 30px",
                webkitBorderRadius: "30px 30px 30px 30px",
                border: "3px solid #000000",
                backgroundColor:"#282c34"
            }}
            >Ingresar</h1>
            <div style={{
                position:"relative",
                top:"20%",
                bottom:"50%",
                left:"45%",
                right:"50%",
                width:"20%",
                height:"150px",
                borderRadius: "30px 30px 30px 30px",
                mozborderRadius: "30px 30px 30px 30px",
                webkitBorderRadius: "30px 30px 30px 30px",
                border: "3px solid #000000",
                backgroundColor:"#282c34"

            }}>
                <LoginForm/>
            </div>
            <footer/>
        </div>
    );

}