import { styled } from 'src/lib/stitches.config';

export const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-16px',
  borderRadius: '50%',
  padding: '8px',
  color: 'var(--odiseo-colors-body)',
  border: '8px solid var(--odiseo-colors-body)',
  background: 'var(--icon-background, var(--odiseo-colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--odiseo-colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--odiseo-colors-danger)',
      },
    },
  },
});

export const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: 'var(--border-radius-1)',
  padding: '8px',
  color: 'var(--odiseo-colors-body)',
  fontSize: 'var(--font-size-1)',
  fontWeight: 'var(--font-weight-3)',
  userSelect: 'none',
  background: 'var(--icon-background, var(--odiseo-colors-body))',

  variants: {
    variant: {
      info: {
        '--icon-background': 'var(--odiseo-colors-brand)',
      },
      danger: {
        '--icon-background': 'var(--odiseo-colors-danger)',
      },
    },
  },
});

export const StyledCallout = styled('aside', {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  borderRadius: 'var(--border-radius-1)',
  color: 'var(--odiseo-colors-typeface-primary)',
  border: '1px solid var(--odiseo-colors-emphasis)',
  background: 'var(--callout-background, var(--odiseo-colors-emphasis))',

  variants: {
    variant: {
      info: {
        '--callout-background': 'var(--odiseo-colors-emphasis)',
      },
      danger: {
        '--callout-background': 'var(--odiseo-colors-danger-emphasis)',
      },
    },
  },
});
