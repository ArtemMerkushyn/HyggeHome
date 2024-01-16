import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
