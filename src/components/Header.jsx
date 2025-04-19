import '../styles/StyleHeadFoot.scss';
import Logo from '../assets/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__sign">
          <p className="header__text desktop-only">Already have an account?</p>
          <button className="header__button">Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
