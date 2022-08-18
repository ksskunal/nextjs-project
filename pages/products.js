import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import styles from "../styles/Products.module.css";
import Productcard from '../components/Productcard';
import Searchbar from '../components/Searchbar';
import productContext from '../context/productContext';
import Head from 'next/head';

const Products = () => {
    const { fetchProducts, products } = useContext(productContext)
    const [searchItem, setSearchItem] = useState()

    useEffect(() => {
        fetchProducts();
    }, [])

    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Products</title>
                    <meta name="description" content="Marktine Technology Product Page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.searchBox}>
                    <Searchbar value={searchItem} handleChange={handleChange} />
                </div>
                {products.map((product) => (
                    <div className={styles.prodcutItem} key={product.id}>
                        <Productcard product={product} />
                    </div>

                ))}
            </div>
        </>
    )
}

export default Products