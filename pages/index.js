import React, {Suspense} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useReducer } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaBars} from 'react-icons/fa'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp, FaArrowRight, FaUserFriends,FaShoppingBasket,FaHamburger} from 'react-icons/fa'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios'
import Header from '../src/header/header.js';
import DisplayImages from '../src/display/imagesDisplay.js';
const  Footer = React.lazy(()=> import('../src/footer/footer.js'))


export default function Home() {

 return(
  <>
  <Head>
  <title>Make Yanga</title>
  <meta name="description" content="Generate Phone screen ADs for your products for free" />
  <link rel="icon" href="\favicon.PNG" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>   
  <Header />
  <main>
  <DisplayImages />
  </main>
  <Suspense>
  <Footer />
  </Suspense>
  </>
 )  
 }


