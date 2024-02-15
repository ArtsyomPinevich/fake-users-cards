import {Link} from 'react-router-dom';
import './usercard.css';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../store/usersSlice/usersSlice';
import {memo} from 'react';

import UserImage from '../UserImage/UserImage';

type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    username: string;
    image: string;
};

type userCardProps = {
    user: User;
};

const UserCard = ({user}: userCardProps) => {
    const {id, firstName, lastName, maidenName, age, gender, username, image} = user;
    const isFavorite = useSelector((state) => state.users.isFavorite[id]);
    return (
        <div className="user-preview-card" style={{border: `2px solid ${isFavorite ? 'pink' : 'transparent'} `}}>
            <UserImage image={image} firstName={firstName} lastName={lastName} id={Number(id)} />
            <h2 className="user-preview-card__full-name">
                {firstName} {lastName}
            </h2>
            <p className="user-preview-card__age">Age: {age}</p>
            <p className="user-preview-card__gender">Gender: {gender}</p>

            <Link to={`/${id}`}>
                <button className="user-preview-card__more-info-button"> View more info</button>
            </Link>
        </div>
    );
};

export default memo(UserCard);
