import './index.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes)

root.render(<RouterProvider router={router} />);
