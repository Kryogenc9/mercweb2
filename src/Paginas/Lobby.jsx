import React from "react";
import {SideNav} from "../Componentes/SideNav"
import Chart from "../Componentes/GraficoLineas";
import GraficoBarras from "../Componentes/GraficoBarras";
import {render} from "react-dom";
import LogOut from "../Componentes/LogOut"
export function Lobby() {
    return(
        <div style={{
            height:"100%"}}>
            <div>
                <SideNav/>
            </div>
            <div style={{/*backgroundColor:"#f2f2f2",*/
                position: "relative",
                top: 1,
                bottom: 1,
                width: 620,
                height: 570,

            }}>
                <Chart/>
            </div>
            <div style={{/*backgroundColor:"#f2f2f2",*/
                position: "relative",
                top: "-54%",
                left: "54%",
                bottom: "203px",
                width: "41%",
                height: "85px"

            }}>
                <GraficoBarras/>
            </div>
            <div style={
                {position: "relative",
                top: "-38%",
                bottom: "auto",
                height:" auto",
                width:" 0px",
                left: "37%",
                right: "auto"
            }}>
                <LogOut/>
            </div>
        </div>

    );
}