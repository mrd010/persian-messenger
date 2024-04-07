import { InputField } from './InputField';

type PhoneInputProps = {
  value: string;
  isValid: boolean;
  onUpdate: (value: string) => void;
};

export const PhoneInput = ({ value, isValid, onUpdate }: PhoneInputProps) => {
  return (
    <InputField
      name="phoneNumber"
      labelText="شماره موبایل"
      type="tel"
      value={value}
      isValid={isValid}
      onInput={onUpdate}
    ></InputField>
  );
};
