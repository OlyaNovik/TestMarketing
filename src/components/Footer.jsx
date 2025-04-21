import { useEffect, useState } from 'react';
import '../styles/StyleHeadFoot.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setShowMessage(true);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/step-2');
    };
    return (
        <footer className="footer">
            <div className="footer__inner layout__content">
                <div className="footer__columns">
                    <div className="footer__column footer__column--first">
                        <a href="">Terms of Use</a>
                        <a href="">Billing policy</a>
                        <a href="">Cookie Policy</a>
                        <a href="">Refund Policy</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Risks Notice</a>
                    </div>
                    <div className="footer__column footer__column--second">
                        <a href="">Disclosures and Disclaimers</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>

            {isVisible && (
                <div className={`footer__messageSign-container ${showMessage ? 'show' : ''}`}>
                    <div className="footer__message">
                        <div className="footer__message-block">
                            <p>We use cookies to make your experience better! If you continue to use this site we will assume you are happy with it.</p>
                        </div>
                        <button className="footer__message-block__button" onClick={handleSignInClick}>Sign in</button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
