import { useState, useEffect } from 'react';

function useFormLocalStorage<T>(
  key: string,
  initialValues: T,
): [T, (values: Partial<T>) => void, () => void] {
  const [state, setState] = useState<T>(() => {
    const storedValues = localStorage.getItem(key);

    if (storedValues) {
      return JSON.parse(storedValues) as T;
    } else {
      if (!initialValues) {
        return initialValues;
      }
      localStorage.setItem(key, JSON.stringify(initialValues));
      return initialValues;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const setValue = (values: Partial<T>) => {
    setState((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const clearForm = () => {
    localStorage.removeItem(key);
    setState(initialValues);
  };

  return [state, setValue, clearForm];
}

export default useFormLocalStorage;
