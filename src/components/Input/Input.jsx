const Input = ({
  className = "",
  name = "",
  placeholder = "",
  type = "text",

  suffix,
  ...restProps
}) => {
  return (
    <>
      <div
        className={`${className} flex items-center justify-between border-[1.5px] border-[#d3d2d2] rounded-3xl p-[0.5rem]  focus-within:border-[#0284FE] transition-all ease-in`}
      >
        <input
          className="border-none outline-none pl-2 peer/input"
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
      </div>
    </>
  );
};
export { Input };
