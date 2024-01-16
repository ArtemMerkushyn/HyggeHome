import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './pages/Main/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
        ],
    }
]);