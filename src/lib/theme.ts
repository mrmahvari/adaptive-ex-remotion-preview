import {loadFont} from '@remotion/google-fonts/Vazirmatn';

const vazirmatn = loadFont();

export const theme = {
  colors: {
    cream: '#F4EFE6',
    paper: '#FBF8F2',
    navy: '#111C2F',
    navy2: '#1C2A42',
    green: '#0F766E',
    greenSoft: '#CFE3DE',
    ink: '#12151A',
    muted: '#68727F',
    line: 'rgba(17, 28, 47, 0.14)',
    white: '#FFFFFF',
    black: '#090A0C',
  },
  fontFamily: vazirmatn.fontFamily,
  radius: 30,
  pagePadding: 78,
} as const;

export const FONT = theme.fontFamily;
