import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';

import inputStyle from './text-area.module.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';

export interface InputProps {
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | ValidationError;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  autocomplete?: string;
  isVisibleRequiredIcon?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
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
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={style({ 'textarea text-area error': error, 'textarea text-area': !error })}
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

export default TextArea;
