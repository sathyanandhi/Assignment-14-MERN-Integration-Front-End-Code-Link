import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";
const Register = () => {
  const navigate=useNavigate();
    const userid=useParams();
    const [text,setText] =useState('');
  //UseState hook
  const [formData, setformData] = useState({
    name: "",
    email: "",
    address:"",
    contactno:"",
    password: "",

  });
  const [errors, setErrors] = useState({});
  //Change Event
  const handleChange = (e) => {
    // console.log(formData);

    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  //Validate function
  const Validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is Required";
    }
    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "This is not a valid email";
    }
    if(!formData.address)
          {
         newErrors.address="Address is required";
        }
        if(!formData.contactno)
          {
         newErrors.contactno="Contact Number is required";
        }
    if (!formData.password) {
      newErrors.password = "Password is REquired";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be atleast 6 chars";
    }
    // if(!formData.state){
    //     newErrors.state="Select state"
    // }
    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  //Load with edit id
  function LoadEditUserId()
  {    
    const fetchdata=async()=>{
try{
  const token=localStorage.getItem("token");
  console.log(token);
    const res=await axios.get(`http://localhost:3002/crm-backend/getuserbyid/${userid.id}`,{
    headers:{Authorization:`Bearer ${token}` }})
   let res1=res.data.result;
  console.log(res.data.result);
   setformData({...formData,name:res1.name,email:res1.email,address:res1.address,contactno:res1.contactno,password:res1.password})
}
catch(err){
  console.log("Error in data",err);}}
fetchdata();  }



  //       alert("hi")
  //      await axios.get(`http://localhost:3002/crm-backend/getuserbyid/${userid.id}`)
  //           alert("welcome")
          
            
  //       .then((res)=>{
  //           console.log(userid.id.name);
  //           let res1=res.data;
  //           console.log(res1);
  //           setformData({...formData,name:res1.name,email:res1.email,address:res1.address,contactno:res1.contactno,password:res1.password})
  //           console.log(res1.name);
            
  //       })
  //       .catch((err)=>console.log(err)
  //       )
  //   };
  //   fetchdata();
    

  // }
  useEffect(()=>{
    if(userid.id==undefined)
    {setText('save')    
    }else{
      setText('Update')
      LoadEditUserId();
    }
    },[])
  //Save
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
         try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
      if(text==='save')
      {
      axios.post("http://localhost:3002/crm-backend/register",formData);
         alert("Registered successfully!");
    }else{
      axios.put(`http://localhost:3002/crm-backend/updateuser/${userid.id}`,formData,config);
      alert("Updated successfully!");
    }
      console.log(formData);
      setformData({name: "",
    email: "",
    address:"",
    contactno:"",
    password: ""})
      navigate('/login');
     
    }
    catch (err) {
        console.error("Operation failed:", err);
        alert("Something went wrong. Please try again.");
      }}
  };
  return (
    
    <div className="bg-amber-100 ">
       <div className="max-w-md mx-auto bg-cyan-300 p-3 rounded shadow-md ">
       <Link to="/"><button className="bg-blue-500 text-white p-3 rounded-2xl">Go Back</button></Link> 
      <h2 className="text-xl font-bold mb-4 text-fuchsia-900 text-center">
        Registration form
      </h2>
      <form onSubmit={handleSubmit} method="POST"  autoComplete="off">
        <div className="mb-3">
          <label className="font-medium text-fuchsia-900">Name</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-800 text-xl">{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label className="font-medium text-fuchsia-900">Email</label>
          <input
            type="email"
            className="border w-full p-2 rounded"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && (
            <p className="text-red-800 text-xl">{errors.email}</p>
          )}
        </div>
         <div className="mb-3">
          <label className="font-medium text-fuchsia-900">Address</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            name="address"
            value={formData.address}
            onChange={handleChange}
      
          />
          {errors.address && (
            <p className="text-red-800 text-xl">{errors.address}</p>
          )}
        </div>
         <div className="mb-3">
          <label className="font-medium text-fuchsia-900">Contact Number</label>
          <input
            type="number"
            className="border w-full p-2 rounded"
            name="contactno"
            value={formData.contactno}
            onChange={handleChange}
          />
          {errors.contactno && (
            <p className="text-red-800 text-xl">{errors.contactno}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="font-medium text-fuchsia-900">Password</label>
          <input
            type="password"
            className="border w-full p-2 rounded"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.password && (
            <p className="text-red-800 text-xl">{errors.password}</p>
          )}
        </div>
 
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded-4xl hover:bg-blue-600"
        >
          {text}
        </button>
      </form>
    </div>
        
      
    </div>
  )
}

export default Register
