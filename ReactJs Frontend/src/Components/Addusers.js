import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Addusers() {

    let navigate = useNavigate();//for navigation url 

    const[user,setUser]=useState({
        name:"",
        address:"",
        mobile:""
    });  //usestate initial state
    const{name,address,mobile}=user//destructuring og object add value to inout fields
    //destructuring user chya ya properties ahet 

    const onChangeInput=(event)=>{
        setUser({...user,[event.target.name]:event.target.value}) //changing state using ...user spread operator
    }

    //axiost Post //posting the data
    const onSubmit = async (e)=>{
        e.preventDefault();//preventing the data which were shown in url like this http://localhost:3000/add?name=rushi&address=baner&mobile=78788
       await axios.post("http://localhost:8080/api/customer/save",user);//possting user object to post url
        navigate("/"); //navigetting to home "/" url
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border-rounded p-4 mt-4 shadow'>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <h1 align="center">Registering User</h1>
                        <div className='md-3'>
                            <label  htmlFor="name" className='form-label'>Name</label>
                            <input type="text"
                                 placeholder='आपले नांव लिहा'
                                className='form-control'
                                name='name'
                                value={name}
                               onChange={(event)=>onChangeInput(event)}
                            />
                            </div>
                            
                            <div className='md-3'>
                            <label htmlFor="address" className='form-label'><h4> Address</h4></label>
                            <input type="text"
                                placeholder='तुमचा पत्ता प्रविष्ट करा'
                                className='form-control'
                                name='address'
                                value={address}
                                onChange={(event)=>onChangeInput(event)}
                            />
                            </div>

                            <div className='md-3'>
                            <label htmlFor="mobile" className='form-label'><h4> Pf number</h4></label>
                            <input type="text"
                                placeholder='तुमचा पीएफ नंबर टाका'
                                className='form-control'
                                name='mobile'
                                value={mobile}
                                onChange={(event)=>onChangeInput(event)}
                            />
                        </div>
                        <div align = "center">

                        <button type='submit' className='btn btn-outline-primary' >प्रस्तुत करणे</button>
                        <Link to={"/"} className='btn btn-outline-danger'>रद्द करा</Link>
                        </div>
                       
                    </form>
                   

                </div>
            </div>
        </div>
    )
}
