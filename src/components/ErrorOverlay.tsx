type ErrorOverlayProps = {
  visible: boolean;
};

export const ErrorOverlay = ({ visible }: ErrorOverlayProps) => {
  return (
    <div
      className={`text-center  transition-opacity bg-error-600 rounded-md w-max mx-auto px-4 py-2 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      خطا در برقراری ارتباط با سرور
    </div>
  );
};
