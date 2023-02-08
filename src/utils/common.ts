export const isArrayEqual = (a: any[], b: any[]) =>
  a.length === b.length &&
  a.every((o, idx) => isObjectEqual(o, b[idx]));

// if empty return false
export const isObjectEqual = (a: any, b: any): boolean =>
  typeof a === 'object' && Object.keys(a).length > 0 ?
    Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(p => isObjectEqual(a[p], b[p])) :
    a === b;

export function downloadbyURL(path: string, filename: string) {
  // Create a new invisible link
  const anchor = document.createElement('a');
  anchor.href = path;
  anchor.download = filename;

  // Append to the DOM
  document.body.appendChild(anchor);

  // Trigger `click` event
  anchor.click();

  // Remove element from DOM
  document.body.removeChild(anchor);
};