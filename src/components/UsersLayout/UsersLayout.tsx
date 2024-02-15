import {memo, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import UserCard from '../UserCard/UserCard';
import './userLayout.css';

const UsersLayout = () => {
    const {userList, loading} = useSelector((state) => state.users);
    const [userLimit, setUserLimit] = useState(20);

    const [filterFavorite, setFilterFavorite] = useState(false);

    const isFavorite = useSelector((state) => state.users.isFavorite);
    const limitedUsers = userList
        .filter((user) => {
            if (filterFavorite) {
                return isFavorite[user.id];
            } else {
                return user;
            }
        })
        .filter((_: unknown, i: number) => i < userLimit);

    return (
        <section className="user-cards-section">
            <button
                className="user-card-section-button center-alignment"
                onClick={() => {
                    setFilterFavorite(!filterFavorite);
                }}
            >
                {filterFavorite ? 'show all users' : 'show only favorite users'}
            </button>
            <div className="cards-layout" style={{transition: '1s all'}}>
                {loading ? (
                    <p>loading</p>
                ) : (
                    limitedUsers.map((user) => (
                        <div className="user-card" key={user.id}>
                            <UserCard user={user} />
                        </div>
                    ))
                )}
            </div>
            {userList.length > userLimit ? (
                //bugged if filtering favorite, need fix
                <button className="user-card-section-button center-alignment" onClick={() => setUserLimit(userLimit + 5)}>
                    +5 users
                </button>
            ) : (
                <p className="user-card__no-user-text">there is no more users to show</p>
            )}
        </section>
    );
};

export default memo(UsersLayout);
