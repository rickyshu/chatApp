import { useEffect, useState } from "react";

//localhost 마다 구별하기 위한 용도로 사용?
const PREFIX = "whatsapp-clone-";

// key: what we store in localstorage
//initialVlaue: what normally pass to your states

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, (value: T) => void] {
  const prefixedKey = PREFIX + key;
  //localStorage에서 json을 가져와서 parse하는 것은 느린 작업이기 때문에 함수 호출을 통해 한 번만 진행하려고 아래처럼 하는 것이다.

  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue) as T;
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    console.log("value change");
    console.log(value);
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
