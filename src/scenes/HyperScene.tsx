import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

const signalPos=[[90,340],[90,520],[90,700],[760,420],[760,620]] as const;

export const HyperScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const converge=spring({fps,frame:frame-46,config:{damping:17,stiffness:115,mass:.8}});
  const engine=spring({fps,frame:frame-36,config:{damping:13,stiffness:170,mass:.66}});
  const sceneOut=fadeOut(frame,114,119);
  return <AbsoluteFill style={{backgroundColor:theme.colors.navy,color:theme.colors.white,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:66,fontSize:18,fontWeight:900,letterSpacing:4,color:'#9DD0C8'}}>{script.hyper.kicker}</div>
    <div dir="rtl" style={{position:'absolute',left:78,right:78,top:118,fontSize:38,lineHeight:1.55,fontWeight:720,textAlign:'right',color:'#E8EEF2'}}>{script.hyper.headline}</div>

    {script.hyper.signals.map((s,i)=>{const p=spring({fps,frame:frame-(10+i*5),config:{damping:14,stiffness:155,mass:.7}});const [x,y]=signalPos[i];const dx=interpolate(converge,[0,1],[0,540-x-115],clamp);const dy=interpolate(converge,[0,1],[0,590-y],clamp);const sc=interpolate(converge,[0,1],[1,.18],clamp);return <div key={s.label} style={{position:'absolute',left:x,top:y,width:230,minHeight:106,borderRadius:23,backgroundColor:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.16)',padding:'20px 20px',opacity:p,transform:`translate(${dx}px,${dy}px) scale(${sc})`}}><div style={{fontSize:17,fontWeight:900,letterSpacing:2,color:'#9DD0C8'}}>{s.label}</div><div style={{fontSize:19,lineHeight:1.35,fontWeight:650,marginTop:9,color:'#F2F5F7'}}>{s.value}</div></div>})}

    <div style={{position:'absolute',left:390,top:470,width:300,height:240,borderRadius:42,backgroundColor:theme.colors.green,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow:'0 0 0 20px rgba(15,118,110,.16), 0 25px 80px rgba(0,0,0,.26)',opacity:engine,transform:`scale(${interpolate(engine,[0,1],[.75,1],clamp)})`}}><div style={{fontSize:18,letterSpacing:3,fontWeight:800,opacity:.78}}>CONTEXT</div><div style={{fontSize:45,fontWeight:950,marginTop:5}}>ENGINE</div><div style={{fontSize:22,fontWeight:800,marginTop:4}}>/ AI</div></div>

    <div style={{position:'absolute',left:80,right:80,top:780,display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,opacity:fade(frame,68,80)}}>{script.hyper.actions.map((a,i)=>{const strong=a.split(' ')[0];const rest=a.slice(strong.length+1);return <div key={a} style={{height:92,borderRadius:23,backgroundColor:i===1?theme.colors.green:'#1C2A42',border:'1px solid rgba(255,255,255,.13)',display:'flex',alignItems:'center',padding:'0 24px',fontSize:20,fontWeight:700}}><span style={{fontWeight:950,color:i===1?theme.colors.white:'#9DD0C8',marginRight:10}}>{strong}</span>{rest}</div>})}</div>

    <div style={{position:'absolute',left:0,right:0,bottom:70,textAlign:'center',fontSize:44,fontWeight:950,letterSpacing:1,color:'#E8F5F2',opacity:fade(frame,86,100)}}>{script.hyper.payoff}</div>
  </AbsoluteFill>;
};
