import React, {Suspense,useState,useEffect,useRef,useCallback,useMemo,useLayoutEffect} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/displayImages.module.css'
import {FaFacebook, FaTwitter, FaTiktok, FaYoutube, FaCopyright, FaArrowUp} from 'react-icons/fa'
import {myStylesParent,myStylesChild,pixArr,backgroundType} from '/src/styles/styles.js'
import * as htmlToImage from 'html-to-image';
import domtoimage from 'dom-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { MdOutlineDownloading } from "react-icons/md"
import { RiScreenshot2Fill } from "react-icons/ri";




export default function DisplayImages() {
const [reorderImagesCounter,setReorderImagesCounter]= useState(0)
const [yImages,setYimages]= useState(pixArr)
const [bgType,setBgType]= useState('cover')
const reAsignImages = useRef([])
const imagesContianer = useRef([])
const input = useRef(null)
const ref = useRef(null) 
const parentContainer = useRef([]) 
const downloadPlusTools = useRef(null)


pixArr.length = 6

const reOrderImages = (index)=>{
var swapWithCurrentIndexPix = yImages[reorderImagesCounter]
var currentIndexPix = yImages[index]
yImages[reorderImagesCounter] = currentIndexPix;
yImages[index] = swapWithCurrentIndexPix;
increaseCount()	
}

const increaseCount = ()=>{
setReorderImagesCounter((reorderImagesCounter)=>	reorderImagesCounter + 1)
}

const resetCount = ()=>{
setReorderImagesCounter((reorderImagesCounter)=>	reorderImagesCounter = 0)
}

useEffect(()=>{
reorderImagesCounter > yImages.length -1  && setReorderImagesCounter(0)	
},[reorderImagesCounter])

const displayRAItabs = (index)=>{
reAsignImages.current[index].style.display = 'block'	
}
const hideRAItabs = (index)=>{
reAsignImages.current[index].style.display = 'none'	
}

useLayoutEffect(()=>{
imagesContianer.current[0].style.backgroundImage = `url(${yImages[0]})`
imagesContianer.current[1].style.backgroundImage = `url(${yImages[1]})`
imagesContianer.current[2].style.backgroundImage = `url(${yImages[2]})`
imagesContianer.current[3].style.backgroundImage = `url(${yImages[3]})`
imagesContianer.current[4].style.backgroundImage = `url(${yImages[4]})`
imagesContianer.current[5].style.backgroundImage = `url(${yImages[5]})`
yImages[0] === undefined ? parentContainer.current[0].style.display = 'none' : parentContainer.current[0].style.display = 'block'
yImages[1] === undefined ? parentContainer.current[1].style.display = 'none' : parentContainer.current[1].style.display = 'block'
yImages[2] === undefined ? parentContainer.current[2].style.display = 'none' : parentContainer.current[2].style.display = 'block'
yImages[3] === undefined ? parentContainer.current[3].style.display = 'none' : parentContainer.current[3].style.display = 'block'
yImages[4] === undefined ? parentContainer.current[4].style.display = 'none' : parentContainer.current[4].style.display = 'block'
yImages[5] === undefined ? parentContainer.current[5].style.display = 'none' : parentContainer.current[5].style.display = 'block'
},[reorderImagesCounter,yImages])


const shufflePixArray = ()=>{
var shuf = [...yImages]
let currentIndex = shuf.length,  randomIndex;
while (currentIndex != 0) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex--;
[shuf[currentIndex], shuf[randomIndex]] = [shuf[randomIndex], shuf[currentIndex]];
}
return setYimages(shuf)	

}


  
const  assignImages = (obj)=>{
var tempArray = []
var imagesArray = [...obj]
imagesArray.map((file)=>{
var imageUrl = URL.createObjectURL(file)
tempArray.push(imageUrl)
}
)
setYimages(tempArray)
}

const renderImage = ()=>{
domtoimage
  .toPng(ref.current, { quality: 1.0})
  .then(function (dataUrl) {
  var link = document.createElement("a");
  link.download = "my-Yanga.png";
  link.href = dataUrl;
  link.click();
  });
   }

useEffect(()=>{
const showDisplayImages = setTimeout(()=>{
ref.current.style.display = 'block'	
},500)
return ()=> clearTimeout(showDisplayImages)
},[])

useEffect(()=>{
downloadPlusTools.current.style.display = 'block'
},[])
  
 const handleClick = event => {
    input.current.click();
  }; 


return (  
<>
<div className={styles.displayImages}>
<div className={styles.imagesContianer}  ref = {ref}  >
{
myStylesParent.map((smartPhone,index)=>{
	
return (

<div style= {myStylesParent[index]} onMouseEnter = {()=>{displayRAItabs(index)}} onMouseLeave = {()=>{hideRAItabs(index)}} key={index} ref = {(imgFrame)=>{parentContainer.current[index] = imgFrame}} >
<div  className={styles.imageContainer}  style= {myStylesChild[index]} ref ={(continer)=>{imagesContianer.current[index] = continer }}>
<div  className={styles.change_image_arragngements} ref = {(rAi)=> {reAsignImages.current[index] = rAi}}>
<h5 onClick={resetCount}>Reorder Images</h5>
<p className={styles.change_image_arragngements_number} onClick = {()=>{reOrderImages(index)}} >{reorderImagesCounter + 1}</p>
<div className={styles.change_image_arragngements_reset}  style={{cursor:'pointer'}}   onClick = {resetCount}>Reset</div>

</div>
</div>

</div>

)
})
}
</div>
<div className={styles.sideButtons}><button className={styles.snapDownload_btnBigSc} onClick = {()=> renderImage()}  > <RiScreenshot2Fill style={{verticalAlign:'middle', fontSize:'2.5rem'}} /> <MdOutlineDownloading style={{verticalAlign:'middle', fontSize:'2.5rem'}} /><span style={{verticalAlign:'middle'}} > D{<br />}o{<br />}w{<br />}n{<br />}l{<br />}o{<br />}a{<br />}d </span></button> 
 <button onClick={handleClick} className={styles.customButtons} >
 U {<br />} p {<br />} l {<br />} o {<br />} a {<br />}d
 </button>
 <button   className={styles.shuffBtnBigSc}  onMouseDown = {shufflePixArray} type= 'button'>S{<br />} h {<br />} u {<br />} f {<br />} f {<br />} l {<br />}e </button> 
 <input   style ={{display:'none'}}  className={styles.tools_inputBigSc} type = 'file' multiple ref={input}  accept='image/*' onChange={(e)=>{assignImages(e.target.files)} } />
</div>

<div ref = {downloadPlusTools}>
<div className={styles.snapDownload}>
<button className={styles.snapDownload_btn} onClick = {()=> renderImage()}  > <RiScreenshot2Fill style={{verticalAlign:'middle', fontSize:'2.5rem'}} /> <MdOutlineDownloading style={{verticalAlign:'middle', fontSize:'2.5rem'}} /><span style={{verticalAlign:'middle'}} > Download </span></button>
</div>
<div className={styles.tools}>
<form >
<input    className={styles.tools_input} type = 'file' multiple ref={input}  accept='image/*' onChange={(e)=>{assignImages(e.target.files)} } />
<button   className={styles.shuffBtn}  onMouseDown = {shufflePixArray} type= 'button'>Shuff Images</button>
</form>
<div className={styles.shuffleContainer}></div></div>
</div>  
</div> 
</>
)
}



