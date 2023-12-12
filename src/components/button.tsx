import { FormEventHandler, MouseEventHandler } from "react";

const Button = ({
  text,
  type,
  onClick,
  onSubmit,
  isLoading = false,
  color = "primary",
  icon,
  iconPosition = "right",
  size = "large",
  disable = false,
}: {
  text?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  color?: "primary" | "secondary";
  icon?: boolean;
  iconPosition?: "right" | "left";
  size?: "large" | "medium" | "small";
  disable?: boolean;
}) => {
  return (
    <button
      disabled={disable || isLoading}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${size == "large" ? "px-9 py-4 text-4xl" : size == "medium" ? "px-6 py-3" : "px-3 py-2 text-lg"} 
      ${
        disable
          ? "bg-mono-grey"
          : color == "primary"
          ? "bg-gradient-to-b from-blue-primary to-blue-light active:from-[#3F44B5] active:to-blue-light hover:from-[#5257B2] hover:to-blue-light text-white"
          : "bg-white border-2 border-black group hover:border-blue-primary active:border-indigo-700 text-black hover:text-blue-primary"
      } rounded-full text-[12px] md:text-[16px] font-semibold`}
    >
      {isLoading ? (
        <div className={`flex items-center justify-center ${size == "large" ? "text-4xl" : size == "medium" ? "text-2xl" : "text-lg"}`}>
          <svg
            className="mr-3 h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        <div
          className={`${
            iconPosition == "right" ? "" : "flex-row-reverse"
          } flex items-center justify-center gap-2 text-inherit`}
        >
          <p className={`${size == "large" ? "text-4xl" : size == "medium" ? "text-2xl" : "text-lg"} align-middle`}>{text}</p>
          {icon && (
            <img
              src={
                color == "primary"
                  ? size == "large"
                    ? "assets/button_arrow_white.svg"
                    : "assets/button_arrow_circle.svg"
                  : "assets/button_arrow_black.svg"
              }
              alt="arrow"
            />
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
