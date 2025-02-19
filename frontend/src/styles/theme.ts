export const theme = {
  colors: {
    primary: {
      frost: '#E3F4F4',
      ice: '#D2E9E9',
      crystal: '#C4DFDF',
      azure: '#93B5C6',
    },
    secondary: {
      deepBlue: '#2B4865',
      nightBlue: '#256D85',
      frostBlue: '#8FE3CF',
    },
    gradient: {
      frost: 'linear-gradient(135deg, #E3F4F4 0%, #C4DFDF 100%)',
      glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)',
    }
  },
  effects: {
    frostedGlass: `
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    `
  }
}
