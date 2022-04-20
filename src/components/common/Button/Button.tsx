import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import buttonStyle from './button.scss';

export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => any;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  icon?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, onClick, disabled = false, isLoading = false, type = 'button', className, icon },
    ref
  ) => {
    const style = classNames.bind(buttonStyle);

    return (
      <button
        data-testid={type}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={style('button', { disabled: disabled, loading: isLoading }, className)}
        ref={ref}
      >
        {icon && <img src={icon} alt="icon" />}
        {label}
      </button>
    );
  }
);

export default Button;
