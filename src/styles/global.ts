import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    // '&::selection': {
    //   color: '$primary',
    //   background: '$tertiary',
    // },
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 600,
  },

  button: {
    cursor: 'pointer',
  },

  '[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  'input, textarea': {
    resize: 'none',
  },
})
