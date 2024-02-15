import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../components/HomePage';
import About from '../components/About/About';
import UsersLayout from '../components/UsersLayout/UsersLayout';
import Favorite from '../components/Favorite/Favorite';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import UserPage from '../components/UserPage/UserPage';
import {Children} from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorScreen />,
        children: [
            {
                errorElement: <ErrorScreen />,
                children: [
                    {path: '/', index: true, element: <UsersLayout />},
                    {path: '/:id', element: <UserPage />},
                    {path: '/favorite', element: <Favorite />},
                    {path: '/about', element: <About />},
                ],
            },
        ],
    },
]);

export default router;
