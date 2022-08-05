import logo from '../../assets/images/logo.JPG';
import './header.styles.css';

const Header = () => {
    return (
        <div className="Header">
            <img id="Logo" src={logo} alt="Logo" />
            <h1>Eden</h1>
        </div>
    )
};

export default Header;