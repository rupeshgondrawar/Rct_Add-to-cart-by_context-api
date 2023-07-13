import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
  <Item name="macbook pro" price="100000"/>
  <Item name="Pendrive" price="200000"/>
  <Item name="mobile" price="300000"/>
  <Cart/>
    </div>
  );
}

export default App;
