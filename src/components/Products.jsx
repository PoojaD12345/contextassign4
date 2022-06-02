import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
 const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            let r=await fetch("http://localhost:8080/Products")
            let d=await r.json()
            setProducts(d)
        }
        fetchProducts()
    },[])
  return (
    <>
     <table  style={{ "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",margin:"auto",padding:"20px"}}>
        <thead style={{padding:"30px"}}>
          <th>Product Id</th>
          <th>Product name</th>
          <th>Price</th>
          <th>More deatils</th>
        </thead>
     
    {products.map((p)=>(
        <tbody style={{paddingTop:"50px"}}>
          <>
          <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td><Link to={`/Products/${p.id}`}><button>more-details</button></Link></td>
            </tr>
            </>
            </tbody>    
    ))}
    </table>
    <Outlet/></>
  )
}

export default Products