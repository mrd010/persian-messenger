import { HTMLInputTypeAttribute, useState } from 'react';

type InputFieldProps = {
  name: string;
  labelText: string;
  type: HTMLInputTypeAttribute;
  value: string;
  isValid?: boolean;
  onInput: (value: string) => void;
};

export const InputField = ({
  name,
  labelText,
  type = 'text',
  value,
  isValid = true,
  onInput,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const isEmpty = value.length === 0;

  //   input label get lifted if input is not empty or its focused
  return (
    <div className="relative grid w-full font-Samim text-gray-950" dir="ltr">
      <input
        type={type}
        name={name}
        id={name}
        className={`w-full rounded-full border-2 bg-gray-50 px-5 py-2 font-mono text-lg  caret-theme-400 outline-none ${isValid ? 'border-theme-500 text-gray-900 font-light' : 'border-error-500 text-error-500 font-bold'}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          onInput(e.target.value);
        }}
        value={value}
      />
      <label
        htmlFor={name}
        className={`absolute right-4 grid h-full items-center font-extrabold  transition-transform ${isFocused || !isEmpty ? '-translate-y-6 scale-75' : ''} ${isValid ? 'text-theme-500' : 'text-error-500'}`}
      >
        <span className="rounded-full bg-gray-50 px-2">{labelText}</span>
      </label>
    </div>
  );
};
