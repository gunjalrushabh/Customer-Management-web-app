import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  //loading the data from database get method 
  const [users, setUser] = useState([]);

  //delete change // ithink its not needed
   const {id} = useParams();


  useEffect(() => {
    loadusers();
  },[])


  //loading users
  const loadusers =  async() => {
    const result = await axios.get("http://localhost:8080/api/customer/getall")
    setUser(result.data);
    console.log(result.data);
  }
  //empty array bacuse it will load once when page is loaded


  // delete function
  const deleting = async(id) =>{
    await axios.delete(`http://localhost:8080/api/customer/delete/${id}`);
    loadusers();
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <div>
          <table className="table table-striped table-hover border shadow">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">PF number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((rushabh, index) => {
                  return(
                    <tr>
                      {/* <th scope="row" key={rushabh.id}>{rushabh.id}</th> */}
                      {/* this is for ascending order of customers */}
                    <th scope="row" key={index}>{index + 1}</th>  
                    <td>{rushabh.name}</td>
                    <td>{rushabh.address}</td>
                    <td>{rushabh.mobile}</td>
                    <td>
                      <Link className ='btn btn-primary mx-2'
                      to={`/view/${rushabh.id}`}
                      >view</Link>

                      <Link  className ='btn btn-warning mx-2'
                       to={`/edituser/${rushabh.id}`} 
                       >Edit</Link>

                      <button  className ='btn btn-danger mx-2'
                      onClick={()=>{deleting(rushabh.id)}}
                      >Delete</button>
                    </td>
                  </tr>
                  )  
                    })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
