import { createElement, FC } from 'react';
import clsx from 'clsx';
import { buttonSize, buttonVariants, outlinedButtonVariants } from './utils';

export interface ButtonProps {
  as?: 'a' | 'button';
  rounded?: boolean;
  href?: string;
  variant?: 'outlined' | 'link';
  color?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSize;
  label?: string;
  className?: string;
  onClick?: (e: any) => void;
  children?: any;
  disabled?: boolean;
  download?: boolean;
}

export const Button: FC<ButtonProps> = ({
  as,
  rounded,
  variant,
  color,
  size,
  children,
  className = '',
  label = '',
  disabled,
  ...props
}) => {
  return createElement(
    as || 'button',
    {
      className: clsx(
        'flex max-w-[352px] font-normal cursor-pointer items-center justify-center border-0 mx-auto my-0 gap-x-2',
        variant !== 'outlined'
          ? buttonVariants[color || 'black']
          : outlinedButtonVariants[color || 'black'],
        buttonSize[size || 'lg'],
        rounded ? 'rounded-[3rem]' : 'rounded',
        disabled && 'opacity-40 cursor-not-allowed',
        className
      ),
      disabled,
      ...props,
    },
    <>
      {label}
      {children}
    </>
  );
};
