import { useEffect, useRef, useState } from "react";
import {
  InitialValues,
  onChangeArgs,
  Product,
} from "../interfaces/Product.interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count ?? value);
  const isMounted = useRef(false);
  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {
    let newValue = initialValues?.maxCount
      ? Math.max(Math.min(counter + value, initialValues.maxCount), 0)
      : Math.max(counter + value, 0);

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    reset,
  };
};
