const SearchBar = ({
  placeholder,
  value,
  required,
  useLabel,
  labelText,
  labelStyle,
  onChange,
  onClick
}: {
  placeholder: string;
  value?: string | number | readonly string[] | undefined;
  required?: boolean;
  useLabel?: boolean;
  labelText?: string;
  labelStyle?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {

  return (
    <>
      <div className="w-full translate-x-[14px]">
        {useLabel && (
          <label htmlFor="search" className={labelStyle}>
            {labelText}
          </label>
        )}
        <div className="flex items-center w-full">
          <input
            id="search"
            type="text"
            autoComplete="false"
            name="hidden"
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="focus:outline-none w-full px-5 py-2 text-[12px] leading-[12px] md:text-[20px] md:leading-[20px] text-black bg-mono-off_white border-4 border-white rounded-full z-10"
          />
          <button className="rounded-r-full bg-gradient-to-r from-blue-primary to-blue-light active:from-blue-primary active:to-blue-primary hover:from-purple-primary hover:to-blue-light -translate-x-7 pl-9 md:pl-14 pr-4 md:pr-8 text-[12px] leading-[12px] md:text-[20px] md:leading-[20px] font-semibold text-white h-8 md:h-10" onClick={onClick}>
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
