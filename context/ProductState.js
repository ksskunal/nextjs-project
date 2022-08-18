import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
    const [products, setProducts] = useState([])
    const [singleProduct , setSingleproduct ] = useState([])
    const [cart , setCart ] = useState({})

    const fetchProducts = async() =>{
      await  fetch('https://fakestoreapi.com/products')
        .then((res)=>{return res.json()})
        .then((data)=>{ 
            setProducts(data)
        })
    }

    const fetchOne = (id) =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setSingleproduct(data)
        })
    }

  return (
    <>
    <ProductContext.Provider value={ {fetchProducts , products ,setProducts, fetchOne, singleProduct, cart , setCart}}>
        {props.children}
    </ProductContext.Provider>
    </>
  )
}

export default ProductState