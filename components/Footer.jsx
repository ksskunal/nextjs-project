import React from 'react'
import style from "../styles/Footer.module.css"
import Link from 'next/dist/client/link';
import Image from 'next/image';
import { Box, Container } from '@mui/system';

const Footer = () => {

  return (
    <Box className={style.Box}>
      <Container className={style.container}>
        <div className={style.card}>
          <h3 className={style.cardtitle}>About Us</h3>
          <p className={style.pera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ex qui placeat tenetur optio iure culpa, vel deleniti consequatur inventore sequi, aspernatur suscipit?</p>
        </div>
        <div className={style.card}>
          <h3 className={style.cardtitle}>Quick Link</h3>
          <ul className='style.ul'>
            <li className={style.li}><Link href="/"> Home</Link></li>
            <li className={style.li}><Link href="/about">About Us</Link></li>
            <li className={style.li}> <Link href="/products">Product</Link></li>
            <li className={style.li}>  <Link href="/faq">FAQ</Link>  </li>
            <li className={style.li}> <Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={style.card}>
          <h3 className={style.cardtitle}>Contact Us</h3>
          <ul>
            <li className={style.listItem}>Jaipur, Rajasthan</li>
            <li className={style.listItem}>mahikumawat121998@gmail.com</li>
            <li className={style.listItem}> +91 9828107200</li>
          </ul>
        </div>


        <div className={style.card}>
        <h3 className={style.cardtitle}>Follow On</h3>
          <div style={{display:"flex"}}>

            <span className={style.footorItem}>
              <Image className={style.imgSection} src="/img/facebook.png"  layout='fill' objectFit='contain' />

            </span>
            <span className={style.footorItem}>
              <Image className={style.imgSection} src="/img/google.png"  layout='fill' objectFit='contain' /></span>

            <span className={style.footorItem}><Image className={style.imgSection} src="/img/yahoo.png"  layout='fill' objectFit='contain' /></span>
          </div>
        </div>


      </Container>
      <div className={style.terms}> &#169;
        2022 Marktine Technology All Reserved Right
      </div>
    </Box>

  );
};









export default Footer