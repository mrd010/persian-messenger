import { useEffect, useState } from 'react';
import { GetPhone } from '../components/GetPhone';
import { getAllUsers } from '../utilities/fetchers';
import { LoginForm } from '../components/LoginForm';

type LoginPageStatus = '' | 'login-phone' | 'login-password' | 'sign-up';

export const Login = () => {
  const [status, setStatus] = useState<LoginPageStatus>('');
  // const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [isError, setIsError] = useState(false);

  console.log(status);
  // const [loginAttempts, setLoginAttempts] = useState(0);

  // const dataFetchDeps = JSON.stringify([loginAttempts, userPhoneNumber]);
  // get all users when attempt login
  // const { data, isError, isLoading } = useData<AllUsersType>(faravin.usersAll, dataFetchDeps);
  // console.log(data);

  // when a valid phone number submitted
  const handleGetPhoneNumber = async (phoneNumber: string) => {
    try {
      // get all users

      const users = await getAllUsers();

      const userNames = users.map((user) => user.username);
      const userExists = userNames.includes(phoneNumber);

      console.log(userNames);

      if (userExists) {
        setStatus('login-password');
      } else {
        setStatus('sign-up');
      }
    } catch (error) {
      setIsError(true);
    }
  };

  // after a while of bg appear show form
  useEffect(() => {
    setTimeout(() => {
      setStatus('login-phone');
    }, 50);
  }, []);

  // reset error
  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [isError]);

  return (
    <div className="fixed size-full p-4 bg-gray-50">
      <div
        className={`absolute w-full left-0 text-center bottom-4 transition-opacity ${isError ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="bg-error-600 rounded-md w-max mx-auto p-2">خطا در برقراری ارتباط با سرور</p>
      </div>
      <LoginForm hidden={status !== 'login-phone'}>
        <GetPhone onValidSubmit={handleGetPhoneNumber}></GetPhone>
      </LoginForm>
    </div>
  );
};
