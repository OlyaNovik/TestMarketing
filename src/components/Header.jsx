import '../styles/StyleHeadFoot.scss';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/step-2'); 
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__sign">
          <p className="header__text desktop-only">Already have an account?</p>
          <button className="header__button" onClick={handleSignInClick}>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
