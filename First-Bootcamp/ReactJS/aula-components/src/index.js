import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';

function soma(a, b){
  alert(a+b);
}

function App(){
  return (
    <div className='App'>
      <Button onClick={() => soma(2, 4)} name="Fernando"/>
    </div>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
