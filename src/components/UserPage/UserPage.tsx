import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchUserById} from '../../store/usersSlice/usersSlice';
import {useEffect} from 'react';
import UserImage from '../UserImage/UserImage';
import './userPage.css';
import {AppDispatch} from '../../store/store';

type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    username: string;
    image: string;
    eyeColor: string;
    height: number;
    weight: number;
    bloodGroup: string;
    university: string;
};

const UserPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserById(Number(id)));
    }, [dispatch, id]);
    //fix
    const {singleUserData, loading} = useSelector((state: any) => state.users);

    const {firstName, lastName, maidenName, age, gender, username, image, eyeColor, height, weight, bloodGroup, university} = singleUserData as User;

    return (
        <section className="user-page-info">
            <div className="user-page-info-container">
                <button className="user-page-info__back-button" onClick={() => navigate(-1)}>
                    go back
                </button>
                {loading ? (
                    <p>loading</p>
                ) : (
                    <>
                        <div>
                            <UserImage image={image} firstName={firstName} lastName={lastName} id={Number(id)} />
                        </div>
                        <div className="user-page-info__header">
                            <h2>
                                {firstName} {lastName}
                            </h2>
                            <div className="user-page-info__info">
                                <p>
                                    <span> Age: </span>
                                    {age}
                                </p>
                                <p>
                                    <span> Gender: </span>
                                    {gender}
                                </p>
                                <p>
                                    <span> Username: </span>
                                    {username}
                                </p>
                                <p>
                                    <span> Maiden name: </span>
                                    {maidenName}
                                </p>
                                <p>
                                    <span> Eye color: </span>
                                    {eyeColor}
                                </p>

                                <p>
                                    <span> Height: </span>
                                    {height}
                                </p>
                                <p>
                                    <span> Weight: </span>
                                    {weight}
                                </p>
                                <p>
                                    <span> Blood group: </span>
                                    {bloodGroup}
                                </p>
                                <p>
                                    <span> University: </span>
                                    {university}
                                </p>
                                <p></p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default UserPage;
