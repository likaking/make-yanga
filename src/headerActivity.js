import React, {Suspense, useState,useEffect,useRef} from 'react';
import styles from '../styles/Home.module.css'
import Home from '../pages/index.js'
import {data1} from '../pages/index.js'
import axios from 'axios'
import {FaBell} from 'react-icons/fa'


  

export default function HeaderActivity({currencySymbol,setCurrencySymbol,headerText,setHeaderText,funcParams,setFuncParams,number,setNumber,
switchHeader,setSwitchHeader,coinSym,setCoinSym,historicalDate,setHistoricalDate,activeCoins,setActiveCoins,hPerror,setHpError,changingCurrency,
setChangingCurrency,arraySelector,setArraySelector,loadingStats,setLoadingStats}){

var num = Number(number).toLocaleString()
var switchCurrencyPercentage = headerText.includes('Percentage') ?  num + '%' : headerText.includes('Rank') ?  num : headerText.includes('Supply') ?  num  : currencySymbol + num 
var resultStatus = activeCoins.flat().length > 1 ? 'results' : 'result'
var numberOfResult = activeCoins.flat().length



return(
<>
<div style = {{height:'6em',width:'100%',position:'relative'}}>
<p style = {{position:'absolute',top:'-35%',fontWeight:'bold',left:'0',right:'0',marginLeft:'auto',marginRight:'auto',textAlign:'center',color:'rgb(76, 85, 88)'}}>{loadingStats}</p>
{!switchHeader ? <h2 style ={{textAlign:'center',color:'rgb(56, 88, 84)'}} >{headerText} {funcParams} {switchCurrencyPercentage}</h2> : <h2 style ={{textAlign:'center',color:'rgb(56, 88, 84)'}}>Historical Price Of {coinSym.slice(0,1).toUpperCase()+coinSym.slice(1)} on {historicalDate} </h2>}
{!switchHeader && activeCoins.length > 0  && <div style={{textAlign:'center'}}>{numberOfResult} {resultStatus} | Page {arraySelector + 1} {' of '} {activeCoins.length} </div>}
{switchHeader && <div  style ={{textAlign:'center',color:'red'}}>{hPerror}</div>}
{!switchHeader && <div  style ={{textAlign:'center',color:'red'}}>{hPerror}</div>}
{changingCurrency !== ' ' && <p style ={{textAlign:'center'}} >{changingCurrency}</p>}
</div>
</>
)

}