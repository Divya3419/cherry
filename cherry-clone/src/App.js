import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurent from './components/Restaurent';

function App() {
  return (
    <div>
      <Navbar/>
      <Offers/>
      <Filters/>
      <Restaurent/>

      
    </div>
  );
}

export default App;
