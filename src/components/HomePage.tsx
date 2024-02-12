import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice/usersSlice';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
        //to do. Delete this message before deploy
        console.log('DATA FETCHED PLEASE WATCH OUT HOW MANY API CALLS YOU MAKE (This message is for me) ');
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default HomePage;
