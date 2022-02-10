import { ChangeEvent } from 'react';
import classNames from 'classnames/bind';

import inputStyle from './input-text.scss';

export interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
}

const InputText = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  error,
  className,
  type = 'text',
}: InputProps) => {
  const style = classNames.bind(inputStyle);

  return (
    <div className={style('input-container', className)}>
      {label && <div className={style('input-label')}>{label}</div>}
      <div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={style('input')}
          type={type}
        />
        {error && <div className={style('input-error')}>{error}</div>}
      </div>
    </div>
  );
};

export default InputText;
