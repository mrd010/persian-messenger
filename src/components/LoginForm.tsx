import { ReactNode } from 'react';

type LoginFormProps = {
  hidden: boolean;
  children: ReactNode | ReactNode[];
};

export const LoginForm = ({ hidden, children }: LoginFormProps) => {
  return (
    <div
      className={`grid size-full items-center content-center transition-opacity duration-500 gap-4 ${hidden ? 'opacity-0' : 'opacity-100'}`}
    >
      {children}
    </div>
  );
};
