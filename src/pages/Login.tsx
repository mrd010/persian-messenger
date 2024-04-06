import { useEffect, useState } from 'react';
import { GetPhone } from '../components/GetPhone';
import { useData } from '../hooks/useData';
import { faravin } from '../data/apiUrls';

interface UserType {
  username: string;
  password: string;
  name: string;
  date: string;
}

interface AllUsersType {
  code: string;
  message: string;
  userList: UserType[];
}

type LoginPageStatus = '' | 'input-phone';

export const Login = () => {
  const [status, setStatus] = useState<LoginPageStatus>('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  const dataFetchDeps = JSON.stringify([loginAttempts, userPhoneNumber]);
  // get all users when attempt login
  const { data, isError, isLoading } = useData<AllUsersType>(faravin.usersAll, dataFetchDeps);
  console.log(dataFetchDeps);

  // when a valid phone number submitted
  const handleGetPhoneNumber = (phoneNumber: string) => {
    setUserPhoneNumber(phoneNumber);
    setLoginAttempts((a) => a + 1);
  };

  // after a while of bg appear show form
  useEffect(() => {
    setTimeout(() => {
      setStatus('input-phone');
    }, 50);
  });

  return (
    <div className="fixed size-full p-4 bg-gray-50">
      {isLoading && (
        <div className="size-full fixed top-0 left-0 z-10">
          <div className="loader w-full absolute bottom-2"></div>
        </div>
      )}
      <div
        className={`absolute w-full left-0 text-center bottom-4 transition-opacity ${isError ? 'opacity-100' : 'opacity-0'}`}
      >
        <p className="bg-error-600 rounded-md w-max mx-auto p-2">خطا در برقراری ارتباط با سرور</p>
      </div>
      <GetPhone
        hidden={status === ''}
        isLoadingData={isLoading}
        onValidSubmit={handleGetPhoneNumber}
      ></GetPhone>
    </div>
  );
};
