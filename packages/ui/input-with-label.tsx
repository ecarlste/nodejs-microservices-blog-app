import { Input } from './input';
import { Label } from './label';

interface InputWithLabelProps {
  label: string;
  inputId: string;
  inputType: string;
}

export function InputWithLabel(props: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.inputId}>{props.label}</Label>
      <Input
        type={props.inputType}
        id={props.inputId}
        placeholder={props.label}
      />
    </div>
  );
}
