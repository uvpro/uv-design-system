export function adjustSlider(
  value: number,
  min: number,
  max: number,
  disabled?: boolean
) {
  // Calculate visible width
  const val = ((value - min) * 100) / (max - min);

  const fillLeft = 'var(--odiseo-form-input-active)';
  const fillLeftDisabled = 'var(--odiseo-form-input-border)';
  const fillRight = 'var(--odiseo-form-input-disabled)';

  return `linear-gradient(to right, ${
    disabled ? fillLeftDisabled : fillLeft
  } ${val}%, ${fillRight} ${val}%)`;
}
