import { ChangeEvent, useState } from "react";

/**
 * useHandleInput - custom hook
 * @param {(value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void} onChange
 * @param {(value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void} onBlur
 * @returns
 */

const useHandleInput = (
  onChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onBlur?: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    onChange(e);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onBlur && onBlur(e);
    setIsFocused(false);
  };

  return { isFocused, setIsFocused, handleChange, handleBlur };
};

export { useHandleInput };
