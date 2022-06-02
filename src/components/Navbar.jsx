import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
const navigate=useNavigate();
 const handleOnClick=(id)=>{
    if(id===1){
        navigate("/Products/1")
    }
 }



  return (
    <div style={{display:"flex",justifyContent:"space-around", margin:"auto"}}>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Products'>Products</Link>
        {/* <button onClick={()=>handleOnClick(1)}>Go To Product 1</button> */}
        {/* <button onClick={()=>handleOnClick(2)}>Go To Product 2</button> */}
    </div>

  )
}

export default Navbar