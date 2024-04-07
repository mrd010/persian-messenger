type FormSubmitButtonProps = {
  onSubmit: () => void;
  formIsValid: boolean;
};

export const FormSubmitButton = ({ onSubmit, formIsValid }: FormSubmitButtonProps) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="text-theme-50 grid place-items-center rounded-full py-2 bg-gradient-to-tr from-theme-500 to-theme-700 shadow-sm font-bold transition-opacity disabled:opacity-25 disabled:from-gray-500/80 disabled:to-gray-700/80"
      disabled={!formIsValid}
    >
      ورود
    </button>
  );
};
