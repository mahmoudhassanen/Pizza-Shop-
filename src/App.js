
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/navbar/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Recipes from './Components/Recipes/Recipes';
import { DataContextProvider } from './SLider';
import Recipes$download from './Pages/Recipes$Download/Recipes$download';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      
      <DataContextProvider> 
       
      <Navbar/> 
       <Home/> 
      <About/> 
        <Menu/> 
   <Recipes$download/>
   <Contact/>
      </DataContextProvider>
    </div>
  );
}

export default App;
