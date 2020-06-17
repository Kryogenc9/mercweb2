import React from "react";
import TablaVentas from "../CSS/TablaVentas.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default class CuadroVentas extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    productos: [
        {id: 1, objetos: 'AMD ultra 23 nucleos', tipo: 'Procesador', precio: '$' + 2500000},
        {id: 2, objetos: 'RTX 3498', tipo: 'Tarjeta Grafica', precio: "$" + 3000000},
        {id: 3, objetos: 'Iphone 64', tipo: 'Celular', precio: '$' + 100000000}
    ]
    }
}
    renderTableData() {
        return this.state.productos.map((producto, index) => {
            const { id, objetos, tipo, precio } = producto;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{objetos}</td>
                    <td>{tipo}</td>
                    <td>{precio}</td>
                    <td><button style={{
                      backgroundColor:"black"
                    }}><FontAwesomeIcon icon={"window-close"}/></button></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.productos[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Productos a comprar</h1>
                <table id='productos'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
