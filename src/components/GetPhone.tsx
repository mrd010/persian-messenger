import { useState } from 'react';
import { InputField } from './InputField';

type GetPhoneProps = {
  onValidSubmit: (validPhoneNumber: string) => void;
};

export const GetPhone = ({ onValidSubmit }: GetPhoneProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  // error for submit

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
      setIsValid(isValidPhoneNumber(value));
      setPhoneNumber(value);
    }
  };

  // when submit button pressed if phone number is valid proceed else show error to user
  const handleSubmitPhoneNumber = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      onValidSubmit(phoneNumber);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <p className={`text-center my-2 font-bold ${isValid ? 'text-theme-500' : 'text-error-500'}`}>
        لطفا شماره موبایل خود را وارد نمایید.
      </p>
      <form action="" className="flex flex-col flex-nowrap gap-4">
        <InputField
          name="phoneNumber"
          labelText="شماره موبایل"
          type="tel"
          value={phoneNumber}
          isValid={isValid}
          onInput={handleUpdatePhone}
        ></InputField>
        {/* submit button
        enabled only when phone number is valid
        */}
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmitPhoneNumber();
          }}
          className="text-theme-50 grid place-items-center rounded-full py-2 bg-gradient-to-tr from-theme-500 to-theme-700 shadow-sm font-bold transition-opacity disabled:opacity-25 disabled:from-gray-500/80 disabled:to-gray-700/80"
          disabled={!isValid}
        >
          ورود
        </button>
      </form>
      <div className="flex flex-col p-4 gap-2">
        <button className="text-theme-500 font-Yekan text-right">
          رمز عبور خود را فراموش کرده ام
        </button>
      </div>
    </>
  );
};
