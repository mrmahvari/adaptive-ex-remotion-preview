import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const GovernanceScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const sceneOut=fadeOut(frame,69,74);
  const headline=spring({fps,frame:frame-3,config:{damping:14,stiffness:160,mass:.7}});
  return <AbsoluteFill style={{backgroundColor:'#0B111C',color:theme.colors.white,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:66,fontSize:18,fontWeight:900,letterSpacing:4,color:'#9DD0C8'}}>{script.governance.kicker}</div>
    <div style={{position:'absolute',left:75,right:75,top:260,textAlign:'center',fontSize:74,lineHeight:1.02,fontWeight:950,letterSpacing:-3,opacity:headline,transform:`scale(${interpolate(headline,[0,1],[.9,1],clamp)})`}}>{script.governance.headline}</div>
    <div style={{position:'absolute',left:92,right:92,top:570,display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>{script.governance.principles.map((p,i)=>{const q=spring({fps,frame:frame-(22+i*6),config:{damping:14,stiffness:155,mass:.7}});return <div key={p} style={{height:132,borderRadius:26,border:'1px solid rgba(255,255,255,.16)',backgroundColor:i===2?'rgba(15,118,110,.55)':'rgba(255,255,255,.06)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,fontWeight:950,letterSpacing:1.5,opacity:q,transform:`translateY(${interpolate(q,[0,1],[32,0],clamp)}px)`}}>{p}</div>})}</div>
    <div dir="rtl" style={{position:'absolute',left:92,right:92,bottom:115,textAlign:'center',fontSize:28,lineHeight:1.7,fontWeight:650,color:'#D8E0E6',opacity:fade(frame,48,60)}}>{script.governance.footer}</div>
  </AbsoluteFill>;
};
