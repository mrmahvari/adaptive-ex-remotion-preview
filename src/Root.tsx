import React from 'react';
import {Composition} from 'remotion';
import {AdaptiveEXPreview} from './Video';
import {VIDEO} from './lib/timings';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AdaptiveEXPreview"
      component={AdaptiveEXPreview}
      durationInFrames={VIDEO.previewDuration}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  );
};
