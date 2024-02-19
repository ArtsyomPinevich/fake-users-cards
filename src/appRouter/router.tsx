import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../components/HomePage';
import UsersLayout from '../components/UsersLayout/UsersLayout';
import ErrorScreen from '../Pages/ErrorScreen/ErrorScreen';
import {Suspense, lazy} from 'react';

const UserPageComponent = lazy(() => import('../Pages/UserPage/UserPage'));
const AboutPage = lazy(() => import('../Pages/About/About'));

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
                    {
                        path: '/:id',
                        element: (
                            <Suspense fallback={'loading'}>
                                <UserPageComponent />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/about',
                        element: (
                            <Suspense fallback={'loading'}>
                                <AboutPage />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);

export default router;
