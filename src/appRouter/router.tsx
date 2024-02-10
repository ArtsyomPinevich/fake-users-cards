import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import About from '../components/About/About';
import UsersLayout from '../components/UsersLayout/UsersLayout';
import Favorite from '../components/Favorite/Favorite';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        children: [
            { path: '/', index: true, element: <UsersLayout /> },
            { path: '/favorite', element: <Favorite /> },
            { path: '/about', element: <About /> },
        ],
    },
]);

export default router;
