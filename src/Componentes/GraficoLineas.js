import React, {Component} from "react";
import {Line} from 'react-chartjs-2'

export default class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                labels:["ene","mar","abr","may","jun","jul"],
                datasets:[
                    {
                        label: "Ventas 2019",
                        borderColor: "#7B68EE",
                        data:[4,5,10,10,15,12]
                    },
                    {
                        label:"Ventas 2018",
                        borderColor:"#00ffff",
                        data:[6,3,8,6,25,16]
                    }
                ]
            }
        }
    }
    getChartData = canvas =>{
        const data =this.state.data;
        return data;
    }


    render() {
        return (
            <div style={{position:"relative",

                top: 73,
                left: 54,
                bottom: 18,
                width: 450,
                height: "auto",
                background: "#282c34",
                borderBlockColor: "black",
                borderRadius: "10px 10px 10px 10px",
                mozBorderRadius: "10px 10px 10px 10px",
                webkitBorderRadius: "10px 10px 10px 10px",
                border: "0px solid #000000"}}>
               <Line options={{responsive:true}} data={this.state.data} style={{Color:"#4169E1"}}/>
               <h3>Ventas</h3>
            </div>
        );
    }




}