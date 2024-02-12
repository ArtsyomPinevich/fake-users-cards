import {Link, useRouteError} from 'react-router-dom';
import './error.css';

const ErrorScreen = () => {
    const error = useRouteError();
    const {status, statusText, data} = error;
    console.log(error);
    return (
        <section className="error-page">
            <h2 className="error-page__error-code">
                {status} {statusText}
            </h2>
            <h3 className="error-page__user-message">Dear user something go wrong T_T</h3>
            <p className="error-page__additional-info">Skill issue from developer side </p>
            <p className="error-page__error-message">{data}</p>
            <Link to="/">
                <button>return to Home Page</button>
            </Link>
        </section>
    );
};

export default ErrorScreen;
