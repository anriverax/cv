"use client";

import { useState, cloneElement } from "react";
import cx from "classnames";
import { InputType } from "@/utlis/const";
import { useHandleInput } from "./hook/useHandleInput";
import { InputErroMessage, InputErrorIcon } from "./InputError";

const Input: React.FC<InputProps> = ({
  nameId,
  type,
  value,
  onChange,
  onBlur,
  label,
  disabled,
  error,
  children
}) => {
  const [input, setInput] = useState<string>(type);
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
            "top-[-25%] bg-white text-sm": isFocused || value || error,
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
        <input
          type={input}
          name={nameId}
          value={value === null ? "" : value}
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          disabled={disabled}
          className={cx(
            "border border-solid outline-none py-2.5 pr-10 w-full rounded-lg transition-all duration-500 ease-in-out",
            {
              "border-red-600": error,
              "border-gray-300 focus:border-blue-600": !error,
              "pl-10": children,
              "pl-4": !children
            }
          )}
        />
        {type === InputType.PASSWORD &&
          (input === InputType.PASSWORD ? (
            <span onClick={() => setInput(InputType.TEXT)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="eye-slash"
                className="absolute right-2 top-0 h-full z-2 text-base"
              >
                <path
                  fill="#20396F"
                  d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
                ></path>
              </svg>
            </span>
          ) : (
            <span onClick={() => setInput(InputType.PASSWORD)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="eye"
                className="absolute right-2 top-0 h-full z-2 text-base"
              >
                <path
                  fill="#20396F"
                  d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                ></path>
              </svg>
            </span>
          ))}
        {error && <InputErrorIcon inputType={type} />}
        {children && renderModifyChildren()}
      </div>
      {error && <InputErroMessage erroMessage="This field is required" />}
    </div>
  );
};

export default Input;
