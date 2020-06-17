import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {SideNav} from "./Componentes/SideNav";
import {Lobby} from "./Paginas/Lobby"
import Login from "./Paginas/Login";
import {Ventas} from "./Paginas/Ventas"
import {Desarrollo} from "./Paginas/Desarrollo";


function App() {
  return (

      <Router >
          <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"}/>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <Switch>
              <Route path="/Venta">
                    <div style={{backgroundColor: "rgb(35, 35, 46)",
                        height: "657px",
                        width: "100%",
                        size: "auto",
                        position: "absolute"}}>
                        <Ventas/>
                    </div>
              </Route>
              <Route path="/Oferta">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "657px",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>
                      <Desarrollo/>
                  </div>
              </Route>
              <Route path="/NewProd">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "657px",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>
                      <Desarrollo/>
                  </div>
              </Route>
              <Route path="/ChangeCod">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "657px",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>
                      <Desarrollo/>
                  </div>
              </Route>
              <Route path="/Config">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "657px",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>
                      <Desarrollo/>
                  </div>
              </Route>
              <Route path="/Lobby">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "657px",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>
                      <Lobby/>
                  </div>

              </Route>
              <Route path="/">
                  <div style={{backgroundColor: "rgb(35, 35, 46)",
                      height: "100%",
                      width: "100%",
                      size: "auto",
                      position: "absolute"}}>

                      <Login/>
                  </div>

              </Route>


          </Switch>
      </Router>
  );
}

export default App;
