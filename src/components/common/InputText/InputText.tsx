import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';

import inputStyle from './input-text.scss';

export interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder,
      className,
      required = false,
      error,
      type = 'text',
      onFocus,
    },
    ref
  ) => {
    const style = classNames.bind(inputStyle);

    return (
      <div className={style('input-container', className)}>
        {label && <div className={style('input-label')}>{label}</div>}
        <div>
          <input
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={style(error ? 'input input-text error' : 'input input-text')}
            type={type}
            required={required}
            ref={ref}
          />
          {error && <div className={style('input-error')}>{error}</div>}
        </div>
      </div>
    );
  }
);

export default InputText;
