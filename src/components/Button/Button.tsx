import React from 'react'
import { IColor } from '../../theme/colors';
import clsx from '../../utils/clsx';
import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
  fullWidth?: boolean;
  color?: IColor;
  variant?: 'contained' | 'outlined' | 'text';
}

const base = 'px-4 py-2 rounded-lg cursor-pointer flex items-center justify-center gap-2'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className = '',
    fullWidth = false,
    disabled = false,
    addonLeft,
    addonRight,
    type = 'button',
    color = 'primary',
    variant = 'text',
    ...rest
  } = props;

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled}
      className={clsx(
        className,
        base,
        'font-medium',
        {
          'bg-primary-500': color === 'primary' && variant === 'contained',
          'bg-secondary-500': color === 'secondary' && variant === 'contained',
          'bg-success-500': color === 'success' && variant === 'contained',
          'bg-error-500': color === 'error' && variant === 'contained',
          'bg-warning-500': color === 'warning' && variant === 'contained',
          'bg-info-500': color === 'info' && variant === 'contained',
          'bg-black': color === 'black' && variant === 'contained',
          'bg-white': color === 'white' && variant === 'contained',
        },
        ['primary', 'secondary', 'error', 'info', 'black'].includes(color) && variant === 'contained' ? 'text-white' : 'text-black',
        {
          'text-primary-600': variant !== 'contained' && color === 'primary',
          'text-secondary-600': variant !== 'contained' && color === 'secondary',
          'text-success-600': variant !== 'contained' && color === 'success',
          'text-error-600': variant !== 'contained' && color === 'error',
          'text-warning-600': variant !== 'contained' && color === 'warning',
          'text-info-600': variant !== 'contained' && color === 'info',
          'text-white': variant !== 'contained' && color === 'white',
        },
        variant === 'outlined' ? 'border-2' : 'border-2 border-transparent',
        {
          'w-full': fullWidth,
        }
      )}
    >
      {addonLeft && (
        <div>
          {addonLeft}
        </div>
      )}
      {children}
      {addonRight && (
        <div>
          {addonRight}
        </div>
      )}
    </button>
  )
});

export default Button