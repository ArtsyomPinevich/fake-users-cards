import {useState} from 'react';
import {useSelector} from 'react-redux';
import UserCard from '../UserCard/UserCard';
import './userLayout.css';

const UsersLayout = () => {
    const {userList, loading} = useSelector((state) => state.users);
    const [userLimit, setUserLimit] = useState(10);

    const limitedUsers = userList.filter((_, i) => i < userLimit);
    return (
        <section className="user-cards-section">
            <div className="cards-layout">
                {loading ? (
                    <p>loading</p>
                ) : (
                    limitedUsers.map((user) => (
                        <div className="user-card">
                            <UserCard user={user} />
                        </div>
                    ))
                )}

                {userList.length > limitedUsers.length ? (
                    <button onClick={() => setUserLimit(userLimit + 5)}>+5 users</button>
                ) : (
                    <p>there is no more users to show</p>
                )}
            </div>
        </section>
    );
};

export default UsersLayout;
