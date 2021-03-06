import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';
import inputStyle from './input-text.module.scss';

export interface InputProps {
  name: string;
  value?: string | number;
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
  isVisibleRequiredIcon?: boolean;
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
      isVisibleRequiredIcon = false,
    },
    ref
  ) => {
    const style = classNames.bind(inputStyle);

    return (
      <div className={style('input-container', className)}>
        {label && (
          <div className={style('input-label')}>
            <label htmlFor={name}>
              {label} {isVisibleRequiredIcon && <span>*</span>}
            </label>
          </div>
        )}
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
