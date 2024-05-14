const Button = ({ children, className = "", ...restProps }) => {
  return (
    <button
      className={`${className} leading-[24px] text-[14px] font-[500] flex items-center justify-center text-center cursor-pointer py-[0.5rem] px-[1rem] rounded-md transition-all ease-in`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export { Button };
