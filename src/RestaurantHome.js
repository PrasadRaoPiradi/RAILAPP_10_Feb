import React from 'react';
import './App.css';
import './ToggleSwitch.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from "./RestaurantOrderData"
import 'bootstrap/dist/css/bootstrap.min.css';
import { OrderStatus } from './OrderStatus';



function RestaurantHome() {

  return (

    <>
      <h3>Manage your Rail Restaurant Online</h3>
      <nav >
        <div className="form-check form-check-inline">
          <label>Go Live </label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label>Update Menu</label>
        </div>
        <div className="form-check form-check-inline">
          <label>Time: BreakFast- 7am - 11 am</label>
        </div>
      </nav>
      <div className='orderFoodArea'>

        <div className="form-check form-check-inline">
           <div className="form-check form-check-inline">
            <OrderStatus/>
          </div>
          <div className="form-check form-check-inline">
          
          </div>


          <div className="form-check form-check-inline">
            <p>Active Orders</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default RestaurantHome;