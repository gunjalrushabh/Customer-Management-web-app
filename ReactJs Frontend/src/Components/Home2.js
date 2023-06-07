import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home2() {

    const[users,setUsers]=useState([]);

    useEffect(()=>{
        loadingusers()
    },[]);
    
    const loadingusers = async()=> {
        const result = await axios.get("http://localhost:8080/api/customer/getall")
        setUsers(result.data)
    }
    
    return (
        <div className='container'>
            <div className='py-4'>
            <table class="table table-light table-hover shadow">
                <thead>
                    <tr>
                        <th scope="col">customer id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">customer Pf</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((rushabh,index)=>{

                            return(
                                <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{rushabh.name}</td>
                                <td>{rushabh.address}</td>
                                <td>{rushabh.mobile}</td>
                            </tr>
                               
                            );
                        })
                    }
                   
                </tbody>
            </table>
            </div>
        </div>
    )
}
