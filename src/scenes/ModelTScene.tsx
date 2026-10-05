import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {modelTAsset, script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

export const ModelTScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const photoIn = spring({
    fps,
    frame,
    config: {damping: 20, stiffness: 90, mass: 0.9},
  });
  const photoScale = interpolate(frame, [0, 104], [1.06, 1.15], clamp);
  const titleIn = spring({
    fps,
    frame: frame - 14,
    config: {damping: 14, stiffness: 155, mass: 0.7},
  });
  const formulaIn = spring({
    fps,
    frame: frame - 37,
    config: {damping: 13, stiffness: 180, mass: 0.62},
  });
  const statsOpacity = fade(frame, 54, 66);
  const sceneOut = fadeOut(frame, 98, 104);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.navy,
        fontFamily: theme.fontFamily,
        color: theme.colors.white,
        overflow: 'hidden',
        opacity: sceneOut,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 66,
          right: 66,
          top: 140,
          height: 575,
          overflow: 'hidden',
          borderRadius: 32,
          border: '2px solid rgba(244,239,230,0.28)',
          opacity: interpolate(photoIn, [0, 1], [0, 1], clamp),
          transform: `scale(${interpolate(photoIn, [0, 1], [0.94, 1], clamp)})`,
          boxShadow: '0 32px 80px rgba(0,0,0,0.34)',
        }}
      >
        <Img
          src={modelTAsset.remoteUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 48%',
            transform: `scale(${photoScale})`,
            filter: 'grayscale(1) contrast(1.16) brightness(0.84)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(17,28,47,0.02), rgba(17,28,47,0.28))',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 74,
          left: theme.pagePadding,
          right: theme.pagePadding,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{fontSize: 18, letterSpacing: 5, fontWeight: 800, color: '#D9E5E2'}}>
          {script.modelT.kicker}
        </div>
        <div style={{fontSize: 16, opacity: 0.58}}>{modelTAsset.label}</div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 74,
          right: 74,
          bottom: 128,
        }}
      >
        <div
          style={{
            fontSize: 134,
            lineHeight: 0.92,
            fontWeight: 900,
            letterSpacing: -6,
            transform: `translateY(${interpolate(titleIn, [0, 1], [72, 0], clamp)}px) scale(${interpolate(
              titleIn,
              [0, 1],
              [0.92, 1],
              clamp,
            )})`,
            opacity: titleIn,
          }}
        >
          MODEL T
          <br />
          LOGIC
        </div>

        <div
          style={{
            marginTop: 34,
            width: 'fit-content',
            backgroundColor: theme.colors.green,
            color: theme.colors.white,
            padding: '15px 22px 12px',
            borderRadius: 15,
            fontSize: 35,
            fontWeight: 900,
            letterSpacing: 1,
            opacity: formulaIn,
            transform: `translateX(${interpolate(formulaIn, [0, 1], [-80, 0], clamp)}px)`,
          }}
        >
          {script.modelT.formula}
        </div>

        <div
          style={{
            marginTop: 28,
            display: 'flex',
            gap: 12,
            opacity: statsOpacity,
          }}
        >
          {script.modelT.stats.map((stat, index) => (
            <div
              key={stat}
              style={{
                flex: 1,
                borderTop: `1px solid rgba(255,255,255,${0.22 + index * 0.04})`,
                paddingTop: 14,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: '#E7ECEB',
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>

      <svg
        width="450"
        height="150"
        viewBox="0 0 450 150"
        style={{position: 'absolute', right: 58, top: 178, opacity: fade(frame, 68, 80)}}
      >
        <path
          d="M16 115 C 110 20, 290 14, 430 72"
          fill="none"
          stroke="#F4EFE6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="520"
          strokeDashoffset={interpolate(frame, [68, 92], [520, 0], clamp)}
        />
      </svg>
    </AbsoluteFill>
  );
};
