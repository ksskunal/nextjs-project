import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import productContext from '../context/productContext'
import styles from "../styles/Products.module.css";
import MyButton from '../components/myButton';




const ProductDeatils = () => {
  const router = useRouter()
  const { id } = router.query
  const { fetchOne, singleProduct } = useContext(productContext)

  useEffect(() => {
    if (id) {
      fetchOne(id)
      console.log(singleProduct.image)

    }
  }, [])
  return (
    <>
      <div className={`${styles.container} ${styles.singleProduct}`}>
        <div>

          <Image

            src={singleProduct.image}
            alt="Product image"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.singleProductText}>

          <h2>{singleProduct.title}</h2>
          <h3>Price - ₹{singleProduct.price}</h3>
          <p>Description /- <br />{singleProduct.description}</p>
          <MyButton value={'Add to cart'} />
        </div>
      </div>
    </>
  )
}

export default ProductDeatils