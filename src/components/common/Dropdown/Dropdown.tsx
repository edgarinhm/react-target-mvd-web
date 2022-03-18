import { ChangeEvent, FocusEventHandler, forwardRef } from 'react';
import classNames from 'classnames/bind';
import dropdownStyle from './dropdown.scss';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ValidationError } from 'interfaces/validation/validation-error-interface';
import Select, { StylesConfig, SingleValue, GroupBase } from 'react-select';
import { validateLocalSrc } from 'utils';
import { MEDIA_ICONS } from 'constants/assets-constants';

export type isMultiType = true | false;

const Dropdown = forwardRef<HTMLSelectElement, SelectProps>(
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
      onBlur,
      isMulti = false,
      styles,
      isSearchable = false,
      isDisabled = false,
      isClearable = true,
    },
    ref
  ) => {
    const style = classNames.bind(dropdownStyle);
    const handleOnChange = (event: any) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={style('input-container', className)}>
        {label && <div className={style('input-label')}>{label}</div>}
        <Select
          name={name}
          className={classNames('dropdown', className)}
          //styles={styles}
          components={{
            DropdownIndicator: null,
          }}
          placeholder={placeholder}
          isMulti={isMulti}
          options={options}
          value={value}
          defaultValue={defaultOption}
          onChange={handleOnChange}
          onBlur={onBlur}
          onFocus={onFocus}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          isClearable={isClearable}
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
        />
        <ErrorMessage error={error} />
      </div>
    );
  }
);

interface DropDownOption {
  value: string;
  text: string;
  icon?: string;
  label?: string;
}
export interface DropdownProps {
  name: string;
  value?: string;
  options?: DropDownOption[];
  defaultOption?: string;
  onChange?: (e: ChangeEvent<DropDownOption>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | ValidationError;
  onFocus?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectProps {
  name: string;
  isMulti?: boolean;
  options: DropDownOption[];
  styles?: StylesConfig<DropDownOption, boolean, GroupBase<DropDownOption>>;
  value?: SingleValue<DropDownOption>;
  defaultOption?: DropDownOption;
  label?: string;
  placeholder?: string;
  className?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string | ValidationError;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
}

export default Dropdown;
