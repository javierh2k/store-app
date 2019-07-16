import React from "react";
import logo from "./logo.svg";
import "./App.less";

import { ModalAnimate } from "./components/Modal";
import { withTheme } from "styled-components";
import { Table } from 'store-ui';


const headers = { name :'Nombre', lastname: 'Apellido', email: 'Correo'};
const rows = [
  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },  {
    name: 'Alex', lastname: 'Left', email: 'asd@asd.com'
  },
]



function App({theme}) {
  console.log(theme);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
        <br />
        <ModalAnimate> Example content </ModalAnimate>
      
      </header>
     
      <Table 
          headers = {headers}
          rows={rows}
          title="Table de prueba storybook"
          />
       
    </div>
  );
}

export default withTheme(App);
