import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

const positions=[[-90,170],[720,170],[-120,720],[730,720],[300,1010]] as const;

export const PersonalizationScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const portal=spring({fps,frame:frame-10,config:{damping:16,stiffness:120,mass:.8}});
  const sceneOut=fadeOut(frame,114,119);
  return <AbsoluteFill style={{backgroundColor:theme.colors.cream,color:theme.colors.navy,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:68,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.personalization.kicker}</div>
    <div dir="rtl" style={{position:'absolute',left:78,right:78,top:125,fontSize:48,lineHeight:1.45,fontWeight:800,textAlign:'right'}}>{script.personalization.headline}</div>

    <div style={{position:'absolute',left:184,right:184,top:335,height:650,borderRadius:36,backgroundColor:theme.colors.white,border:`1px solid ${theme.colors.line}`,boxShadow:'0 28px 70px rgba(17,28,47,.11)',padding:'42px 42px',opacity:portal,transform:`translateY(${interpolate(portal,[0,1],[60,0],clamp)}px) scale(${interpolate(portal,[0,1],[.95,1],clamp)})`}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontSize:20,color:theme.colors.muted,fontWeight:700}}>EMPLOYEE PORTAL</div><div style={{fontSize:42,fontWeight:950,marginTop:10}}>Good morning, Sara 👋</div></div><div style={{width:76,height:76,borderRadius:99,backgroundColor:theme.colors.green,color:theme.colors.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:31,fontWeight:950}}>S</div></div>
      <div style={{marginTop:44,fontSize:19,color:theme.colors.muted,fontWeight:750}}>YOUR ONBOARDING</div>
      <div style={{marginTop:12,display:'flex',alignItems:'center',gap:18}}><div style={{flex:1,height:15,backgroundColor:'#E9ECEA',borderRadius:99,overflow:'hidden'}}><div style={{height:'100%',width:`${interpolate(frame,[18,65],[0,72],clamp)}%`,backgroundColor:theme.colors.green,borderRadius:99}} /></div><div style={{fontSize:28,fontWeight:950}}>72%</div></div>
      <div style={{marginTop:42,fontSize:19,color:theme.colors.muted,fontWeight:750}}>NEXT STEPS</div>
      <div style={{marginTop:18,display:'flex',flexDirection:'column',gap:15}}>{script.personalization.tasks.map((t,i)=><div key={t} style={{height:76,borderRadius:19,backgroundColor:i<2?'#F2F7F5':theme.colors.cream,border:`1px solid ${i<2?'#D4E7E1':theme.colors.line}`,display:'flex',alignItems:'center',padding:'0 20px',gap:15,fontSize:21,fontWeight:750}}><div style={{width:30,height:30,borderRadius:99,backgroundColor:i<2?theme.colors.green:'transparent',border:`2px solid ${i<2?theme.colors.green:'#A9B1BB'}`,color:theme.colors.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{i<2?'✓':''}</div>{t}</div>)}</div>
    </div>

    {script.personalization.chips.map((c,i)=>{const p=spring({fps,frame:frame-(34+i*8),config:{damping:12,stiffness:180,mass:.62}});const [x,y]=positions[i];const tx=interpolate(p,[0,1],[x<0?-150:150,0],clamp);return <div key={c} style={{position:'absolute',left:x<0?45:x,top:y,width:i===4?310:230,height:68,borderRadius:18,backgroundColor:theme.colors.navy,color:theme.colors.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,fontWeight:900,letterSpacing:1,opacity:p,transform:`translateX(${tx}px)`}}>{c}</div>})}

    <div style={{position:'absolute',left:0,right:0,bottom:66,textAlign:'center',fontSize:39,fontWeight:950,color:theme.colors.green,letterSpacing:.5,opacity:fade(frame,86,100)}}>{script.personalization.payoff}</div>
  </AbsoluteFill>;
};
