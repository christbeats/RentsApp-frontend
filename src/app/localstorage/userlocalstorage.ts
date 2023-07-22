export function setUserLocalStorage(key:any, value:any) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.log("LocalStorage n'est pas supporté par ce navigateur.");
  }
}

export function getUserLocalStorage(key:any) {
  if (typeof(Storage) !== "undefined") {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } else {
    console.log("LocalStorage n'est pas supporté par ce navigateur.");
    return null;
  }
}

export function removeUserLocalStorage(key:any) {
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem(key);
  } else {
    console.log("LocalStorage n'est pas supporté par ce navigateur.");
  }
}
