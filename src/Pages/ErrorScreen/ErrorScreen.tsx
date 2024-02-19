import {Link, useRouteError} from 'react-router-dom';
import './error.css';

type StatusTypes = {
    status: number;
    statusText: string;
    data: string;
};

const ErrorScreen = () => {
    const error = useRouteError();
    const {status, statusText, data} = error as StatusTypes;

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
