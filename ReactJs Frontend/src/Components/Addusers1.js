import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Addusers1() {

const[user,setUser] = useState({
    name:"",
    address:"",
    mobile:0
});

const{name,address,mobile}=user; //destructuring user chya ya properties ahet 

const onInputChange =(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}
/**
 * Above Code is a JavaScript function called `onInputChange` that takes an event (`e`) as a parameter. 
 * It uses object spread syntax to create a new object (`{...user}`) and merges the properties of the existing `user` object with the new properties obtained from the event.
   The `e.target` refers to the element that triggered the event, and `e.target.name` and `e.target.value` represent the name and value of the input field, respectively.
   By using `[e.target.name]` as the key within the object literal, it dynamically assigns the value of the input field to the corresponding property in the `user` object.
   Overall, this function is commonly used in React or other JavaScript frameworks to handle input changes and update the state of a component. 
   It allows for a more flexible way of handling multiple input fields without explicitly writing separate handlers for each field.
 */
let navigate = useNavigate(); //for navigating url

const onSubmitingForm= async (e)=>{
    //axios method definitions
    e.preventDefault();
    await axios.post("http://localhost:8080/api/customer/save",user);
    navigate("/");
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border-rounded p-4 mt-4 shadow'>
                <form onSubmit={(e)=>onSubmitingForm(e)}>
                    <h1>Registration Form</h1>
                    {/* 1st div */}
                    <div className='md-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" 
                               className='form-control'
                               placeholder='Enter your name'
                               name='name'
                               value={name}  //while destructuring we have to mention the value
                               onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    {/* 2nd div */}
                    <div className='md-3'>
                        <label htmlFor="address" className='form-label'>address</label>
                        <input type="text" 
                               className='form-control'
                               placeholder='Enter your address'
                               name='address'
                               value={address}
                               onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    {/* 3rd div */}
                    <div className='md-3'>
                        <label htmlFor="mobile" className='form-label'>mobile</label>
                        <input type="text" 
                               className='form-control'
                               placeholder='Enter your mobile'
                               name='mobile'
                               value={mobile}
                               onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary mt-2'>Submit</button>
                    <Link to={"/"} className='btn btn-outline-danger mt-2'>Cancel</Link>
                </form>
            </div>

        </div>
      
    </div>
  )
}
