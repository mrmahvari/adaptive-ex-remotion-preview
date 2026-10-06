import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const AdaptiveScene: React.FC=()=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig();
  const active=Math.min(3,Math.max(0,Math.floor((frame-18)/25)));
  const sceneOut=fadeOut(frame,129,134);
  const rebuild=spring({fps,frame:frame-(18+active*25),config:{damping:15,stiffness:145,mass:.72}});
  return <AbsoluteFill style={{backgroundColor:theme.colors.cream,color:theme.colors.navy,fontFamily:theme.fontFamily,overflow:'hidden',opacity:sceneOut}}>
    <div style={{position:'absolute',left:78,top:66,fontSize:18,fontWeight:900,letterSpacing:4,color:theme.colors.green}}>{script.adaptive.kicker}</div>
    <div style={{position:'absolute',left:78,right:78,top:118,fontSize:39,lineHeight:1.28,fontWeight:800,letterSpacing:-.7}}>{script.adaptive.headline}</div>

    <div style={{position:'absolute',left:76,top:330,width:350,bottom:150}}>
      <div style={{position:'absolute',left:42,top:34,bottom:55,width:6,borderRadius:99,backgroundColor:'#D6D9D8'}}><div style={{width:'100%',height:`${interpolate(frame,[18,105],[0,100],clamp)}%`,backgroundColor:theme.colors.green,borderRadius:99}} /></div>
      {script.adaptive.timeline.map((t,i)=>{const p=spring({fps,frame:frame-(16+i*25),config:{damping:14,stiffness:155,mass:.7}});const on=i<=active;return <div key={t.day} style={{position:'relative',height:195,display:'flex',alignItems:'flex-start',paddingLeft:95,opacity:p}}><div style={{position:'absolute',left:20,top:4,width:50,height:50,borderRadius:99,backgroundColor:on?theme.colors.green:theme.colors.paper,border:`3px solid ${on?theme.colors.green:'#B7BDC2'}`,boxShadow:on?'0 0 0 9px rgba(15,118,110,.14)':undefined}} /><div><div style={{fontSize:20,fontWeight:950,color:on?theme.colors.green:theme.colors.muted}}>{t.day}</div><div style={{fontSize:25,fontWeight:900,marginTop:10}}>{t.signal}</div><div style={{fontSize:18,color:theme.colors.muted,marginTop:8}}>{t.action}</div></div></div>})}
    </div>

    <div style={{position:'absolute',left:470,right:72,top:360,height:650,borderRadius:36,backgroundColor:theme.colors.white,border:`1px solid ${theme.colors.line}`,boxShadow:'0 28px 70px rgba(17,28,47,.1)',padding:'34px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontSize:16,color:theme.colors.muted,fontWeight:800,letterSpacing:2}}>SARA · EXPERIENCE</div><div style={{fontSize:34,fontWeight:950,marginTop:8}}>What matters now?</div></div><div style={{padding:'9px 13px',borderRadius:13,backgroundColor:'#EEF6F4',color:theme.colors.green,fontSize:15,fontWeight:900}}>LIVE</div></div>
      <div style={{marginTop:38,display:'flex',flexDirection:'column',gap:16}}>
        {[
          ['Stakeholder Map', active>=2?1:3],
          ['Buddy Check-in', active>=2?2:2],
          ['Basic Training', active>=1?4:1],
          ['Access Guidance', active===0?0:4],
        ].sort((a,b)=>Number(a[1])-Number(b[1])).map(([label,rank],i)=><div key={String(label)} style={{height:100,borderRadius:24,backgroundColor:i===0?'#EAF5F2':theme.colors.cream,border:`1px solid ${i===0?'#B9DED5':theme.colors.line}`,display:'flex',alignItems:'center',padding:'0 22px',gap:18,transform:`translateY(${interpolate(rebuild,[0,1],[24,0],clamp)}px)`,opacity:rebuild}}><div style={{width:48,height:48,borderRadius:15,backgroundColor:i===0?theme.colors.green:theme.colors.navy,color:theme.colors.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:19,fontWeight:950}}>{i+1}</div><div style={{fontSize:24,fontWeight:900}}>{label}</div></div>)}
      </div>
      <div style={{marginTop:26,fontSize:16,color:theme.colors.muted,fontWeight:650}}>New signals continuously reshape what is prioritized.</div>
    </div>

    <div style={{position:'absolute',left:0,right:0,bottom:62,textAlign:'center',fontSize:55,fontWeight:950,letterSpacing:-1.5,color:theme.colors.green,opacity:fade(frame,106,121)}}>{script.adaptive.payoff}</div>
  </AbsoluteFill>;
};
