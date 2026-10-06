import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const BeyondScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const sceneOut=fadeOut(frame,99,104);
  return <AbsoluteFill style={{backgroundColor:theme.colors.paper,color:theme.colors.navy,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:66,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.beyond.kicker}</div>
    <div dir="rtl" style={{position:'absolute',left:78,right:78,top:120,fontSize:52,fontWeight:850,textAlign:'right'}}>{script.beyond.title}</div>

    <div style={{position:'absolute',left:70,right:70,top:285,display:'flex',flexDirection:'column',gap:17}}>
      {script.beyond.areas.map((a,i)=>{const p=spring({fps,frame:frame-(8+i*12),config:{damping:14,stiffness:150,mass:.72}});const shift=spring({fps,frame:frame-(28+i*12),config:{damping:16,stiffness:120,mass:.78}});return <div key={a.name} style={{height:190,borderRadius:30,backgroundColor:i===2?theme.colors.navy:theme.colors.cream,color:i===2?theme.colors.white:theme.colors.navy,border:`1px solid ${i===2?theme.colors.navy:theme.colors.line}`,padding:'25px 30px',opacity:p,transform:`translateX(${interpolate(p,[0,1],[i%2===0?-70:70,0],clamp)}px)`}}><div style={{fontSize:22,fontWeight:950,letterSpacing:2,color:i===2?'#9DD0C8':theme.colors.green}}>{a.name}</div><div style={{marginTop:19,display:'grid',gridTemplateColumns:'1fr 65px 1fr',alignItems:'center',gap:10}}><div><div style={{fontSize:14,opacity:.5,fontWeight:850,letterSpacing:2}}>FROM</div><div style={{fontSize:24,fontWeight:800,marginTop:5,opacity:interpolate(shift,[0,1],[1,.42],clamp)}}>{a.from}</div></div><div style={{fontSize:35,textAlign:'center',color:i===2?'#9DD0C8':theme.colors.green,transform:`translateX(${interpolate(shift,[0,1],[-12,12],clamp)}px)`}}>→</div><div><div style={{fontSize:14,opacity:.55,fontWeight:850,letterSpacing:2}}>TO</div><div style={{fontSize:25,fontWeight:950,marginTop:5,transform:`scale(${interpolate(shift,[0,1],[.95,1],clamp)})`,transformOrigin:'left center'}}>{a.to}</div></div></div></div>})}
    </div>
  </AbsoluteFill>;
};
