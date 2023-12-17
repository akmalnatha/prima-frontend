import { FormEventHandler, MouseEventHandler } from "react";
import { BiLike } from "react-icons/bi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const Button = ({
  text,
  type,
  onClick,
  onSubmit,
  isLoading = false,
  color = "primary",
  like = 0,
  icon,
  iconPosition = "right",
  size = "large",
  disable = false,
  fitContent = true
}: {
  text?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  color?: "primary" | "secondary" | "like";
  like?: number;
  icon?: boolean;
  iconPosition?: "right" | "left";
  size?: "large" | "medium" | "small";
  disable?: boolean;
  fitContent?: boolean;
}) => {
  return (
    <>
      {color != "like" && <button
        disabled={disable || isLoading}
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
        className={`${size == "large" ? "px-8 py-3" : size == "medium" ? "px-5 py-2" : "px-3 py-2"} 
        ${
          disable
            ? "bg-mono-grey"
            : color == "primary"
            ? "bg-gradient-to-b from-blue-primary to-blue-light active:from-blue-primary active:to-blue-primary hover:from-purple-primary hover:to-blue-light text-white"
            : "bg-white border-2 border-black group hover:border-blue-primary active:border-indigo-700 text-black hover:text-blue-primary"
        } rounded-full text-[12px] md:text-[16px] font-semibold ${fitContent ? "w-fit" : "w-full"} `}
      >
        {isLoading ? (
          <div className={`flex items-center justify-center ${size == "large" ? "text-base md:text-2xl" : size == "medium" ? "text-xl" : "text-sm lg:text-lg font-normal"}`}>
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
            } flex items-center justify-center gap-3 ${size == "large" ? "text-base md:text-2xl" : size == "medium" ? "text-xl" : "text-sm lg:text-lg font-normal"}`}
          >
            {text}
            {icon && (
              size == "large" || size == "medium" ?
              <img
                src={
                  color == "primary"
                    ? size == "large"
                      ? "/assets/button_arrow_white.svg"
                      : "/assets/button_arrow_circle.svg"
                    : "/assets/button_arrow_black.svg"
                }
                alt="arrow"
                className={`${size == "large" && "py-2 px-4 border-2 border-white"} rounded-full`}
              />
              :
              <div className={`${color == "primary" ? "border-2 border-white rounded-full px-1 py-1" : ""} shrink-0`}>
                  <HiOutlineArrowLongRight/> 
              </div>
            )}
          </div>
        )}
      </button>}
      {color == "like" && 
        <div className={`bg-white border-2 border-black group text-black rounded-full text-[12px] md:text-[16px] font-semibold ${fitContent ? "w-fit" : "w-full"} p-2 flex gap-2 items-center cursor-pointer`}>
          {text}
          <button className="bg-gradient-to-b from-blue-primary to-blue-light active:from-blue-primary active:to-blue-primary hover:from-purple-primary hover:to-blue-light text-white flex flex-col gap-[2px] text-3xl w-[68px] h-[68px] rounded-full items-center justify-center" onClick={onClick} onSubmit={onSubmit}>
              <BiLike/>
              <p className="text-xs">{like} Likes</p>
          </button>
        </div>
      }
    </>
  );
};

export default Button;

// {icon && (
//   )}
