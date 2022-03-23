import { FocusEventHandler } from 'react';
import { Controller, FieldValues, UseFormRegister, Control } from 'react-hook-form';
import Select from 'react-select';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';
import { validateLocalSrc } from 'utils';
import { MEDIA_ICONS } from 'constants/assets-constants';
import classNames from 'classnames';
import './dropdown.scss';

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
  const hanldeOnChange = (selected: DropdownOption) => {
    return selected;
  };
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
            //onChange={hanldeOnChange}
            onFocus={onFocus}
            onBlur={onBlur}
            formatOptionLabel={option =>
              option.icon ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
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
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                text: 'orangered',
                primary25: '#F4F4F4',
                primary: 'black',
              },
            })}
            isDisabled={disabled}
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
