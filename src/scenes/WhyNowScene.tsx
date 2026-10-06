import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const WhyNowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const sceneOut = fadeOut(frame, 84, 89);
  const payoff = spring({fps, frame: frame - 61, config: {damping: 14, stiffness: 155, mass: 0.7}});

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.cream, fontFamily: theme.fontFamily, color: theme.colors.navy, overflow: 'hidden', opacity: sceneOut}}>
      <div style={{position: 'absolute', left: 78, top: 70, fontSize: 19, fontWeight: 900, letterSpacing: 5, color: theme.colors.green}}>{script.whyNow.kicker}</div>
      <div dir="rtl" style={{position: 'absolute', left: 76, right: 76, top: 125, fontSize: 46, lineHeight: 1.45, fontWeight: 760, textAlign: 'right'}}>
        {script.whyNow.headline}
      </div>

      <div style={{position: 'absolute', left: 70, right: 70, top: 420, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
        {script.whyNow.capabilities.map((item, i) => {
          const p = spring({fps, frame: frame - (12 + i * 9), config: {damping: 14, stiffness: 150, mass: 0.72}});
          const x = interpolate(p, [0, 1], [i % 2 === 0 ? -90 : 90, 0], clamp);
          return (
            <div key={item.label} style={{height: 185, borderRadius: 28, padding: '28px 30px', backgroundColor: i === 2 ? theme.colors.green : theme.colors.paper, color: i === 2 ? theme.colors.white : theme.colors.navy, border: `1px solid ${i === 2 ? theme.colors.green : theme.colors.line}`, boxShadow: '0 18px 46px rgba(17,28,47,0.08)', opacity: p, transform: `translateX(${x}px) scale(${interpolate(p,[0,1],[0.94,1],clamp)})`}}>
              <div style={{fontSize: 43, fontWeight: 950, letterSpacing: -1}}>{item.label}</div>
              <div style={{marginTop: 18, fontSize: 22, opacity: 0.72, fontWeight: 650}}>{item.sub}</div>
            </div>
          );
        })}
      </div>

      <div style={{position: 'absolute', left: 70, right: 70, bottom: 88, display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '18px 27px 15px', borderRadius: 18, backgroundColor: theme.colors.navy, color: theme.colors.white, fontSize: 29, fontWeight: 950, letterSpacing: 1.2, opacity: payoff, transform: `translateY(${interpolate(payoff,[0,1],[35,0],clamp)}px) scale(${interpolate(payoff,[0,1],[0.92,1],clamp)})`}}>
          {script.whyNow.payoff}
        </div>
      </div>
    </AbsoluteFill>
  );
};
