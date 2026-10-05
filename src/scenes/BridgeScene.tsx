import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {script} from '../data/script';
import {clamp, fade, fadeOut} from '../lib/animations';
import {theme} from '../lib/theme';

const slots = [
  {x: 92, y: 342, rotate: -2},
  {x: 564, y: 342, rotate: 2},
  {x: 92, y: 574, rotate: 1.4},
  {x: 564, y: 574, rotate: -1.4},
] as const;

const stackSlots = [
  {x: 188, y: 500, rotate: -5},
  {x: 205, y: 512, rotate: -2},
  {x: 222, y: 524, rotate: 1},
  {x: 239, y: 536, rotate: 4},
] as const;

export const BridgeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const introIn = spring({
    fps,
    frame,
    config: {damping: 17, stiffness: 120, mass: 0.8},
  });
  const collapse = spring({
    fps,
    frame: frame - 52,
    config: {damping: 16, stiffness: 110, mass: 0.85},
  });
  const questionIn = spring({
    fps,
    frame: frame - 67,
    config: {damping: 12, stiffness: 180, mass: 0.62},
  });
  const footerIn = fade(frame, 83, 94);
  const sceneOut = fadeOut(frame, 100, 104);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.cream,
        fontFamily: theme.fontFamily,
        color: theme.colors.navy,
        overflow: 'hidden',
        opacity: sceneOut,
      }}
    >
      <div
        dir="rtl"
        style={{
          position: 'absolute',
          left: 90,
          right: 90,
          top: 100,
          fontSize: 50,
          lineHeight: 1.5,
          fontWeight: 680,
          textAlign: 'right',
          opacity: introIn,
          transform: `translateY(${interpolate(introIn, [0, 1], [50, 0], clamp)}px)`,
        }}
      >
        وقتی همین منطق را وارد
        <br />
        <span dir="ltr" style={{fontSize: 62, fontWeight: 900, color: theme.colors.green}}>
          Employee Experience
        </span>{' '}
        می‌کنیم…
      </div>

      {script.bridge.cards.map((label, index) => {
        const cardIn = spring({
          fps,
          frame: frame - (15 + index * 6),
          config: {damping: 15, stiffness: 150, mass: 0.72},
        });
        const from = slots[index];
        const to = stackSlots[index];
        const x = interpolate(collapse, [0, 1], [from.x, to.x], clamp);
        const y = interpolate(collapse, [0, 1], [from.y, to.y], clamp);
        const rotate = interpolate(collapse, [0, 1], [from.rotate, to.rotate], clamp);
        const scale = interpolate(collapse, [0, 1], [1, 0.82], clamp);

        return (
          <div
            key={label}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 424,
              height: 176,
              borderRadius: 24,
              backgroundColor: index === 0 ? theme.colors.navy : theme.colors.paper,
              border: `1px solid ${index === 0 ? theme.colors.navy : theme.colors.line}`,
              color: index === 0 ? theme.colors.white : theme.colors.navy,
              boxShadow: '0 14px 32px rgba(17,28,47,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 0.5,
              opacity: cardIn,
              transform: `rotate(${rotate}deg) scale(${scale * interpolate(cardIn, [0, 1], [0.9, 1], clamp)})`,
              transformOrigin: 'center',
            }}
          >
            {label}
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: 84,
          right: 84,
          top: 800,
          opacity: questionIn,
          transform: `translateY(${interpolate(questionIn, [0, 1], [54, 0], clamp)}px)`,
        }}
      >
        <div
          style={{
            fontSize: 78,
            lineHeight: 1.05,
            fontWeight: 950,
            letterSpacing: -2.5,
            textAlign: 'center',
            color: theme.colors.navy,
          }}
        >
          ONE EXPERIENCE
          <br />
          FOR EVERYONE?
        </div>
        <div
          style={{
            height: 9,
            width: `${interpolate(questionIn, [0, 1], [0, 88], clamp)}%`,
            margin: '26px auto 0',
            borderRadius: 99,
            backgroundColor: theme.colors.green,
            transform: 'rotate(-0.8deg)',
          }}
        />
      </div>

      <div
        dir="ltr"
        style={{
          position: 'absolute',
          left: 76,
          right: 76,
          bottom: 78,
          fontSize: 23,
          lineHeight: 1.4,
          fontWeight: 650,
          color: theme.colors.muted,
          textAlign: 'center',
          opacity: footerIn,
        }}
      >
        Standardize what must be consistent.
        <br />
        <span style={{color: theme.colors.green, fontWeight: 850}}>
          Personalize what should be relevant.
        </span>
      </div>
    </AbsoluteFill>
  );
};
