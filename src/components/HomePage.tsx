import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/usersSlice/usersSlice';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        console.log('DATA FETCHED PLEASE WATCH OUT HOW MANY API CALLS YOU MAKE ');
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default HomePage;
