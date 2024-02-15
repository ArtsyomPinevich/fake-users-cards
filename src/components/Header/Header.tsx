import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">Home</Link>
            </div>

            <nav className="nav">
                <ul className="nav__links">
                    <li className="nav__link">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="nav__link">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
