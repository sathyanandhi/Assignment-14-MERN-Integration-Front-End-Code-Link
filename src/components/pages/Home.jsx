import React, { useEffect } from 'react'
 import Card from 'react-bootstrap/Card';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 import { Link } from 'react-router-dom';
const Home = () => {
   useEffect(()=>{
      localStorage.removeItem("token")
    })
  return (
    <div>
    
       <Card className="bg-dark text-white  text-2xl">
      <img className='h-140 w-500 object-fill  ' src="https://img.freepik.com/premium-photo/gradient-aqua-rough-abstract-background-design_851755-336838.jpg"  alt="Card image" />
      <Card.ImgOverlay className='text-center mt-30 '>
        <Card.Title className=' font-serif text-white'><h1 className='font-extrabold'>MERN INTEGRATION</h1></Card.Title>
        <Card.Text>
         <Card className='shadow-xl/20 bg-black text-white transform transition hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none'>
           
            <Card.Body>
              <Card.Title className='text-center font-serif rounded-2xl'><h3>Customer Relationship Management (CRM) 
application using the MERN Stack (MongoDB, Express.js, React.js and Node.js)</h3></Card.Title>
              <Card.Text className='rounded-2xl m-2 p-2' >
             <Button variant="warning" className='m-2'><Link to='/register' style={{textDecoration:'none',color:"black"}}>Register</Link></Button>
              <Button variant="success" className='m-2'><Link to='/login' style={{textDecoration:'none',color:"black"}}>Login</Link></Button>
              <Button variant="info" className='m-2'><Link to='/userdata' style={{textDecoration:'none',color:"black"}}>Getuser</Link></Button>
              </Card.Text>
              
             
            </Card.Body>
          </Card>
        </Card.Text>
       
      </Card.ImgOverlay>
      
    </Card>
  

    </div>



  )
}

export default Home
