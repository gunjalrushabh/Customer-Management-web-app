import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user, setUser] = useState({
        name: "",
        address: "",
        mobile: 0
    })

    const { id } = useParams()

    useEffect(() => {
        viewing();
    }, [])
    const viewing = async () => {
        const result = await axios.get(`http://localhost:8080/api/customer/${id}`);
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border-rounded p-4 mt-4 shadow'>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>User Details</h1>
                        <ul class="list-group">
                        <li class="list-group-item"><b>Customer Id : </b>{user.id}</li>
                        <li class="list-group-item"><b>Name : </b>{user.name}</li>
                        <li class="list-group-item"><b>Address : </b>{user.address}</li>
                        <li class="list-group-item"><b>PF Number :</b>{user.mobile}</li>
                        
                    </ul>

                    <Link type="button" class="btn btn-outline-success mt-3" to={"/"}>Back To Home</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
