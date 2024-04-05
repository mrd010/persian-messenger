export const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-rows-2 justify-center h-full">
        <div className="self-end h-full">
          <img src="/icon.png" className="h-full object-contain" />
        </div>
        <div className="self-start grid grid-rows-2 h-full items-start justify-center">
          <h1 className="font-Yekan font-bold text-4xl text-center">پیام رسان فارسی</h1>
          <button className="bg-gray-50 font-Yekan py-2 text-gray-900 rounded-full text-xl font-bold ">
            <span className="pb-1 inline-block">ورود</span>
          </button>
        </div>
      </div>
    </div>
  );
};
