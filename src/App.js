import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { useGetUserOnloadQuery } from './redux/services';
import { setLoggedIn, setLoggedOut } from './redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './redux/selectors';

function App() {

  const { data } = useGetUserOnloadQuery()
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (data) {
      if (data.enrichedUser) {
        dispatch(setLoggedIn({
        token: data.cookie.token,
        userData: {
          name: data.enrichedUser.fullName,
          email: data.enrichedUser.email,
          isAdmin: data.enrichedUser.isAdmin
        }
      }))
      } else {
        dispatch(setLoggedOut())
        }
      
    }
  }, [data, dispatch])


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
