import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: '#212541',
      secondary: '#fff',
      tertiary: 'red',
    },

    fontSizes: {
      default: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      mobileH1: '1.75rem',
      '2xl': '2rem',
    },
  },
})
