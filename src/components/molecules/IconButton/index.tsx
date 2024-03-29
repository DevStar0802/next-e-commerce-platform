import { cloneElement, forwardRef } from "react";
import clsx from "clsx";
import { IconButtonSize, IconButtonColor } from "./utils";

export interface IconButtonProps extends JSX.IntrinsicAttributes {
  size?: typeof IconButtonSize[keyof typeof IconButtonSize];
  color?: typeof IconButtonColor[keyof typeof IconButtonColor];
  rounded?: boolean;
  icon?: any
  disabled?: boolean;
  onClick?: (event: any) => void;
  className?: string;
  classNameIcon?: string;
  type: "button" | "submit" | "reset" | undefined;
}

export const IconButton: any = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      size = IconButtonSize.SM,
      icon = null,
      disabled = false,
      className = "",
      classNameIcon = "",
      color = IconButtonColor.WHITE,
      onClick = () => {},
      rounded = false,
      type,
      ...rest
    },
    ref
  ) => {
    const clsButtonSize = {
      [IconButtonSize.SM]: "h-8 w-8",
      [IconButtonSize.MD]: "h-10 w-10",
    };
    const clsIconSize = {
      [IconButtonSize.SM]: "[&>svg]:!h-6 [&>svg]:!w-6",
      [IconButtonSize.MD]: "[&>svg]:!h-8 [&>svg]:!w-8",
    };
    const clsButtonColor = {
      [IconButtonColor.WHITE]: "border border-neutral-600 bg-shades-white",
      [IconButtonColor.BLACK]: "bg-shades-black border border-shades-black",
    };
    const clsIconColor = {
      [IconButtonColor.WHITE]: "text-shades-black",
      [IconButtonColor.BLACK]: "!text-shades-white",
    };

    return (
      <button
        className={clsx(
          "inline-flex shrink-0 items-center justify-center",
          disabled ? "cursor-default" : "cursor-pointer",
          rounded ? "rounded-full" : "rounded-[4px]",
          clsButtonColor[color],
          clsButtonSize[size],
          clsIconColor[color],
          className
        )}
        onClick={onClick}
        ref={ref}
        type={type}
        {...rest}
      >
        {icon &&
          cloneElement(
            icon,
            {
              className: clsx(
                'flex',
                clsIconSize[size],
                clsIconColor[color],
                classNameIcon
              ),
            },
            null
          )}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
