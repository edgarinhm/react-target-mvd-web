import { ChangeEvent } from 'react';
import { InputText } from '../InputText';
export interface PasswordProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  isIconVisible?: boolean;
}

const Password = ({
  name,
  label,
  value,
  onChange,
  disabled = false,
  placeholder,
  required,
  error,
  isIconVisible = true,
}: PasswordProps) => {
  return (
    <div>
      <InputText
        type="password"
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        required={required}
        error={error}
        disabled={disabled}
        onChange={onChange}
      />
      {isIconVisible && (
        <span className="password-panel">
          <img src="" alt="password icon" />
        </span>
      )}
    </div>
  );
};

export default Password;
