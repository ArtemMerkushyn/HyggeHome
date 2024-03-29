import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
