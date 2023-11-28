import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export const Navigation = () => {
  return <RouterProvider router={router} />;
};
