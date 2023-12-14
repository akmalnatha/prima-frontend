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
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
