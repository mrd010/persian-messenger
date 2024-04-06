import { useState } from 'react';

type HomeProps = {
  onLoginClick: () => void;
};

export const Home = ({ onLoginClick }: HomeProps) => {
  // home page status
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const handleShowLogin = () => {
    setIsLoginPressed(true);
    setTimeout(() => {
      onLoginClick();
    }, 500);
  };

  return (
    <div className="h-screen w-full p-2 overflow-hidden">
      {/* container */}
      <div className="grid grid-rows-2 justify-center h-full">
        {/* top image logo */}
        <div className="self-end h-full">
          <img src="/icon.png" className="h-full object-contain" />
        </div>
        <div className="self-start grid grid-rows-2 h-full items-start justify-center">
          {/* app title */}
          <h1 className="font-Yekan font-bold text-4xl sm:text-5xl text-center">پیام رسان فارسی</h1>
          {/* login button */}
          <div className="relative grid">
            {/* a background for login button and login form
            scales to fullscreen when click login button
             */}
            <div
              className={`bg-gray-50 w-full h-full rounded-full absolute transition-transform will-change-transform duration-700 ${isLoginPressed ? 'scale-x-[1000%] scale-y-[4000%]' : ''}`}
            ></div>
            {/* login button */}
            <button
              className={`font-Yekan py-2 z-20 text-gray-950 will-change-transform rounded-full text-xl sm:text-2xl font-bold transition-transform ${isLoginPressed ? 'scale-0' : 'scale-100'}`}
              onClick={handleShowLogin}
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
