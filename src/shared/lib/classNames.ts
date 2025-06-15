export const classNames = (classes: any[]) => {
  return classes.filter(f => typeof f === 'string').join(' ')
}