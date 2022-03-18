import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';
import dropdownStyle from './dropdown.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      name,
      value,
      options,
      defaultOption,
      onChange,
      label,
      placeholder,
      className,
      required = false,
      error,
      onFocus,
    },
    ref
  ) => {
    const style = classNames.bind(dropdownStyle);

    return (
      <div className={style('input-container', className)}>
        {label && <div className={style('input-label')}>{label}</div>}
        <div className="dropdown">
          <select
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={style('select')}
            required={required}
            ref={ref}
          >
            <option value="">{defaultOption}</option>
            {options?.map(option => (
              <option value={option.text} key={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  }
);

interface DropDownOption {
  value: string;
  text: string;
  icon?: string;
}
export interface DropdownProps {
  name: string;
  value?: string;
  options?: DropDownOption[];
  defaultOption?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | ValidationError;
  onFocus?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default Dropdown;
