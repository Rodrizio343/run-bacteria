export const setItem = (key: string, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error To Get Items From LocalStorage");
  }
};

export const getItem = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};
