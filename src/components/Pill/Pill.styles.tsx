import { styled } from 'src/lib/stitches.config';

export const StyledPill = styled('span', {
  display: 'inline-flex !important',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5px 8px !important',
  minWidth: '40px',
  height: '28px',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-3)',
  cursor: 'default',
  userSelect: 'none',
  borderRadius: 'var(--border-radius-1)',

  background: 'var(--pill-background)',
  color: 'var(--pill-color)',

  variants: {
    dark: {
      true: {},
    },
    variant: {
      info: {
        '--pill-background': 'var(--odiseo-colors-emphasis)',
        '--pill-color': 'var(--odiseo-colors-brand)',
      },
      success: {
        '--pill-background': 'var(--odiseo-colors-success-emphasis)',
        '--pill-color': 'hsl(var(--palette-green-80))',
      },
      warning: {
        '--pill-background': 'var(--odiseo-colors-warning-emphasis)',
        '--pill-color': 'hsl(var(--palette-orange-80))',
      },
      danger: {
        '--pill-background': 'var(--odiseo-colors-danger-emphasis)',
        '--pill-color': 'var(--odiseo-colors-danger)',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'success',
      dark: true,
      css: {
        '--pill-color': 'hsla(var(--palette-green-45))',
      },
    },
    {
      variant: 'warning',
      dark: true,
      css: {
        '--pill-color': 'hsla(var(--palette-orange-45))',
      },
    },
  ],
});
