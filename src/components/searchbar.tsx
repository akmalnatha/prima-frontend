import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({
  placeholder,
  value,
  required,
  useLabel,
  labelText,
  labelStyle,
  onChange,
}: {
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
  required?: boolean;
  useLabel?: boolean;
  labelText?: string;
  labelStyle?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  useEffect(() => {
    const updateContainerSize = () => {
      if (mapContainerRef.current) {
        setContainerHeight(mapContainerRef.current.offsetHeight);
      }
    };

    // Initial setup
    updateContainerSize();

    // Event listener for window resize
    window.addEventListener("resize", updateContainerSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);
  //password attribute
  //   const [showPassword, setShowPassword] = useState("password");
  //   const [icon, setIcon] = useState(<AiFillEyeInvisible></AiFillEyeInvisible>);
  //   const handleToggle = () => {
  //     if (showPassword === "password") {
  //       setIcon(<AiFillEye></AiFillEye>);
  //       setShowPassword("text");
  //     } else {
  //       setIcon(<AiFillEyeInvisible></AiFillEyeInvisible>);
  //       setShowPassword("password");
  //     }
  //   };

  return (
    <>
      <div className="w-full">
        {useLabel && (
          <label htmlFor="search" className={labelStyle}>
            {labelText}
          </label>
        )}
        <div className="flex items-center">
          <input
            id="search"
            type="text"
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="focus:outline-none w-full px-5 py-2 text-[20px] text-black bg-mono-off_white border-4 border-white rounded-full z-10"
          />
          <button className="rounded-r-full bg-gradient-to-r from-purple-primary to-blue-light relative active:from-[#3F44B5] active:to-blue-light hover:from-[#5257B2] hover:to-blue-light -left-7 pl-[56px] pr-8 text-[20px] font-semibold text-white h-12">
            kontol
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
