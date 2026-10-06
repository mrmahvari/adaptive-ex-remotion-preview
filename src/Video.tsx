import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {AdaptiveScene} from './scenes/AdaptiveScene';
import {BeyondScene} from './scenes/BeyondScene';
import {BridgeScene} from './scenes/BridgeScene';
import {FinalShiftScene} from './scenes/FinalShiftScene';
import {FrameworkScene} from './scenes/FrameworkScene';
import {GovernanceScene} from './scenes/GovernanceScene';
import {HookScene} from './scenes/HookScene';
import {HyperScene} from './scenes/HyperScene';
import {ModelTScene} from './scenes/ModelTScene';
import {OneSizeScene} from './scenes/OneSizeScene';
import {PersonalizationScene} from './scenes/PersonalizationScene';
import {SegmentationScene} from './scenes/SegmentationScene';
import {WhyNowScene} from './scenes/WhyNowScene';
import {START, VIDEO} from './lib/timings';
import {theme} from './lib/theme';

export const AdaptiveEXPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: theme.colors.cream}}>
      <Sequence from={START.hook} durationInFrames={VIDEO.hook}><HookScene /></Sequence>
      <Sequence from={START.modelT} durationInFrames={VIDEO.modelT}><ModelTScene /></Sequence>
      <Sequence from={START.bridge} durationInFrames={VIDEO.bridge}><BridgeScene /></Sequence>
      <Sequence from={START.whyNow} durationInFrames={VIDEO.whyNow}><WhyNowScene /></Sequence>
      <Sequence from={START.framework} durationInFrames={VIDEO.framework}><FrameworkScene /></Sequence>
      <Sequence from={START.oneSize} durationInFrames={VIDEO.oneSize}><OneSizeScene /></Sequence>
      <Sequence from={START.segmentation} durationInFrames={VIDEO.segmentation}><SegmentationScene /></Sequence>
      <Sequence from={START.personalization} durationInFrames={VIDEO.personalization}><PersonalizationScene /></Sequence>
      <Sequence from={START.hyper} durationInFrames={VIDEO.hyper}><HyperScene /></Sequence>
      <Sequence from={START.adaptive} durationInFrames={VIDEO.adaptive}><AdaptiveScene /></Sequence>
      <Sequence from={START.beyond} durationInFrames={VIDEO.beyond}><BeyondScene /></Sequence>
      <Sequence from={START.governance} durationInFrames={VIDEO.governance}><GovernanceScene /></Sequence>
      <Sequence from={START.finalShift} durationInFrames={VIDEO.finalShift}><FinalShiftScene /></Sequence>
    </AbsoluteFill>
  );
};
