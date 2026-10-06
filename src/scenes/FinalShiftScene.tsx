import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const FinalShiftScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const oldIn=spring({fps,frame:frame-4,config:{damping:15,stiffness:145,mass:.72}});
  const strike=spring({fps,frame:frame-34,config:{damping:18,stiffness:120,mass:.8}});
  const newIn=spring({fps,frame:frame-52,config:{damping:13,stiffness:165,mass:.68}});
  const sceneOut=fadeOut(frame,131,134);
  return <AbsoluteFill style={{backgroundColor:theme.colors.cream,color:theme.colors.navy,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:66,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.finalShift.kicker}</div>

    <div style={{position:'absolute',left:86,right:86,top:235,opacity:oldIn,transform:`translateY(${interpolate(oldIn,[0,1],[45,0],clamp)}px)`}}>
      <div style={{fontSize:53,lineHeight:1.05,fontWeight:950,letterSpacing:-2,whiteSpace:'pre-line',color:'#6F7883'}}>{script.finalShift.from}</div>
      <div style={{height:10,borderRadius:99,backgroundColor:'#B84A4A',marginTop:-48,width:`${interpolate(strike,[0,1],[0,91],clamp)}%`,transform:'rotate(-1.2deg)'}} />
    </div>

    <div style={{position:'absolute',left:86,right:86,top:500,opacity:newIn,transform:`translateY(${interpolate(newIn,[0,1],[60,0],clamp)}px) scale(${interpolate(newIn,[0,1],[.95,1],clamp)})`}}>
      <div style={{fontSize:65,lineHeight:1.06,fontWeight:950,letterSpacing:-2.8,whiteSpace:'pre-line'}}>{script.finalShift.to}</div>
      <div style={{height:10,borderRadius:99,backgroundColor:theme.colors.green,marginTop:28,width:`${interpolate(newIn,[0,1],[0,72],clamp)}%`}} />
    </div>

    <div style={{position:'absolute',left:72,right:72,top:845,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:9,opacity:fade(frame,76,90)}}>{script.finalShift.steps.map((s,i)=><div key={s} style={{minHeight:92,borderRadius:20,backgroundColor:i===4?theme.colors.green:theme.colors.paper,color:i===4?theme.colors.white:theme.colors.navy,border:`1px solid ${i===4?theme.colors.green:theme.colors.line}`,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'10px',fontSize:15,fontWeight:950,lineHeight:1.2}}>{s}</div>)}</div>

    <div dir="rtl" style={{position:'absolute',left:80,right:80,bottom:120,textAlign:'center',fontSize:40,lineHeight:1.55,fontWeight:850,opacity:fade(frame,96,112)}}>{script.finalShift.question}</div>
    <div style={{position:'absolute',left:0,right:0,bottom:52,textAlign:'center',fontSize:16,letterSpacing:2.5,fontWeight:800,color:theme.colors.muted,opacity:fade(frame,108,121)}}>MOHAMADREZA MAHVARI · EMPLOYEE EXPERIENCE</div>
  </AbsoluteFill>;
};
