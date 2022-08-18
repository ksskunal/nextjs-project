import { useContext, useState,useEffect } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";
import { Box } from "@mui/material";
import productContext from "../context/productContext";


const Navbar = () => {
  const {cart ,setCart} = useContext(productContext)
  const [open, setOpen] = useState(false);
  useEffect(()=>{
  const abc =  window.localStorage.getItem('cart')
  setCart(JSON.parse(abc))
  },[])
  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  return (
    <Box className={style.mainContainer}>
      <div className={style.container}>  
          <li className={style.myList}><Link style={{ color: "green" }} className={style.logoHeading} href="/">MARKTINE DIGITAL AGENCY</Link></li>
        <ul className={style.list}>
          <li className={style.listItem}>
            <Link style={{ color: "white" }} className={style.mylink} href="/">HOME</Link>
          </li>
          <li style={{ color: "white" }} className={style.listItem}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li style={{ color: "white" }} className={style.listItem}>
            <Link href="/products">PRODUCT</Link>
          </li>
          <li style={{ color: "white" }} className={style.listItem}>
            <Link href="faq">FAQ</Link>
          </li>
          <li className={style.listItem}>
            <Link style={{ color: "white" }} href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className={style.hamburger} onClick={() => setOpen(!open)}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.line} />
        </div>
        <ul onClick={() => setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
          <li className={style.menuItem}>
            <Link style={{ color: "white" }} href="/">HOME</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/products/design">DESIGN</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/products/development">DEVELOPMENT</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/products/production">PRODUCTION</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/products/photography">PHOTOGRAPHY</Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <ul  >
          <li className={style.listItem}>
          <Link style={{ color: "white" }} href="/cart">CART</Link><span className={style.cartNumber}>{!cart.totalItems?0:cart.totalItems}</span>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Navbar;
