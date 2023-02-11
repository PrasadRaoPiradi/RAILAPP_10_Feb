import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Basket from './Basket';
import data from './data';
import Product from './Product';
import Header from './Header';
import { useEffect } from 'react';
import { useTransition } from 'react';

//import Menu from "./Menu";
//import Categories from "./Categories";
//import items from "./data";

//const allCategories = ["", ...new Set(items.map((item) => item.category))];


function Customer() {
    const navigate = useNavigate();
     const {products} =data;

    //const [menuItems, setMenuItems] = useState(items);
    //const [activeCategory, setActiveCategory] = useState("");
    //const [categories, setCategories] = useState(allCategories);
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
    console.log("On Add...");
    const exist = cartItems.find((x)=>x.id === product.id);
    if (exist){
        const newCartItems = cartItems.map((x)=>
        x.id === product.id ? {...exist, quantity:exist.quantity+1}:x);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else{
        const newCartItems = [...cartItems, {...product,quantity:1}];
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);

    if (exist.quantity === 1)
    {
        const newCartItems = cartItems.filter((x)=> x.id !== product.id);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
        const newCartItems = cartItems.map((x)=>
        x.id === product.id ? {...exist, quantity:exist.quantity -1 }:x);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

  }
  /*
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
    const filterItems = (category) => {
      setActiveCategory(category);

      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };*/

    const [isPending, startTransition] = useTransition();
    
    useEffect(()=>{
        setCartItems(
            localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
        );
    })

  return isPending ? (<div>Loading...</div>): (
   
      <div className="row">
 <div className="title">
            <a href='#/'>
        <input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio1" value="option1"  />
        <label class="form-check-label" for="inlineRadio1"><h4>Bengaluru City</h4></label>
        </a>
        <a href='#/'>
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2"><h4>Tumkur</h4></label>
        </a>

        <a href='#/'>
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3" />
        <label class="form-check-label" for="inlineRadio2"><h4>Mandya</h4></label>
        </a>

        <a href='#/'>
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" />
        <label class="form-check-label" for="inlineRadio2"><h4>Mysore</h4></label>
        </a>
          <h4> </h4>
          <h4>Restuarants Serving Now</h4>
          <div className="underline"></div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart"/>
            <p>{cartItems.length}</p>
          </div>
        </div>
             
      <div className='block column-2'>
        
        <h2> Products</h2>

        <div className='row'>
            {data.map((product)=>(
                <Product 
                key={product.id} 
                product={product} 
                item={cartItems.find((x)=> x.id === product.id)}
                onAdd={onAdd} 
                onRemove={onRemove}> </Product>
            ))}


        </div>
      </div>

      <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
  
      </div>


  );
}

export default Customer;