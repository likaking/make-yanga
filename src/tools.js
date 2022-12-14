import React, {Suspense, useState,useEffect,useRef,useLayoutEffect} from 'react';
import { Sparklines,SparklinesLine,SparklinesSpots } from 'react-sparklines';
import Home from '../pages/index.js'
import axios from 'axios'
import styles from '../styles/tools.module.css'
import {FaCaretDown,FaCaretUp,FaTrashAlt,FaStar,FaInfoCircle,FaWindowClose,FaTimes} from 'react-icons/fa'
import { MdOutlineSettingsPower,MdOutlinePowerSettingsNew,MdPowerSettingsNew } from "react-icons/md";
import Select from 'react-select' 
import {toolOptionsList} from '../src/toolOptions.js'
import {toolFuncs} from '../src/toolFuncs.js'
import {allToolsFunction} from '../src/funcMethods.js'
import {FetchCryptoInfo} from '../src/fetchCoinStats.js'
import {FetchHistoricalPrices} from '../src/historicalPrices.js'
import {DispalyAllHistoricalPrices} from '../src/displayHistoricalPrices.js'


export default function Tools({activeCoins,setActiveCoins,buy,setBuy,Speech,setQuickData,setCoinArr,currency,searchGems,setSearchGems,openModal,setOpenModal,
modalSearch,setModalSearch,startModal,setStartModal,index,setIndex,priceAlertzPing,setPriceAlertzPing,currencySymbol,setCurrencySymbol,openTools,
setOpenTools,headerText,setHeaderText,funcParams,setFuncParams,number,setNumber,switchHeader,setSwitchHeader,coinSym,setCoinSym,historicalDate,
setHistoricalDate,hPerror,setHpError,changingCurrency,setChangingCurrency,loadingStats,setLoadingStats}){

const [process,setProcess] = useState('Price_Change_Percentage_24h_In_Currency_Above')
const [processHistoricalPrices,setProcessHistoricalPrices] = useState()
const [fetchData,setFetchData] = useState()
const [hPrices,setHPrices] = useState([])
const numberField = useRef(null)
	

const typeOfTools = (e)=>{
const value = e.value
setHeaderText(value)		
}

const above = ()=>{
setFuncParams('Above')	
}

const below = ()=>{
setFuncParams('Below')	
}

const typeNum = (e)=>{
setNumber(e.target.value)
}
const coin_sym = (e)=>{
setCoinSym(()=>e.target.value)
setHeaderText('Historical Price of ' + coinSym + ' 0n ')

}

const historical_Date = (e)=>{
setHistoricalDate(e.target.value)

}

const switchOff = ()=>{setOpenTools(false)}

const dispatchTool = (tool,params)=>{
if(number.trim().length > 0 ){
setProcessHistoricalPrices('');
var formatHeaderText = headerText.split(' ').join('_')
setProcess(formatHeaderText+'_'+funcParams)	
setFetchData(currency+formatHeaderText+'_'+funcParams+number)	
setHpError('')
}
else{
setLoadingStats('Please add a number to the number field')	
return false
}
}

const switchHistorical = ()=>{setSwitchHeader(true)}

const switchCoinDetials = ()=>{setSwitchHeader(false)}

const dispatchHistoricalPrices = (tool,params)=>{
if(switchHeader){
var hpText = currency+coinSym+historicalDate
setProcessHistoricalPrices(hpText)	
setLoadingStats('Loading coin stats........')
}
}


return(
<>
<Suspense>
<FetchCryptoInfo activeCoins={activeCoins} setActiveCoins={setActiveCoins} number={number} setNumber={number,setNumber} process={process}
 setProcess={setProcess} currency={currency} switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} fetchData={fetchData} 
 setFetchData={setFetchData} changingCurrency={changingCurrency} setChangingCurrency ={setChangingCurrency} hPerror={hPerror} setHpError={setHpError}
 loadingStats={loadingStats} setLoadingStats={setLoadingStats} />
</Suspense>  

<FetchHistoricalPrices coinSym={coinSym} setCoinSym={setCoinSym} historicalDate={historicalDate} setHistoricalDate={setHistoricalDate}
 processHistoricalPrices={processHistoricalPrices} setProcessHistoricalPrices={setProcessHistoricalPrices} currency={currency} 
 switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} hPrices={hPrices} setHPrices={setHPrices} activeCoins={activeCoins}
 setActiveCoins={setActiveCoins} hPerror={hPerror} setHpError={setHpError} setLoadingStats={setLoadingStats} /> 
 
<DispalyAllHistoricalPrices coinSym={coinSym} setCoinSym={setCoinSym} historicalDate={historicalDate} setHistoricalDate={setHistoricalDate}
 processHistoricalPrices={processHistoricalPrices} setProcessHistoricalPrices={setProcessHistoricalPrices} currency={currency} 
 switchHeader={switchHeader} setSwitchHeader={setSwitchHeader} hPrices={hPrices} setHPrices={setHPrices} activeCoins={activeCoins} setActiveCoins={setActiveCoins}
 searchGems={searchGems} setSearchGems={setSearchGems} currencySymbol ={currencySymbol} setCurrencySymbol={setCurrencySymbol}
 />
 
<div  className={styles.tools_container} style = {{display: openTools ? 'block' : 'none'}} >
<div  className={styles.tools_inner_container}>
<div  className={styles.tools_close}><MdPowerSettingsNew className={styles.tools_closeIcon} /></div>
<div  className={styles.form}>
<form >
<Select options={toolOptionsList}  defaultValue = {toolOptionsList[9]}  className={styles.select} onChange={(e)=>{typeOfTools(e);switchCoinDetials()}} />
<div className={styles.formDivs}>
<button type='button' type = 'button'  className={styles.formAbvBel_Btns} onClick = {above} >Above</button> <button type='button' type = 'button' className={styles.formAbvBel_Btns} onClick = {below} >Below</button>
</div>
<div className={styles.formDivs}>
<input type= 'number' placeholder='Type numder'  className={styles.formInput} onChange = {typeNum} onMouseOver = {()=>{switchCoinDetials()}} ref={numberField}   />
</div>
<div className={styles.formDivs}>
<button type='button'  className={styles.formProcessBtn} onClick = {dispatchTool} >Process</button>
</div>
</form>
</div>

<div className={styles.formHP}>
<h4 className={styles.header}>Historical Prices</h4>
<form >
<div className={styles.formDivs}>
<input type= 'text' placeholder='bitcoin'  className={styles.formInput} onChange={(e)=>{setCoinSym(e.target.value.toLowerCase());switchHistorical();setHpError('')}}   />
</div>
<div className={styles.formDivs}>
<input type= 'text' placeholder='Date eg 22-10-2015 '  className={styles.formInput} onChange={(e)=>{setHistoricalDate(e.target.value)}}/>
</div>
<div className={styles.formDivs}>
<button  type='button' className={styles.formProcessBtnHP} onClick = {dispatchHistoricalPrices}>Process</button>
</div>
</form>
</div>

<div className={styles.formOnOff}><span   ><MdPowerSettingsNew  className={styles.formOnOff_Icon}  onClick ={switchOff}  /></span></div>
</div>
</div>

</>
)
}