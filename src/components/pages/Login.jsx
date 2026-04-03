import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate=useNavigate();
     const [login,setLogin]= useState({
            email:"",
            password:""
        })
        const handleChange=(e)=>{
            setLogin({...login,[e.target.name]:e.target.value})
        }
        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const res=await axios.post("http://localhost:3002/crm-backend/login",login);
                localStorage.setItem("token",res.data.token)
                console.log(res.data.token);
                
                navigate('/userdata')
            }catch(err){
                alert("Invalid credentials")
            }
        }
  return (
     <div className='d-flex justify-content-center bg-lime-200'>
     <div className='bg-white p-5 rounded m-5'>
         <button className='btn btn-warning'><Link to='/' style={{textDecoration:"none"}}>Home</Link></button>
                <h2 style={{color:'green'}}>Login</h2>
                  <form method="POST" onSubmit={handleSubmit}>
                          
                            <div className='mb-3'>
                                <label>Email</label>
                                <input type='email' placeholder='Enter ur email' className='form-control ' name='email' value={login.email} onChange={handleChange}/>
                            </div>
                            <div className='mb-3'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter ur password' className='form-control ' name='password' value={login.password} onChange={handleChange}/>
                            </div>
                            <button type='submit' className='btn btn-success w-100'>Login</button>
                            <button className='btn btn-white'><Link to='/register'>Create a new user</Link></button>
                        </form>
        </div></div>
  )
}

export default Login

