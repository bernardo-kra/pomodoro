export function createGradientStyle(colors: string[]) {
  if (!colors?.length) return {};
  
  const gradient = colors.length > 1
    ? `linear-gradient(135deg, ${colors.join(', ')})`
    : colors[0];
  
  return {
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };
}

export function combineClassNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
} 