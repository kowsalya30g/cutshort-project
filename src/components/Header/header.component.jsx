import logo from '../../assets/images/logo.JPG';
import './header.styles.css';

// Component for logo and header
const Header = () => {
    return (
        <div className="Header">
            <img id="Logo" src={logo} alt="Logo" />
            <h1 id="Eden">Eden</h1>
        </div>
    )
};

export default Header;