import { useState } from 'react';
import './App.css';
import ColorButton from './Components/ColorButton';
import Heart from './Components/Heart';
import ProductImage from './Components/ProductImage';
import Time from './Components/Time';
import TopBar from './Components/TopBar';
function App() {
  const [color,setColor]=useState('black')
  const onClick=(newColor)=>setColor(newColor)
  return (
    <div className="App">
     <TopBar>
      <img className='amazonImage' src='/amazon.png' width='128px' height='128px'/>
     </TopBar>
     <ProductImage color={color}><Heart/></ProductImage>
     <ColorButton color="red" text="red" onClick={onClick}/>
     <ColorButton color="blue" text="blue" onClick={onClick}/>
     <ColorButton color="black" text="black" onClick={onClick}/>
     <ColorButton color="orange" text="orange" onClick={onClick}/>
    </div>
  );
}

export default App;
