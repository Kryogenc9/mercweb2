import React, {Component} from "react";
import {Bar, Line} from 'react-chartjs-2'

export default class GraficoBarras extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                labels:["","ene","mar","abr","may","jun","jul"],
                datasets:[
                    {
                        label: "Ventas 2020",
                        backgroundColor: "#7B68EE",
                        data:[0,4,5,10,10,15]
                    }
                ]
            }
        }
    }
    render() {
        return(
            <div style={{
                position: "relative",
                top: "-166%",
                left: "-2%",
                bottom: "auto",
                width: "450px",
                height: "250px",
                background: "rgb(40, 44, 52)",
                borderRadius: "10px",
                border: "0px solid rgb(0, 0, 0)"}}>

                <h3>Ventas Año 2020</h3>
                <Bar options={{responsive:true}} data={this.state.data} style={{Color:"#4169E1"}}/>
            </div>

        );
    }
}