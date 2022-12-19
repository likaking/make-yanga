import React, {Suspense,useState,useEffect,useRef,useCallback,useMemo,useLayoutEffect} from 'react';
export let pixArr = ['/yangaAd1.png','/yangaAd5.png','/yangaAd3.png','/yangaAd2.png','/yangaAd4.png','/yangaAd6.png']


export const myStylesParent = [
{
position:'absolute',
top:'15%',
left:'10.5%',
height:'51.5%',
width:'16.7%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:3,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
},
{
position:'absolute',
top:'37%',
left:'22%',
height:'51%',
width:'17%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:2,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
},
{
position:'absolute',
top:'16%',
left:'36.5%',
height:'51%',
width:'17%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:1,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
},
{
position:'absolute',
top:'24.89%',
left:'49%',
height:'56%',
width:'18.8%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:3,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
},
{
position:'absolute',
top:'36%',
left:'63.2%',
height:'53.7%',
width:'18.4%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:2,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
},
{
position:'absolute',
top:'10.6%',
left:'71.7%',
height:'52.5%',
width:'18.4%',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundColor: 'transparent',
zIndex:1,
boxShadow: '0px 0px 18px 13px rgba(0,0,0,0.1)',
overflow:'hidden',
perspective: '1000px',
transition: 'transform 0.5s'
}
]

export const myStylesChild = [
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transform: 'rotateY(-2deg)',
transition: 'transform 0.5s'
},
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transformOrigin:' 20% 40%',
transform: 'rotateY(-7deg)',
transition: 'transform 0.5s'
},
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transformOrigin:' 20% 40%',
transform: 'rotateY(-7deg)',
transition: 'transform 0.5s'
},
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transformOrigin:' 20% 40%',
transform: 'rotateY(-7deg)',
transition: 'transform 0.5s'
},
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transformOrigin:' 20% 40%',
transform: 'rotateY(-7deg)',
transition: 'transform 0.5s'
},
{
height:'100%',
width:'100%',
overflow:'hidden',
borderRadius: typeof window !== 'undefined' && window.innerWidth <= 790 ? '2vw' : '1.6vw',
backgroundSize:'cover',
backgroundRepeat:'no-repeat',
transformStyle: 'preserve-3d',
transformOrigin:' 20% 40%',
transform: 'rotateY(-7deg)',
transition: 'transform 0.5s'
}
]
