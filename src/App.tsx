import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

type Pages = 'home' | 'login';

export const App = () => {
  const [currentPage, setCurrentPage] = useState<Pages>('home');
  return (
    <div className="bg-gray-950 text-gray-50 font-Samim" dir="rtl">
      {currentPage === 'home' && <Home onLoginClick={() => setCurrentPage('login')}></Home>}
      {currentPage === 'login' && <Login></Login>}
    </div>
  );
};
