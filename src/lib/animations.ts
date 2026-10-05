import {interpolate, spring} from 'remotion';

export const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

export const fade = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [0, 1], clamp);

export const fadeOut = (frame: number, from: number, to: number) =>
  interpolate(frame, [from, to], [1, 0], clamp);

export const slideUp = (
  frame: number,
  fps: number,
  delay: number,
  distance = 54,
) => {
  const p = spring({
    fps,
    frame: frame - delay,
    config: {damping: 16, stiffness: 135, mass: 0.8},
  });
  return {
    opacity: interpolate(p, [0, 1], [0, 1], clamp),
    transform: `translateY(${interpolate(p, [0, 1], [distance, 0], clamp)}px)`,
  };
};

export const hit = (frame: number, fps: number, delay: number) =>
  spring({
    fps,
    frame: frame - delay,
    config: {damping: 11, stiffness: 180, mass: 0.55},
  });
