export const getFromLocalStorage = (key: string) => {
  if (typeof window === 'undefined' || !key) return null;
  const item = localStorage.getItem(key);
  return item;
};
