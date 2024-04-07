import { usePhoneNumber } from '../hooks/usePhoneNumber';
import { PhoneInput } from './PhoneInput';
import { FormSubmitButton } from './FormSubmitButton';

type GetPhoneProps = {
  onValidSubmit: (validPhoneNumber: string) => void;
};

export const GetPhone = ({ onValidSubmit }: GetPhoneProps) => {
  const { phoneNumber, isValid, updatePhoneNumber } = usePhoneNumber();

  // when submit button pressed if phone number is valid proceed else show error to user
  const handleSubmitPhoneNumber = () => {
    if (isValid) {
      onValidSubmit(phoneNumber);
    }
  };

  return (
    <>
      <p className={`text-center my-2 font-bold ${isValid ? 'text-theme-500' : 'text-error-500'}`}>
        لطفا شماره موبایل خود را وارد نمایید.
      </p>
      <form action="" className="flex flex-col flex-nowrap gap-4">
        <PhoneInput isValid={isValid} value={phoneNumber} onUpdate={updatePhoneNumber}></PhoneInput>
        {/* submit button. enabled only when phone number is valid
         */}
        <FormSubmitButton
          formIsValid={isValid}
          onSubmit={handleSubmitPhoneNumber}
        ></FormSubmitButton>
      </form>
      <div className="flex flex-col p-4 gap-2">
        <button className="text-theme-500 font-Yekan text-right">
          رمز عبور خود را فراموش کرده ام
        </button>
      </div>
    </>
  );
};
