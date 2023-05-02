import { Dispatch, FormEvent, RefObject, SetStateAction } from 'react';
import { Input } from './input';
import { Label } from './label';

interface InputWithLabelProps {
  label: string;
  inputId: string;
  inputType: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function InputWithLabel(props: InputWithLabelProps) {
  function inputChangeHandler(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();

    props.setValue(event.currentTarget.value);
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="mb-2" htmlFor={props.inputId}>
        {props.label}
      </Label>
      <Input
        type={props.inputType}
        id={props.inputId}
        placeholder={props.label}
        onChange={inputChangeHandler}
      />
    </div>
  );
}
