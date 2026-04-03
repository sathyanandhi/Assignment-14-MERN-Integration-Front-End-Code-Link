import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Userdata = () => {
  const navigate=useNavigate()
  const [data,setData]=useState([])
  useEffect(()=>{
getuserdetails();
  },[])
  const getuserdetails=async()=>{
try{
  const token=localStorage.getItem("token");
  console.log(token);
  
  const res=await axios.get("http://localhost:3002/crm-backend/getuser",{
    headers:{Authorization:`Bearer ${token}` }
  })
  console.log(res.data.result);
  
  setData(res.data.result)
}
catch(err)
{
  console.log("Error in data",err);
  
}}
//Edit Data
  // const handleEdit= (id) => {
  //   const edit=`/register/${id}`;
  //   navigate(edit);
  // };


  const handleEdit = (id) => {
  navigate(`/register/${id}`);
};


  //Delete Data
   const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this user?")) {
    try {
      const token = localStorage.getItem("token");
      
      await axios.delete(`http://localhost:3002/crm-backend/deleteuser/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert("Deleted successfully");
      getuserdetails(); // Refresh the table list
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Could not delete user.");
    }
  }
};
  return (
    <>
    
      <div className=''>
      <button className='bg-green-300 m-3 p-2 rounded hover:bg-amber-400'><Link to='/' style={{textDecoration:"none"}} className=' text-black text-2xl'>Back to Home</Link></button>
      <h1 className='text-2xl text-center '>User Details</h1>
      
       
      
        <table className="border-collapse border w-full bg-amber-100">
         <thead className='bg-blue-300'>
          <tr  >
            <th className="border border-spacing-2">id</th>
            <th className="border border-spacing-2">Name</th>
            <th className="border border-spacing-2 ">Email</th>
              <th className="border border-spacing-2 ">Address</th>
                <th className="border border-spacing-2 ">Contact Number</th>
            <th className="border border-spacing-2 ">Password</th>
            <th className="border ">Edit/Delete</th>
          </tr>
          </thead>
          
          {data.map((item) => (
            <tbody key={item._id}>
            <tr  >
              <td className="border ">{item._id}</td>
              <td className="border ">{item.name}</td>
              <td className="border ">{item.email}</td>
                <td className="border ">{item.address}</td>
                <td className="border ">{item.contactno}</td>
              <td className="border ">{item.password}</td>
              <td>
                <button onClick={() => handleEdit(item._id)} className="bg-green-500 text-white"  >
                  Edit
                </button>
                <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white" >
                  Delete
                </button>
              </td>
            </tr>
            </tbody>
          ))}
        </table>
      </div>
   
    </>
      
  )
}

export default Userdata
