import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers, loadFavorite} from '../store/usersSlice/usersSlice';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(loadFavorite());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default HomePage;
