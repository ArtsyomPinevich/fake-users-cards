import { useState } from 'react';
import { useSelector } from 'react-redux';

const UsersLayout = () => {
    const users = useSelector((state) => state.users.userList.users);

    const [userLimit, setUserLimit] = useState(10);
    const limitedUsers = users.filter((_, i) => i < userLimit);
    console.log('must be filtred', limitedUsers);
    return (
        <section className="user-cards-section">
            <div className="cards-layout">
                {limitedUsers.map((user) => (
                    <div className="user-card">
                        <h2>{user.firstName}</h2>
                    </div>
                ))}

                <button onClick={() => setUserLimit(userLimit + 5)}>+5 users</button>
            </div>
        </section>
    );
};

export default UsersLayout;
