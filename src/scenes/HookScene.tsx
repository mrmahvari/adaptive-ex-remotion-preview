import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {script} from '../data/script';
import {clamp, fadeOut, hit} from '../lib/animations';
import {theme} from '../lib/theme';

const WordHit: React.FC<{
  children: React.ReactNode;
  delay: number;
  size: number;
  weight?: number;
  color?: string;
}> = ({children, delay, size, weight = 800, color = theme.colors.navy}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = hit(frame, fps, delay);
  const scale = interpolate(p, [0, 0.72, 1], [0.86, 1.035, 1], clamp);
  const y = interpolate(p, [0, 1], [38, 0], clamp);

  return (
    <div
      style={{
        fontSize: size,
        fontWeight: weight,
        lineHeight: 1.02,
        color,
        opacity: p,
        transform: `translateY(${y}px) scale(${scale})`,
        transformOrigin: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  );
};

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const blackBar = spring({
    fps,
    frame: frame - 42,
    config: {damping: 18, stiffness: 160, mass: 0.7},
  });

  const firstBlockOut = fadeOut(frame, 66, 77);
  const questionIn = spring({
    fps,
    frame: frame - 69,
    config: {damping: 17, stiffness: 120, mass: 0.8},
  });
  const questionY = interpolate(questionIn, [0, 1], [72, 0], clamp);
  const sceneOut = fadeOut(frame, 98, 104);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.cream,
        fontFamily: theme.fontFamily,
        overflow: 'hidden',
        opacity: sceneOut,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 440,
          height: 440,
          borderRadius: 999,
          right: -170,
          top: -130,
          border: `1px solid ${theme.colors.line}`,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: theme.pagePadding,
          top: 70,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 5,
          color: theme.colors.green,
        }}
      >
        EMPLOYEE EXPERIENCE · 01
      </div>

      <div
        dir="rtl"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 8,
          opacity: firstBlockOut,
        }}
      >
        <WordHit delay={0} size={58} weight={600}>
          {script.hook.line1}
        </WordHit>
        <WordHit delay={10} size={102}>
          {script.hook.line2}
        </WordHit>
        <div style={{position: 'relative'}}>
          <WordHit delay={20} size={102} color={theme.colors.black}>
            {script.hook.line3}
          </WordHit>
          <div
            style={{
              position: 'absolute',
              left: '4%',
              right: '4%',
              bottom: -12,
              height: 8,
              backgroundColor: theme.colors.green,
              borderRadius: 20,
              transform: `scaleX(${blackBar}) rotate(-1deg)`,
              transformOrigin: 'right center',
            }}
          />
        </div>
        <WordHit delay={30} size={67} weight={650}>
          {script.hook.line4}
        </WordHit>
      </div>

      <div
        dir="rtl"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 88px 90px',
          opacity: questionIn,
          transform: `translateY(${questionY}px)`,
        }}
      >
        <div
          style={{
            maxWidth: 880,
            textAlign: 'center',
            color: theme.colors.navy,
            fontSize: 69,
            lineHeight: 1.42,
            fontWeight: 760,
          }}
        >
          پس چرا هنوز
          <div
            dir="ltr"
            style={{
              fontSize: 82,
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: -3,
              margin: '18px 0',
              color: theme.colors.green,
            }}
          >
            Employee Experience
          </div>
          را برای همه یکسان طراحی می‌کنیم؟
        </div>
      </div>
    </AbsoluteFill>
  );
};
