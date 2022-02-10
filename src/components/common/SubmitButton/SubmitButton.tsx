import { Button } from 'components/common';

export interface SubmitButtonProps {
  label: string;
  onClick: () => any;
  disabled?: boolean;
}

const SubmitButton = ({ label, onClick, disabled = false }: SubmitButtonProps) => {
  return <Button label={label} disabled={disabled} onClick={onClick} type="submit"></Button>;
};

export default SubmitButton;
