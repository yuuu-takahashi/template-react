import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>This is the Auth Layout page.</p>
      <Outlet />
    </div>
  );
};
