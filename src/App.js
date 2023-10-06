import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Products from './components/Products/Products'
import Wishlist from './components/Wishlist/Wishlist'
import Orders from './components/Orders/Orders'
import Categories  from './components/Categories/Categories'
import Notfound from './components/Notfound/Notfound'
import Layout from './components/Layout/Layout.jsx'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Allorders from './components/Allorders/Allorders'
import Register from './components/Register/Register'
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRou/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { CartContextProvider } from './Context/CartContext';
import SpecificBrand from './components/specificBrand/SpecificBrand';
import SpecificCategory from './components/specificCategory/SpecificCategory';

let routers = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:`/` ,element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:'Cart' ,element:<ProtectedRoute><Cart/></ProtectedRoute> },
    {path:'Products' ,element:<ProtectedRoute><Products/> </ProtectedRoute> },
    {path:'Brands' ,element:<ProtectedRoute><Brands/></ProtectedRoute> },
    {path:'Wishlist' ,element:<ProtectedRoute> <Wishlist/></ProtectedRoute>},
    {path:'Categories' ,element:<ProtectedRoute><Categories/></ProtectedRoute> },
    {path:'Login' ,element: <Login/>},
    {path:'Register' ,element: <Register/>},
    {path:'Allorders' ,element: <Allorders/>},
    {path:'Orders' ,element:<ProtectedRoute> <Orders/></ProtectedRoute>},
    {path:'ProductDetails/:id' ,element:<ProtectedRoute> <ProductDetails/></ProtectedRoute>},
    {path:'SpecificBrand/:id' ,element:<ProtectedRoute> <SpecificBrand/></ProtectedRoute>},
    {path:'SpecificCategory/:id' ,element:<ProtectedRoute> <SpecificCategory/></ProtectedRoute>},
    {path:'Checkout/:id' ,element:<ProtectedRoute> <Checkout/></ProtectedRoute>},
    {path:'CategorySlider/:id' ,element:<ProtectedRoute> <ProductDetails/></ProtectedRoute>},
    {path:'*' ,element: <Notfound/>}
  ]}
])

function App() {

  
  return <UserContextProvider>
  <CartContextProvider>
  <CounterContextProvider>
  <RouterProvider router={routers} />
  </CounterContextProvider>
  </CartContextProvider>
  </UserContextProvider>
}

export default App;
