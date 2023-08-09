const storageStore = window.localStorage;

export const getStorage = key => {
  try {
    return JSON.parse(storageStore.getItem(key));
  } catch (e) {
    return null;
  }
};

export const setStorage = (key, value) => storageStore.setItem(key, JSON.stringify(value));

export const removeStorage = key => storageStore.removeItem(key);

export const clearAll = () => storageStore.clear();

export const hasStorage = key => {
  const item = getStorage(key);
  return !!item;
};