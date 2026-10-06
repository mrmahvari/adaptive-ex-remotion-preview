import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const OneSizeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const sceneOut = fadeOut(frame, 99, 104);

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.cream, color: theme.colors.navy, fontFamily: theme.fontFamily, overflow: 'hidden', opacity: sceneOut}}>
      <div style={{position:'absolute',left:78,top:68,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.oneSize.kicker}</div>
      <div style={{position:'absolute',left:78,right:78,top:125,fontSize:64,fontWeight:950,letterSpacing:-2}}>{script.oneSize.title}</div>

      <div style={{position:'absolute',left:105,right:105,top:330,display:'flex',justifyContent:'space-between'}}>
        {script.oneSize.people.map((p,i)=>{
          const appear=spring({fps,frame:frame-(8+i*5),config:{damping:13,stiffness:165,mass:0.65}});
          const merge=spring({fps,frame:frame-38,config:{damping:16,stiffness:120,mass:0.8}});
          const targetX=540-105-((1080-210)/4)*i;
          return <div key={p} style={{width:102,height:102,borderRadius:99,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:i===0?theme.colors.green:theme.colors.paper,border:`2px solid ${i===0?theme.colors.green:theme.colors.line}`,fontSize:38,fontWeight:950,opacity:appear,transform:`translateX(${interpolate(merge,[0,1],[0,targetX],clamp)}px) translateY(${interpolate(merge,[0,1],[0,140],clamp)}px) scale(${interpolate(merge,[0,1],[1,0.72],clamp)})`}}>{p}</div>;
        })}
      </div>

      <div style={{position:'absolute',left:160,right:160,top:600}}>
        {script.oneSize.journey.map((j,i)=>{
          const p=spring({fps,frame:frame-(46+i*8),config:{damping:14,stiffness:155,mass:0.7}});
          return <div key={j} style={{height:105,marginBottom:13,borderRadius:24,backgroundColor:i===0?theme.colors.navy:theme.colors.paper,border:`1px solid ${i===0?theme.colors.navy:theme.colors.line}`,color:i===0?theme.colors.white:theme.colors.navy,display:'flex',alignItems:'center',padding:'0 34px',fontSize:30,fontWeight:900,letterSpacing:1.3,opacity:p,transform:`translateY(${interpolate(p,[0,1],[55,0],clamp)}px)`}}><span style={{opacity:.45,marginRight:20,fontSize:18}}>0{i+1}</span>{j}</div>;
        })}
      </div>

      <div dir="rtl" style={{position:'absolute',left:95,right:95,bottom:70,fontSize:27,lineHeight:1.6,fontWeight:650,textAlign:'center',color:theme.colors.muted}}>{script.oneSize.footer}</div>
    </AbsoluteFill>
  );
};
