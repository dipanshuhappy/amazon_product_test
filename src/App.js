import { useState } from 'react';
import './App.css';
import ColorButton from './Components/ColorButton';
import Heart from './Components/Heart';
import ProductImage from './Components/ProductImage';
import Time from './Components/Time';
import TopBar from './Components/TopBar';
import Watch from './Components/Watch';
function App() {
  const [color,setColor]=useState('black')
  const [type,setType]=useState('time')
  const onClick=(newColor)=>setColor(newColor)
  const onTypeClick=newType=>setType(newType)
  return (
    <div className="App">
     <TopBar>
      <img className='amazonImage' src='/amazon.png' height={50} alt="amazon"/>
     </TopBar>
     <ProductImage color={color}>{
        type==='time'?<Time/>:<Heart/>
     }</ProductImage>
     <div className='main'>
          <h1>FitBit 19 - The Smartest Watch</h1>
          <h3>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</h3>


     </div>
     <div className='colorBtn'>
    <h2>Select color</h2>
     <ColorButton color="red" text="red" onClick={onClick}/>
     <ColorButton color="blue" text="blue" onClick={onClick}/>
     <ColorButton color="black" text="black" onClick={onClick}/>
     <ColorButton color="orange" text="orange" onClick={onClick}/>
     </div>
     <div className='typeBtn'>
       <h2>Select type</h2>
     <ColorButton color="black" fill text="time" onClick={onTypeClick}/>
     <ColorButton color="black" fill text="heart" onClick={onTypeClick}/>
     </div>
    </div>
  );
}

export default App;
