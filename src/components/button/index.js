import Spinner from "../spinner";

const Button = ({   primary,
    backgroundColor,
    size,
    isLoading,
    children,
    hover,
    ...props }) => (
    <button
    type="submit"
    className={`${props.height} w-full ${props.ml} mt-${
      props.mt 
    } trans hover:text-[#CEE3FB] border ${props.color} ${props.border} px-5 py-3 ${hover} ${backgroundColor} ${props.color} ${props.width} rounded-lg`}
    {...props}
    data-testid="button"
    onClick={props.onClick}
  >
    <div
      className={`flex font-gilroyMd text-center justify-center font-semibold items-center`}
    >
      {children}
      {isLoading && <Spinner />}
    </div>
  </button>
);

export default Button;