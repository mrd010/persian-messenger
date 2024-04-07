import { useState } from 'react';

export const usePhoneNumber = () => {
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
  const updatePhoneNumber = (value: string) => {
    // check if input is correct for number then update value
    if (isValueOkToInput(value)) {
      setIsValid(isValidPhoneNumber(value));
      setPhoneNumber(value);
    }
  };

  return { phoneNumber, isValid, updatePhoneNumber };
};
