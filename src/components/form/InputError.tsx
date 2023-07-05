import cx from "classnames";
import { InputType } from "@/utlis/const";

export const InputErrorIcon: React.FC<InputErrorIconProps> = ({ inputType }): React.ReactElement => (
  <svg
    id="exclamation-circle"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cx("absolute top-0 h-full w-4 ", {
      "right-4": inputType !== InputType.PASSWORD,
      "right-7": inputType === InputType.PASSWORD
    })}
  >
    <path
      fill="#DC2626"
      d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
    ></path>
  </svg>
);

interface InputErrorMessageProps {
  erroMessage: string;
}

export const InputErroMessage: React.FC<InputErrorMessageProps> = ({
  erroMessage
}): React.ReactElement => <label className="block text-right text-red-600 text-sm">{erroMessage}</label>;
