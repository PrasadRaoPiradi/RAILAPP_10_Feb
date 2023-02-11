import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [status, setStatus] = React.useState(true)
    const radioHandler = (status) => {
        setStatus(status);
      };
  return (

    <form>
    <h1>Sign Up</h1>
    <div className="mb-3">
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" defaultChecked={status} name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={(e) => radioHandler(true)}  />
Customer
</div>
 
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" defaultChecked={!status}  name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={(e) => radioHandler(false)}  />
Restaurant
</div >
</div>
{ status === false &&
<>
     <div className="mb-3">
     <label>Restaurant Name</label>
     <input
       type="text"
       className="form-control"
       placeholder="First name"
     />
   </div>
   <div className="mb-3">
     <label>Address</label>
     <input type="text" className="form-control" placeholder="Last name" />
   </div>
   <div className="mb-3">
     <label>GST Number</label>
     <input type="text" className="form-control" placeholder="GST Number" />
   </div>
   </>

}
{status === true &&

    <div className="mb-3">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
      />
    </div>
}
    <div className="mb-3">
      <label>Phone Number</label>
      <input type="text" className="form-control" placeholder="Phone Number" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div><div className="mb-3">
      <label>Confirm Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={() => {
        alert("Singup Successful.")
  navigate("/login")
}}>
        Sign Up
      </button>
    </div>
    <br></br>
    <div class="bg-light clearfix">
    <span>Already have an account?  </span>    
      <button type="button" class="btn btn-success float-right" onClick={() => {
          navigate("/login")
}}>SignUp</button>
</div>
  </form>
  );
}

export default Signup;