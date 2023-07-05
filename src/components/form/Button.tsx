import cx from "classnames";
import { StyleType } from "@/utlis/const";

const Button: React.FC<ButtonProps> = ({
  type,
  value,
  isSubmitting,
  actionBtn,
  handleClick
}): React.ReactElement => (
  <button
    type={type}
    className={cx("w-full h-[46px] font-semibold rounded-md cursor-pointer", {
      "bg-blue-900 text-white active:bg-blue-700 lg:hover:bg-blue-700": actionBtn === StyleType.SUCCESS,
      "bg-blue-0 border border-solid border-blue-400 text-blue-400": actionBtn === StyleType.INFO,
      "bg-gray-0 border border-solid border-gray-400 text-gray-400": actionBtn === StyleType.DISABLE,
      "text-gray-400": actionBtn === StyleType.CANCEL,
      "pointer-events-none": isSubmitting
    })}
    onClick={handleClick}
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <span className="flex justify-center items-center">
        <span className="loading">Processing...</span>
      </span>
    ) : (
      value
    )}
  </button>
);

export default Button;
