import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (

    <div className='orderFoodArea'>
        <h2>Order food from the comfort of your train seat online</h2>
        <p>Delicious food is a click away</p>
        
        <div className='tab'>
          <button className='tablinks' onClick={(e) => {
            
             var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName('tabcontent');
             for (i = 0; i < tabcontent.length; i++) {
               tabcontent[i].style.display = 'none';
             }
             tablinks = document.getElementsByClassName('tablinks');
             for (i = 0; i < tablinks.length; i++) {
               tablinks[i].className = tablinks[i].className.replace(' active', '');
             }
             document.getElementById('PNR').style.display = 'block';
             e.currentTarget.className += ' active';
           
           }}>Order Via PNR</button>
          <button className='tablinks' onClick={(e) => {
            
            var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName('tabcontent');
             for (i = 0; i < tabcontent.length; i++) {
               tabcontent[i].style.display = 'none';
             }
             tablinks = document.getElementsByClassName('tablinks');
             for (i = 0; i < tablinks.length; i++) {
               tablinks[i].className = tablinks[i].className.replace(' active', '');
             }
             document.getElementById('Train').style.display = 'block';
             e.currentTarget.className += ' active';
            }}>Order Via Train No.</button>
        </div>
        
        <div id='PNR' className='tabcontent'>
          <h3>Enter PNR number</h3>
          <input className='pnrInput' placeholder='PNR No.' type='text' height='100px' width='400px'/>
          {/* <button className='OrderNowBtn' >Order Now!</button> */}
          <button  type="submit" onClick={() => {
  navigate("/login")
}} className="btn btn-primary">
        Order Now!
      </button>
        </div>
        
        <div id='Train' className='tabcontent'>
          <h3>Enter Train number</h3>
          <input className='pnrInput' placeholder='Train No.' type='text' height='100px' width='400px'/>
          <button  className="btn btn-primary"  onClick={() => {
  navigate("/login")
}}> Order Now!</button>
        </div>       
        </div>
  );
}

export default Home;