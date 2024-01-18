import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='max-w-7xl mx-auto pt-7'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
