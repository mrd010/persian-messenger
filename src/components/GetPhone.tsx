import { useState } from 'react';
import { InputField } from './InputField';

type GetPhoneProps = {
  hidden: boolean;
  onValidSubmit: () => void;
};

export const GetPhone = ({ hidden, onValidSubmit }: GetPhoneProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  // check if input value is ok for type
  const isValueOkToInput = (value: string): boolean => {
    return (/^\d*$/.test(value) && value.length < 12) || value.length === 0;
  };

  //   check if input value is a phone number
  const isValidPhoneNumber = (value: string): boolean => {
    return /^09([0-9]{9})$/.test(value);
  };

  //   phone number input controller
  const handleUpdatePhone = (value: string) => {
    // check if input is correct for number then update value
    if (isValueOkToInput(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmitPhoneNumber = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      onValidSubmit();
    } else {
      setIsValid(false);
    }
  };

  return (
    <div
      className={`grid size-full items-center content-center transition-opacity duration-500 gap-4 ${hidden ? 'opacity-0' : 'opacity-100'}`}
    >
      <p className="text-theme-500 text-center">لطفا شماره موبایل خود را وارد نمایید.</p>
      <form action="" className="flex flex-col flex-nowrap gap-4">
        <InputField
          name="phoneNumber"
          labelText="شماره موبایل"
          type="tel"
          value={phoneNumber}
          isValid={isValid}
          onInput={handleUpdatePhone}
        ></InputField>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="text-theme-50 rounded-full py-2 bg-gradient-to-tr from-theme-500 to-theme-700 shadow-sm font-bold"
        >
          ورود
        </button>
      </form>
      <div className="flex flex-col p-2 gap-2">
        <button className="text-theme-500 font-Yekan text-right">
          رمز عبور خود را فراموش کرده ام
        </button>
      </div>
    </div>
  );
};
