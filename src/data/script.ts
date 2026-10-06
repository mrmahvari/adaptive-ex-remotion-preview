export const script = {
  hook: {
    line1: 'دوران',
    line2: '«هر رنگی،',
    line3: 'به شرط مشکی»',
    line4: 'تمام شده.',
    question: 'پس چرا هنوز Employee Experience را برای همه یکسان طراحی می‌کنیم؟',
  },
  modelT: {
    kicker: 'THE OLD LOGIC',
    title: 'MODEL T LOGIC',
    formula: 'STANDARDIZE → SCALE',
    stats: ['COMPLEXITY ↓', 'COST ↓', 'SCALE ↑'],
  },
  bridge: {
    intro: 'وقتی همین منطق را وارد Employee Experience می‌کنیم…',
    cards: ['ONE ONBOARDING', 'ONE SURVEY', 'ONE MESSAGE', 'ONE BENEFITS PACKAGE'],
    question: 'ONE EXPERIENCE FOR EVERYONE?',
    footer: 'Standardize what must be consistent. Personalize what should be relevant.',
  },
  whyNow: {
    kicker: 'WHY NOW?',
    headline: 'آدم‌ها تازه متفاوت نشده‌اند؛ توان ما برای پاسخ‌دادن به این تفاوت‌ها تغییر کرده.',
    capabilities: [
      {label: 'DATA', sub: 'Profile · Journey · Feedback'},
      {label: 'ANALYTICS', sub: 'Patterns · Signals · Insights'},
      {label: 'AI', sub: 'Interpret · Generate · Predict'},
      {label: 'AUTOMATION', sub: 'Timing · Orchestration · Scale'},
    ],
    payoff: 'PERSONALIZED EXPERIENCE AT SCALE',
  },
  framework: {
    kicker: 'THE FRAMEWORK',
    steps: [
      {n: '01', label: 'ONE-SIZE', q: 'Everyone?'},
      {n: '02', label: 'SEGMENTS', q: 'Which group?'},
      {n: '03', label: 'PERSON', q: 'What do we know?'},
      {n: '04', label: 'CONTEXT', q: 'What matters now?'},
      {n: '05', label: 'ADAPT', q: 'What changed?'},
    ],
    footer: 'Each step adds a new capability. It does not erase the previous one.',
  },
  oneSize: {
    kicker: '01 · ONE-SIZE-FITS-ALL',
    title: 'Different people. Same journey.',
    people: ['S', 'M', 'A', 'R', 'N'],
    journey: ['WELCOME', 'CHECKLIST', 'TRAINING', 'SURVEY'],
    footer: 'استاندارد و مقیاس‌پذیر است؛ اما تفاوت‌های واقعی افراد را نمی‌بیند.',
  },
  segmentation: {
    kicker: '02 · SEGMENTATION',
    title: 'همه شبیه هم نیستند؛ پس Journey را برای گروه‌های متفاوت طراحی می‌کنیم.',
    groups: [
      {title: 'TECHNICAL NEW HIRE', sub: 'skills · access · team navigation'},
      {title: 'FIRST-TIME MANAGER', sub: 'feedback · performance · confidence'},
      {title: 'FIELD EMPLOYEE', sub: 'mobile access · shifts · support'},
    ],
    people: [
      {name: 'SARA', sub: 'Growth · clarity · autonomy'},
      {name: 'MINA', sub: 'Stability · support · belonging'},
    ],
    payoff: 'PERSONA ≠ PERSON',
  },
  personalization: {
    kicker: '03 · PERSONALIZATION',
    headline: 'حالا Journey، خودِ سارا را هم می‌شناسد.',
    chips: ['ROLE', 'MANAGER', 'SKILLS', 'TRAINING', 'JOURNEY STAGE'],
    tasks: ['Meet your manager', 'Complete Security Training', 'Activate Power BI Access'],
    payoff: 'THE JOURNEY KNOWS THE EMPLOYEE',
  },
  hyper: {
    kicker: '04 · HYPER-PERSONALIZATION',
    headline: 'دیگر فقط نمی‌دانیم سارا کیست؛ می‌خواهیم بفهمیم الان چه چیزی برای او Relevant است.',
    signals: [
      {label: 'PROFILE', value: '8 yrs experience'},
      {label: 'SKILLS', value: 'Advanced proficiency'},
      {label: 'BEHAVIOR', value: 'Prefers short practical content'},
      {label: 'FEEDBACK', value: '“Who should I go to?”'},
      {label: 'CONTEXT', value: 'Access issue resolved'},
    ],
    actions: ['SKIP Intro Training', 'RECOMMEND Stakeholder Map', 'CONNECT Relevant Buddy', 'PRIORITIZE Team Navigation'],
    payoff: 'NEXT BEST EXPERIENCE',
  },
  adaptive: {
    kicker: '05 · ADAPTIVE EX',
    headline: 'Hyper-personalization asks what fits now. Adaptive EX asks again and again.',
    timeline: [
      {day: 'DAY 1', signal: 'Access issue detected', action: 'Guidance prioritized'},
      {day: 'DAY 10', signal: 'Issue resolved', action: 'Guidance removed'},
      {day: 'DAY 15', signal: 'New feedback', action: 'Stakeholder confusion'},
      {day: 'DAY 30', signal: 'New signals', action: 'Experience adapts again'},
    ],
    payoff: 'IT CHANGES WITH YOU.',
  },
  beyond: {
    kicker: 'BEYOND ONBOARDING',
    title: 'این فقط درباره Onboarding نیست.',
    areas: [
      {name: 'LISTENING', from: 'Static questionnaire', to: 'Dynamic follow-up'},
      {name: 'LEARNING', from: 'Role-based path', to: 'Skills × Gaps × Goals'},
      {name: 'COMMUNICATION', from: 'Mass message', to: 'Person × Moment × Channel'},
      {name: 'BENEFITS', from: 'Fixed package', to: 'Relevant choices'},
    ],
  },
  governance: {
    kicker: 'THE OTHER SIDE',
    headline: 'MORE DATA ≠ BETTER EXPERIENCE',
    principles: ['PRIVACY', 'FAIRNESS', 'TRANSPARENCY', 'CHOICE'],
    footer: 'هرچه Experience شخصی‌تر می‌شود، Governance باید شفاف‌تر شود.',
  },
  finalShift: {
    kicker: 'THE SHIFT',
    from: 'DESIGNING ONE GOOD JOURNEY\nFOR EMPLOYEES',
    to: 'DESIGNING SYSTEMS THAT CAN\nADAPT THE JOURNEY TO EMPLOYEES',
    steps: ['ONE-SIZE', 'SEGMENTATION', 'PERSONALIZATION', 'HYPER', 'ADAPTIVE EX'],
    question: 'سازمان شما امروز کجای این مسیر قرار دارد؟',
  },
} as const;

export const modelTAsset = {
  remoteUrl:
    'https://upload.wikimedia.org/wikipedia/commons/7/7f/Ford_Model_T_fra_1908.jpg',
  sourcePage:
    'https://commons.wikimedia.org/wiki/File:Ford_Model_T_fra_1908.jpg',
  label: 'Ford Model T, 1908 · Public domain',
} as const;
