import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const FrameworkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const line = spring({fps, frame: frame - 10, config: {damping: 20, stiffness: 90, mass: 0.9}});
  const sceneOut = fadeOut(frame, 99, 104);

  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.navy, color: theme.colors.white, fontFamily: theme.fontFamily, overflow: 'hidden', opacity: sceneOut}}>
      <div style={{position: 'absolute', left: 78, top: 70, fontSize: 19, fontWeight: 900, letterSpacing: 5, color: '#9DD0C8'}}>{script.framework.kicker}</div>
      <div dir="rtl" style={{position: 'absolute', left: 78, right: 78, top: 132, textAlign: 'right', fontSize: 55, lineHeight: 1.35, fontWeight: 820}}>Employee Experience از کجا به کجا می‌رود؟</div>

      <div style={{position: 'absolute', left: 105, right: 105, top: 500, height: 8, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 99}}>
        <div style={{height: '100%', width: `${interpolate(line,[0,1],[0,100],clamp)}%`, backgroundColor: theme.colors.green, borderRadius: 99}} />
      </div>

      <div style={{position: 'absolute', left: 65, right: 65, top: 420, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10}}>
        {script.framework.steps.map((step, i) => {
          const p = spring({fps, frame: frame - (18 + i * 10), config: {damping: 15, stiffness: 155, mass: 0.7}});
          return (
            <div key={step.label} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: p, transform: `translateY(${interpolate(p,[0,1],[45,0],clamp)}px)`}}>
              <div style={{fontSize: 17, letterSpacing: 2.5, opacity: 0.55, fontWeight: 800}}>{step.n}</div>
              <div style={{marginTop: 18, width: 78, height: 78, borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: i === 4 ? theme.colors.green : theme.colors.navy2, border: `2px solid ${i === 4 ? theme.colors.green : 'rgba(255,255,255,0.22)'}`, boxShadow: i === 4 ? '0 0 0 14px rgba(15,118,110,0.18)' : undefined}}>
                <div style={{width: 14, height: 14, borderRadius: 99, backgroundColor: i === 4 ? theme.colors.white : '#A9B5C6'}} />
              </div>
              <div style={{marginTop: 28, fontSize: 25, fontWeight: 950, textAlign: 'center'}}>{step.label}</div>
              <div style={{marginTop: 9, fontSize: 17, opacity: 0.56, textAlign: 'center'}}>{step.q}</div>
            </div>
          );
        })}
      </div>

      <div style={{position: 'absolute', left: 92, right: 92, bottom: 115, borderTop: '1px solid rgba(255,255,255,0.16)', paddingTop: 26, fontSize: 25, lineHeight: 1.5, opacity: fade(frame, 68, 82), color: '#D9E2E8', textAlign: 'center'}}>{script.framework.footer}</div>
    </AbsoluteFill>
  );
};
