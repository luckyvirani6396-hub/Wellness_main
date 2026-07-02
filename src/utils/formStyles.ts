const INPUT_BASE =
  'w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20';

export function getInputClassName(hasError: boolean, extra = '') {
  return `${INPUT_BASE} ${hasError ? 'border-red-400' : 'border-border'} ${extra}`;
}
