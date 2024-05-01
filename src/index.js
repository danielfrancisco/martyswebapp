import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./home"
import About from './about';
import Menu from './menu';
import Try from './Try';
import Cart from "./cart"
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/menu" element={<Menu/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/tryOne" element={<Try/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
 </HashRouter>
 </Provider> 
 ,

    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

