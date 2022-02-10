import classNames from 'classnames/bind';

import buttonStyle from './button.scss';

export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => any;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  label,
  onClick,
  disabled = false,
  isLoading = false,
  type = 'button',
  className,
}: ButtonProps) => {
  const style = classNames.bind(buttonStyle);

  return (
    <button
      data-testid={type}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={style('button', { disabled: disabled, loading: isLoading }, className)}
    >
      {label}
    </button>
  );
};

export default Button;
