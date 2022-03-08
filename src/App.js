import './App.css';
import Heart from './Components/Heart';
import ProductImage from './Components/ProductImage';
import Time from './Components/Time';
import TopBar from './Components/TopBar';
function App() {
  return (
    <div className="App">
     <TopBar>
      <img className='amazonImage' src='/amazon.png' width='128px' height='128px'/>
     </TopBar>
     <ProductImage color="red"><Heart/></ProductImage>
    </div>
  );
}

export default App;
