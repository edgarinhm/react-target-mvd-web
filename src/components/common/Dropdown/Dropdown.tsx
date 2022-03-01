import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';

import dropdownStyle from './dropdown.scss';

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
              <option value={option.value} key={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        {error && <div className={style('input-error')}>{error}</div>}
      </div>
    );
  }
);

interface DropDownOption {
  value: string;
  text: string;
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
  error?: string;
  onFocus?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default Dropdown;
