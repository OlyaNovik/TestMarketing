
import Logo from '../assets/Logo.png';
import Icon from '../assets/icon_last.png';


const Page6 = () => {
    return (
        <>
            <div className="page6">
                <div className="page6__header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="page6__wrapper-icons">
                    <img src={Icon} alt="Icon" />

                </div>
                <div className="page6__wrapper-headtext">
                    <p>Thanks for your answers!</p>
                </div>
                <div className="page6__wrapper-text-question">
                    <p>Please check the box below to accept our rules. You’re all set!</p>
                </div>
                <div className="page6__checkbox-text">
                    <div className="page6__wrapper-checkbox">
                        <label className="page6__custom-checkbox">
                            <input type="checkbox" />
                            <span className="page6__checkbox-mark"></span>
                        </label>
                    </div>
                    <div className="page6__wrapper-text">
                     <p>   I have read, understand and agree to Terms of Use, Privacy Policy, Cookie Policy, Billing & Refund Policy, Disclosures & Disclaimers</p>
                    </div>
                </div>
                <div className="page4__button-continue">
                    <button>JOIN NOW →</button>
                </div>
            </div>
        </>
    )
}

export default Page6;