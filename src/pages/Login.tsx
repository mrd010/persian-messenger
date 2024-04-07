import { useEffect, useState } from 'react';
import { GetPhone } from '../components/GetPhone';
import { LoginForm } from '../components/LoginForm';
import { useVanishingError } from '../hooks/useVanishingError';
import { isUserMember } from '../utilities/checkers';
import { ErrorOverlay } from '../components/ErrorOverlay';

type LoginPageStatus = '' | 'login-phone' | 'login-password' | 'sign-up';

export const Login = () => {
  const [status, setStatus] = useState<LoginPageStatus>('');
  const { isError, throwError } = useVanishingError();

  // when a valid phone number submitted
  const handleGetPhoneNumber = async (phoneNumber: string) => {
    try {
      // user is currently a member
      const userIsMember = await isUserMember(phoneNumber);

      if (userIsMember) {
        setStatus('login-password');
      } else {
        setStatus('sign-up');
      }
    } catch (error) {
      throwError();
    }
  };

  // after a while of bg appear show first login form
  useEffect(() => {
    setTimeout(() => {
      setStatus('login-phone');
    }, 50);
  }, []);

  return (
    <div className="fixed size-full p-4 bg-gray-50">
      <div className="absolute left-0 bottom-4 w-full">
        <ErrorOverlay visible={isError}></ErrorOverlay>
      </div>
      <LoginForm hidden={status !== 'login-phone'}>
        <GetPhone onValidSubmit={handleGetPhoneNumber}></GetPhone>
      </LoginForm>
    </div>
  );
};
