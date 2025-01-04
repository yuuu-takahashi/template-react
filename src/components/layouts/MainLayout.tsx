import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

export const MainLayout = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <p>This is the Main Layout page.</p>
      <Header />
      <Outlet />
    </div>
  );
};
