import { useState } from 'react';

type statusTypes = 'welcome' | 'show-login';

export const Home = () => {
  const [status, setStatus] = useState<statusTypes>('welcome');
  return (
    <div className="h-screen w-full p-2 overflow-hidden">
      <div className="grid grid-rows-2 justify-center h-full">
        <div className="self-end h-full">
          <img src="/icon.png" className="h-full object-contain" />
        </div>
        <div className="self-start grid grid-rows-2 h-full items-start justify-center">
          <h1 className="font-Yekan font-bold text-4xl sm:text-5xl text-center">پیام رسان فارسی</h1>
          <div className="relative grid">
            <div
              className={`bg-gray-50 w-full h-full rounded-full absolute transition-transform will-change-transform duration-700 ${status === 'show-login' ? 'scale-x-[1000%] scale-y-[4000%]' : ''}`}
            ></div>
            <button
              className={`font-Yekan py-2 z-20 text-gray-950 will-change-transform rounded-full text-xl sm:text-2xl font-bold transition-transform ${status === 'welcome' ? 'scale-100' : 'scale-0'}`}
              onClick={() => setStatus('show-login')}
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
