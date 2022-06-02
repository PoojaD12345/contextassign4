import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const [product, setProduct] = useState({})
    const {id}=useParams()
    // console.log("Hi")
  
    useEffect(()=>
    {
        if(id){
            fetch(`http://localhost:8080/Products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d));
        }
    },[id])
  return (
   <>
   <img src={product.imgurl}style={{height:"200px" ,width:"200px"}}/>
    <div>
    <div><h2>{product.name}</h2>
     <p>{product.price}Rs.</p> 
      </div>
    </div>
   </>
  )
}

export default Product