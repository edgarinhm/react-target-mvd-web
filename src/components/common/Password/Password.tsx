import { InputText } from '../InputText';

export interface PasswordProps {
  name: string;
  label: string;
  value: string;
  onChange: () => any;
  disabled?: boolean;
  isIconVisible?: boolean;
}

const Password = ({
  name,
  label,
  value,
  onChange,
  disabled = false,
  isIconVisible = false,
}: PasswordProps) => {
  return (
    <div>
      <InputText
        type="password"
        name={name}
        label={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      (isIconVisible && (
      <span className={`icon-password-${isIconVisible}`}>
        <img src="" alt="password icon" />
      </span>
      ))
    </div>
  );
};

export default Password;
