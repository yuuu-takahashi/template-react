import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout, AuthLayout } from '@/components/layouts';
import {
  Top,
  About,
  Login,
  Register,
  NotFound,
  Post,
} from '@/components/pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Top />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
