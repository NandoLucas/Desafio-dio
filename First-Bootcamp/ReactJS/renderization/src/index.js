import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = "DIO";
const element1 = <h1>Teste de elementos</h1>

function App(){
  return (
    <div>
      {element}
      {element1}
    </div>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);