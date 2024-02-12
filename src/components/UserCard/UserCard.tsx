import {Link} from 'react-router-dom';

const UserCard = ({user}) => {
    const {id, firstName, lastName, maidenName, age, gender, username, image} = user;
    console.log('rerendered');
    return (
        <div>
            <div>
                <img src={image} alt={`${username} picture`} />
            </div>
            <h2>
                {firstName} {lastName}
            </h2>
            <p>{age}</p>
            <p>{gender}</p>
            <Link to={`/${id}`}>
                <button> click {id}</button>{' '}
            </Link>
        </div>
    );
};

export default UserCard;
