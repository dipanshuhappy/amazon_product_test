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
  const onTypeClick=newType=>{
    console.log(newType
      )
    setType(newType)
  }
  const getNeededType=()=>{
    if (type==='time'){
      return <Time/>
    }
    else{
      return <Heart/>
    }

  }
  return (
    <div className="App">
     <TopBar>
      <img className='amazonImage' src='/amazon.png' width='128px' height='128px'/>
     </TopBar>
     <ProductImage color={color}>{
        type==='time'?<Time/>:<Heart/>
     }</ProductImage>
     <ColorButton color="red" text="red" onClick={onClick}/>
     <ColorButton color="blue" text="blue" onClick={onClick}/>
     <ColorButton color="black" text="black" onClick={onClick}/>
     <ColorButton color="orange" text="orange" onClick={onClick}/>
     <ColorButton color="black" fill text="time" onClick={onTypeClick}/>
     <ColorButton color="black" fill text="heart" onClick={onTypeClick}/>
    </div>
  );
}

export default App;
