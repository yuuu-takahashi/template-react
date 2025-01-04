import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

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
