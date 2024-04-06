import { useEffect, useState } from 'react';
import { GetPhone } from '../components/GetPhone';

type LoginPageStatus = '' | 'input-phone';

export const Login = () => {
  const [status, setStatus] = useState<LoginPageStatus>('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const handleGetPhoneNumber = (phoneNumber: string) => {
    setUserPhoneNumber(phoneNumber);
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus('input-phone');
    }, 50);
  });
  return (
    <div className="fixed size-full p-4 bg-gray-50">
      <GetPhone hidden={status === ''}></GetPhone>
    </div>
  );
};
