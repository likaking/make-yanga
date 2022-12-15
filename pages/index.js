import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaBars} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios'
import Header from './header/header.js';
import { useReducer } from "react";
const  Footer = React.lazy(()=> import('./footer/footer.js'))



export default function Home() {

 return(
  <>
  <Head>
  <title>Make Yanga</title>
  <meta name="Generate Phone screen ADs for your products for free" />
  <link rel="icon" href="/favicon.PNG" />
  </Head>
      
  <Header />

  <main style={{minHeight:'50vh'}} >

  
  </main>

  <Footer />
  

   </>
 )  
 }


