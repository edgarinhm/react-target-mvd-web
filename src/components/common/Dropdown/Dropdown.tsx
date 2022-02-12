import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames/bind';

import dropdownStyle from './dropdown.scss';

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      name,
      value,
      options,
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
        <div>
          <select
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className={style('select dropdown')}
            required={required}
            ref={ref}
          >
            {options?.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          {error && <div className={style('input-error')}>{error}</div>}
        </div>
      </div>
    );
  }
);

export interface DropdownProps {
  name: string;
  value?: string;
  options?: string[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
  onFocus?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default Dropdown;
