import { Button } from 'components/common';
import { ButtonProps } from '../Button/Button';

const SubmitButton = ({ label, onClick, disabled = false }: ButtonProps) => {
  return <Button label={label} disabled={disabled} onClick={onClick} type="submit"></Button>;
};

export default SubmitButton;
