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
import { CartPage } from './pages/CurtPage/CartPage';
import { Wish } from './pages/Wish/Wish';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import MyAccount from './pages/MyAccount/MyAccount';
import MyOrders from './pages/MyAccount/components/MyOrders/MyOrders';
import MyWishlist from './pages/MyAccount/components/MyWishlist/MyWishlist';
import MyFeedback from './pages/MyAccount/components/MyFeedback/MyFeedback';
import MyDeliveryInfo from './pages/MyAccount/components/MyDeliveryInfo/MyDeliveryInfo';
import MyCart from './pages/MyAccount/components/MyCart/MyCart';
import { MyReviews } from './pages/MyAccount/components/MyReviews/MyReviews';
import AddProduct from './pages/Admin/AddProduct/AddProduct';
import Orders from './pages/Admin/Orders/Orders';
import ReviewsNQuestions from './pages/Admin/ReviewsNQuestions/ReviewsNQuestions';
import ChangeProduct from './pages/Admin/ChangeProduct/ChangeProduct';

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
        path: '/:category/product/:product_article',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'wish',
        element: <Wish />,
      },
      {
        path: 'delivery-page',
        element: <DeliveryPage />,
      },
      {
        path: '*',
        element: <Main />,
      },
      {
        path: 'my-account',
        element: <MyAccount/>
      },
      {
        path: 'my-account/my-orders',
        element: <MyOrders/>
      },
      {
        path: 'my-account/my-wishlist',
        element: <MyWishlist/>
      },
      {
        path: 'my-account/my-feedback',
        element: <MyFeedback/>
      },
      {
        path: 'my-account/my-delivery-information',
        element: <MyDeliveryInfo/>
      },
      {
        path: '/my-account/my-cart',
        element: <MyCart/>
      },
      {
        path: 'my-account/reviews',
        element: <MyReviews/>
      },
      {
        path: 'add-product',
        element: <AddProduct/>
      },
    {
      path: 'all-orders',
      element: <Orders/>,
    },
    {
      path: 'all-reviews',
      element: <ReviewsNQuestions/>,
    },
    {
      route: 'delete-card',
      title: 'Deleting/deactivating a card',
    },
    {
      route: 'stats',
      title: 'Statistics of sales, orders',
      },
    {
      path: 'change-product/:article',
      element: <ChangeProduct/>,
    },
    
    ],
  },
]);
