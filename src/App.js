import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
   
    <div className="App">
      <div className='container mx-auto'>
        <Header/>
        <Outlet />        
      </div>
      <Footer />
    </div>
      
      
  );
}

export default App;
