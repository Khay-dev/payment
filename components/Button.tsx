const buttonVariants = {
    normal: "text-white bg-black border-none hover:bg-white hover:text-black transition ",
    outline:
        "text-black bg-white border hover:bg-button-blue-100 hover:text-white transition ",
    secondary:
        "bg-button-blue-100 disabled:bg-[#E2DDDB] hover:bg-button-blue-200 focus:bg-button-blue-200 active:bg-button-blue-200  visited:bg-button-blue-200  cursor-pointer text-white",
    primary:
        "bg-button-purple-100 disabled:bg-[#E2DDDB] hover:bg-button-purple-200 focus:bg-button-purple-200 active:bg-button-purple-200  visited:bg-button-purple-200  cursor-pointer text-white",
};

const buttonSizes = {
    lg: "py-7 px-7 text-md md:py-8 md:px-8 md:text-lg",
    md: "py-3 px-6 text-base",
    sm: "py-3 px-6 text-sm",
    xs: "py-2 px-6 text-sm",
};

export function Button(
    props: React.ComponentProps<"button"> & {
        size?: keyof typeof buttonSizes;
        variant?: keyof typeof buttonVariants;
    }
) {
    const {
        size = "md",
        variant = "normal",
        className,
        children,
        ...rest
    } = props;

    return (
        <button
            type="button"
            {...rest}
            className={`${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
