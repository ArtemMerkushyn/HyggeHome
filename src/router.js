import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Main } from './pages/Main/Main';
import { Candles } from './pages/Candles/Candles';
import { GiftSets } from './pages/GiftSets/GiftSets';
import { LightingDecor } from './pages/LightingDecor/LightingDecor';
import { GetWarm } from './pages/GetWarm/GetWarm';
import { TableGames } from './pages/TableGames/TableGames';
import { BooksJournals } from './pages/BooksJournals/BooksJournals';
import { Search } from './pages/Search/Search';
import { Product } from './pages/Product/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'candles',
        element: <Candles />,
      },
      {
        path: 'gift-sets',
        element: <GiftSets />,
      },
      {
        path: 'lighting-decor',
        element: <LightingDecor />,
      },
      {
        path: 'get-warm',
        element: <GetWarm />,
      },
      {
        path: 'gift-sets',
        element: <GiftSets />,
      },
      {
        path: 'table-games',
        element: <TableGames />,
      },
      {
        path: 'books-&-journals',
        element: <BooksJournals />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: '/:category/product/:id',
        element: <Product />,
      },
      {
        path: '*',
        element: <Main/>,
      },
    ],
  },
]);
