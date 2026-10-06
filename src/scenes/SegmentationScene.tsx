import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const SegmentationScene: React.FC = () => {
  const frame=useCurrentFrame();
  const {fps}=useVideoConfig();
  const branch=spring({fps,frame:frame-12,config:{damping:20,stiffness:90,mass:0.9}});
  const sceneOut=fadeOut(frame,99,104);
  return <AbsoluteFill style={{backgroundColor:theme.colors.paper,color:theme.colors.navy,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:68,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.segmentation.kicker}</div>
    <div dir="rtl" style={{position:'absolute',left:78,right:78,top:125,fontSize:44,lineHeight:1.5,fontWeight:780,textAlign:'right'}}>{script.segmentation.title}</div>

    <svg width="1080" height="520" viewBox="0 0 1080 520" style={{position:'absolute',top:300,left:0}}>
      <path d="M540 30 L540 130" stroke="#0F766E" strokeWidth="8" strokeLinecap="round" strokeDasharray="100" strokeDashoffset={interpolate(branch,[0,1],[100,0],clamp)} />
      <path d="M540 130 C540 180 255 170 255 245" stroke="#0F766E" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="390" strokeDashoffset={interpolate(branch,[0,1],[390,0],clamp)} />
      <path d="M540 130 L540 245" stroke="#0F766E" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="150" strokeDashoffset={interpolate(branch,[0,1],[150,0],clamp)} />
      <path d="M540 130 C540 180 825 170 825 245" stroke="#0F766E" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="390" strokeDashoffset={interpolate(branch,[0,1],[390,0],clamp)} />
      <circle cx="540" cy="30" r="28" fill="#111C2F" />
    </svg>

    <div style={{position:'absolute',left:70,right:70,top:555,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
      {script.segmentation.groups.map((g,i)=>{const p=spring({fps,frame:frame-(29+i*7),config:{damping:14,stiffness:155,mass:.7}});return <div key={g.title} style={{height:195,borderRadius:28,border:`1px solid ${theme.colors.line}`,backgroundColor:i===0?theme.colors.navy:theme.colors.cream,color:i===0?theme.colors.white:theme.colors.navy,padding:'28px 24px',opacity:p,transform:`translateY(${interpolate(p,[0,1],[45,0],clamp)}px)`}}><div style={{fontSize:25,fontWeight:950,lineHeight:1.18}}>{g.title}</div><div style={{fontSize:17,opacity:.62,marginTop:22,lineHeight:1.45}}>{g.sub}</div></div>})}
    </div>

    <div style={{position:'absolute',left:155,right:155,top:830,display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,opacity:fade(frame,58,72)}}>
      {script.segmentation.people.map((p,i)=><div key={p.name} style={{borderRadius:25,padding:'23px 25px',backgroundColor:theme.colors.white,border:`2px solid ${i===0?theme.colors.green:theme.colors.line}`}}><div style={{display:'flex',alignItems:'center',gap:16}}><div style={{width:58,height:58,borderRadius:99,backgroundColor:i===0?theme.colors.green:theme.colors.greenSoft,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:950,fontSize:25,color:i===0?theme.colors.white:theme.colors.navy}}>{p.name[0]}</div><div><div style={{fontSize:27,fontWeight:950}}>{p.name}</div><div style={{fontSize:17,color:theme.colors.muted,marginTop:3}}>{p.sub}</div></div></div></div>)}
    </div>

    <div style={{position:'absolute',left:0,right:0,bottom:74,textAlign:'center',fontSize:52,fontWeight:950,letterSpacing:-1.5,color:theme.colors.green,opacity:fade(frame,75,88)}}>{script.segmentation.payoff}</div>
  </AbsoluteFill>;
};
