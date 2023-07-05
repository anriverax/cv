"use client";

import { cloneElement } from "react";
import cx from "classnames";
import { useHandleInput } from "./hook/useHandleInput";
import { InputErroMessage, InputErrorIcon } from "./InputError";

const TextArea: React.FC<TextareaProps> = ({
  nameId,
  value,
  onChange,
  onBlur,
  label,
  disabled,
  error,
  children
}) => {
  const { isFocused, setIsFocused, handleChange, handleBlur } = useHandleInput(onChange, onBlur);

  const renderModifyChildren = () =>
    cloneElement(children as React.ReactElement, {
      className: cx("absolute left-4 top-0 h-full z-2 text-base", {
        "text-red-500": error
      })
    });

  return (
    <div className="mb-6">
      <div className="relative">
        <label
          htmlFor={nameId}
          className={cx("absolute transition-all duration-500 ease-in-out", {
            "top-[-8%] bg-white text-sm": isFocused || value || error,
            "left-4": isFocused || (!isFocused && value && !error) || error || !children,
            "left-10": !isFocused && !value && !error && children,
            "text-blue-600": isFocused,
            "top-[23%]": !isFocused && !value && !error,
            "text-gray-600": !isFocused && value && !error,
            "text-red-600": error
          })}
        >
          {label}
        </label>
        <textarea
          name={nameId}
          id={nameId}
          value={value}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          disabled={disabled}
          className={cx(
            "border border-solid outline-none py-2.5 pr-10 w-full h-[137px] rounded-lg transition-all duration-500 ease-in-out",
            {
              "border-red-600": error,
              "border-gray-300 focus:border-blue-600": !error,
              "pl-10": children,
              "pl-4": !children
            }
          )}
        />

        {error && <InputErrorIcon inputType="textarea" />}
        {children && renderModifyChildren()}
      </div>
      {error && <InputErroMessage erroMessage="This field is required" />}
    </div>
  );
};

export default TextArea;
