import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Top } from '@/pages/Top';
import { About } from '@/pages/About';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { AuthLayout } from '@/layouts/AuthLayout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path="/about" element={<About />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
