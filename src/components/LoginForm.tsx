import { useState } from 'react';
import { InputField } from './InputField';

export const LoginForm = () => {
  const [formData, setFormData] = useState({ phoneNumber: '', password: '' });

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
      console.log('ok');
      setFormData((fd) => ({ ...fd, phoneNumber: value }));
    }
  };

  //   password input controller
  const handleUpdatePassword = (value: string) => {
    setFormData((fd) => ({ ...fd, password: value }));
  };

  const handleFormSubmit = () => {
    console.log(formData);
  };

  return (
    <form action="" className="flex flex-col flex-nowrap gap-5">
      <InputField
        name="phoneNumber"
        labelText="شماره موبایل"
        type="tel"
        value={formData.phoneNumber}
        isValid={isValidPhoneNumber(formData.phoneNumber)}
        onInput={handleUpdatePhone}
      ></InputField>
      <InputField
        name="password"
        labelText="رمز عبور"
        type="password"
        value={formData.password}
        onInput={handleUpdatePassword}
      ></InputField>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        className="text-theme-50 rounded-full py-2 bg-gradient-to-tr from-theme-500 to-theme-700 shadow-sm font-bold"
      >
        ورود
      </button>
    </form>
  );
};
