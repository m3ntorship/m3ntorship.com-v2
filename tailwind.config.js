const {
  oneLayerWithPixelAdding,
  themeFontFamily,
  oneLayerWithNoPixel,
  themeShadowBox,
  themeLetterSpacing,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./utils/tailwind/tailwindHelpers.js');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Primary Colors
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      'primary-contrast': 'rgba(var(--color-primary-contrast), 1)',
      'primary-hover': 'rgba(var(--color-primary-hover), 1)',
      'primary-ghost-hover': 'rgba(var(--color-primary), 0.13)',
      'primary-border': 'rgba(var(--color-primary), 0.7)',
      // Secondary Colors
      secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      'secondary-contrast': 'rgba(var(--color-secondary-contrast), 1)',
      'secondary-hover': 'rgba(var(--color-secondary-hover), 1)',
      'secondary-ghost-hover': 'rgba(var(--color-secondary), 0.13)',
      'secondary-border': 'rgba(var(--color-secondary), 0.7)',
      // Text Colors
      'primary-text': 'rgba(var(--color-text), 1)',
      'secondary-text': 'rgba(var(--color-text), 0.6)',
      'disabled-text': 'rgba(var(--color-text), 0.3)',
      // Background Colors
      background: 'rgba(var(--color-background), <alpha-value>)',
      'background-surface': 'rgba(var(--color-background-surface), 1)',
      // Neutral Colors
      neutral: 'rgba(var(--color-neutral), <alpha-value>)',
      'neutral-light': 'rgba(var(--color-neutral), 0.6)',
      'neutral-lighter': 'rgba(var(--color-neutral), 0.3)',
      'neutral-fade': 'rgba(var(--color-neutral), 0.1)',
      // Error Colors
      error: 'rgba(var(--color-error), <alpha-value>)',
      'error-contrast': 'rgba(var(--color-error-contrast), 1)',
      'error-hover': 'rgba(var(--color-error-hover), 1)',
      'error-ghost-hover': 'rgba(var(--color-error), 0.13)',
      'error-border': 'rgba(var(--color-error), 0.7)',
      'error-content': 'rgba(var(--color-error-content), 1)',
      'error-background': 'rgba(var(--color-error), 0.1)',
      // Info Colors
      info: 'rgba(var(--color-info), <alpha-value>)',
      'info-contrast': 'rgba(var(--color-info-contrast), 1)',
      'info-hover': 'rgba(var(--color-info-hover), 1)',
      'info-ghost-hover': 'rgba(var(--color-info), 0.13)',
      'info-border': 'rgba(var(--color-info), 0.7)',
      'info-content': 'rgba(var(--color-info-content), 1)',
      'info-background': 'rgba(var(--color-info), 0.1)',
      // Warning Colors
      warning: 'rgba(var(--color-warning), <alpha-value>)',
      'warning-contrast': 'rgba(var(--color-warning-contrast), 1)',
      'warning-hover': 'rgba(var(--color-warning-hover), 1)',
      'warning-ghost-hover': 'rgba(var(--color-warning), 0.13)',
      'warning-border': 'rgba(var(--color-warning), 0.7)',
      'warning-content': 'rgba(var(--color-warning-content), 1)',
      'warning-background': 'rgba(var(--color-warning), 0.1)',
      // Success Colors
      success: 'rgba(var(--color-success), <alpha-value>)',
      'success-contrast': 'rgba(var(--color-success-contrast), 1)',
      'success-hover': 'rgba(var(--color-success-hover), 1)',
      'success-ghost-hover': 'rgba(var(--color-success), 0.13)',
      'success-border': 'rgba(var(--color-success), 0.7)',
      'success-content': 'rgba(var(--color-success-content), 1)',
      'success-background': 'rgba(var(--color-success), 0.1)',
      // Action Colors
      action: 'rgba(var(--color-action), <alpha-value>)',
      'action-disabled': 'rgba(var(--color-action), 0.5)',
      'action-background-selected': 'rgba(var(--color-action), 0.3)',
      'action-background-disabled': 'rgba(var(--color-action), 0.15)',
      'action-background-hover': 'rgba(var(--color-action), 0.1)',
      // Misc Colors
      'misc-snackbar-bg': 'rgba(var(--color-misc), 0.8)',
      'misc-overlay': 'rgba(var(--color-misc), 0.6)',
      'misc-standard-border': 'rgba(var(--color-misc), 0.3)',
      'misc-divider': 'rgba(var(--color-misc), 0.1)',
      'misc-rating': 'rgba(var(--color-misc-rating), <alpha-value>)',
      // White Colors
      white: 'rgb(255, 255, 255)',
      'white-800': 'rgb(255, 255, 255, .88)',
      black: 'rgb(0, 0, 0)',
      transparent: 'transparent',
    },
    fontSize: oneLayerWithPixelAdding('fontSize'),
    lineHeight: oneLayerWithPixelAdding('lineHeight'),
    fontFamily: themeFontFamily(),
    fontWeight: oneLayerWithNoPixel('fontWeight'),
    borderRadius: oneLayerWithPixelAdding('brd-radius'),
    opacity: oneLayerWithNoPixel('opacity'),
    borderWidth: oneLayerWithPixelAdding('brd-width'),
    ringWidth: oneLayerWithPixelAdding('ring-width'),
    boxShadow: themeShadowBox(),
    letterSpacing: themeLetterSpacing(),
    screens: {
      small: '0px', // => @media (min-width: 0px)
      medium: '600px', // => @media (min-width: 600px)
      large: '900px', // => @media (min-width: 900px)
      xLarge: '1331px', // => @media (min-width: 1331px)
    },
    extend: {
      spacing: {
        ...oneLayerWithPixelAdding('spacing'),
        0: '0rem', // 0px
        2.5: '0.625rem', // 10px
        6.25: '1.5625rem', // 25px
        7: '1.75rem', // 28px
        12: '3rem', // 48px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        22: '5.5rem', // 88px
        26: '6.5rem', // 104px
        26.5: '6.625rem', // 106px
        27.5: '6.875rem', // 110px
        38: '9.5rem', // 152px
        40.25: '10.0625rem', // 161px
        49.5: '12.375rem', // 198px
        50: '12.5rem', // 200px
        56: '14rem', // 224px
        64: '16rem', // 256px
        85.5: '21.375rem', // 342px
        104.5: '26.125rem', // 418px
        106: '26.5rem', // 424px
      },
      height: {
        73: '18.25rem', // 292px
        87.5: '21.875rem', // 350px
      },
      width: {
        73.5: '18.375rem', // 294px
      },
      maxWidth: {
        '17ch': '17ch',
        50: '12.5rem', // 200px
        70: '17.5rem', // 280px
        104.5: '26.125rem', // 418px
        106: '26.5rem', // 424px
        148: '37rem', // 592px
        204: '51rem', // 816px
        360: '90rem', // 1440px
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require('@tailwindcss/forms')],
};
