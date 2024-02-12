import {useParams} from 'react-router-dom';

const UserPage = () => {
    const {id} = useParams();
    console.log(id);
    return <div>UserPage {id}</div>;
};

export default UserPage;
