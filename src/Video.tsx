import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {BridgeScene} from './scenes/BridgeScene';
import {HookScene} from './scenes/HookScene';
import {ModelTScene} from './scenes/ModelTScene';
import {VIDEO} from './lib/timings';
import {theme} from './lib/theme';

export const AdaptiveEXPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.cream}}>
      <Sequence from={0} durationInFrames={VIDEO.hook}>
        <HookScene />
      </Sequence>

      <Sequence from={VIDEO.hook} durationInFrames={VIDEO.modelT}>
        <ModelTScene />
      </Sequence>

      <Sequence from={VIDEO.hook + VIDEO.modelT} durationInFrames={VIDEO.bridge}>
        <BridgeScene />
      </Sequence>
    </AbsoluteFill>
  );
};
