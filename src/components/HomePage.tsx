import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchUsers, loadFavorite} from '../store/usersSlice/usersSlice';
import {AppDispatch} from '../store/store';

const HomePage = () => {
    const dispatch: AppDispatch = useDispatch();

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
