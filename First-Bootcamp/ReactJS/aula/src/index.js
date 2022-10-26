import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function sum(a, b){
  return a + b;
} 

function jsx(){
  return (
    <div className='teste'>
      Fernando - Prática de ReactJs
      <h2>Soma: {sum(1, 2)}</h2>
    </div>
  )
}
const App = () => {
  return (
    <div className='App'>
      {jsx()}
    </div>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

