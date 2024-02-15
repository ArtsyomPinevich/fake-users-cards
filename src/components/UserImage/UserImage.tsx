import {MdFavorite} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../store/usersSlice/usersSlice';

type UserImageProps = {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
};

const UserImage = ({image, firstName, lastName, id}: UserImageProps) => {
    const dispatch = useDispatch();

    const handleAddToFavorite = () => {
        dispatch(toggleFavorite(Number(id)));
    };

    const isFavorite = useSelector((state: any) => state.users.isFavorite[id]);

    return (
        <div className="user-preview-card__img-wrapper">
            <img src={image} alt={`${firstName} ${lastName} picture`} loading="lazy" width="300px" height="300px" />

            <button className="user-preview-card__add-to-favorite" onClick={handleAddToFavorite} title="like button">
                <MdFavorite
                    size="48px"
                    color={isFavorite ? 'red' : 'black'}
                    style={{
                        transition: 'color 1s ',
                    }}
                />
            </button>
        </div>
    );
};

export default UserImage;
