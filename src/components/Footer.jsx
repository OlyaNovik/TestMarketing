import '../styles/StyleHeadFoot.scss';


const Footer = () => {
    return (
        <header className="footer">
            <div className="footer__inner">
                <div className="footer__line">
                    <p>Terms of Use</p>
                    <p>Billing policy</p>
                    <p>Cookie Policy</p>
                </div>
                <div className="footer__line">
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Risks Notice</p>
                </div>
                <div className="footer__line">
                    <p>Disclosures and Disclaimers</p>
                    <p>Contact Us</p>
                </div>

            </div>
        </header>
    );
};

export default Footer;