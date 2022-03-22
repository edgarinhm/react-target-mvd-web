import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';

import inputStyle from './input-text.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';

export interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | ValidationError;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autocomplete?: string;
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
      disabled = false,
      autocomplete = 'off',
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
            className={style({ 'input input-text error': error, 'input input-text': !error })}
            type={type}
            required={required}
            disabled={disabled}
            ref={ref}
            autoComplete={autocomplete}
          />
          <ErrorMessage error={error} />
        </div>
      </div>
    );
  }
);

export default InputText;
