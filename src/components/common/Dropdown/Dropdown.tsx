import { FocusEventHandler } from 'react';
import { Controller, FieldValues, UseFormRegister, Control } from 'react-hook-form';
import Select from 'react-select';
import classNames from 'classnames';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';
import { validateLocalSrc } from 'utils';
import { MEDIA_ICONS } from 'constants/assets-constants';
import './dropdown.scss';
import themeConfig from 'config/react-select';

export type isMultiType = true | false;
export interface DropdownOption {
  value: string | number;
  text: string;
  icon?: string;
}

interface DropdownProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: DropdownOption;
  defaultOption?: DropdownOption;
  error?: string | ValidationError;
  register?: UseFormRegister<FieldValues>;
  control: Control<any>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  isSearchable?: boolean;
  isClearable?: boolean;
}

const Dropdown = ({
  className = '',
  name = '',
  placeholder = '',
  label = '',
  value,
  options,
  defaultOption,
  onBlur,
  onFocus,
  error = '',
  isSearchable = false,
  disabled = false,
  isClearable = true,
  control,
}: DropdownProps) => {
  return (
    <div className={classNames('input-container')}>
      {label && <div className={classNames('input-label')}>{label}</div>}
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...field } }) => (
          <Select
            ref={ref}
            {...field}
            className={classNames('dropdown', className)}
            options={options}
            placeholder={placeholder}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => null,
            }}
            value={value}
            defaultValue={defaultOption}
            onFocus={onFocus}
            onBlur={onBlur}
            formatOptionLabel={option =>
              option.icon ? (
                <div className={classNames('dropdown__option')}>
                  <img
                    src={validateLocalSrc(
                      option.icon,
                      process.env.PUBLIC_URL + MEDIA_ICONS + option.icon
                    )}
                    alt={`icon ${option.text}`}
                  />
                  <span style={{ marginLeft: 5 }}>{option.text}</span>
                </div>
              ) : (
                <span>{option.text}</span>
              )
            }
            theme={themeConfig}
            isSearchable={isSearchable}
            isClearable={isClearable}
          />
        )}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default Dropdown;
