import Logo from '../assets/Logo.png';
import Icon from '../assets/icon_last.png';
import { useState } from 'react';

const Page6 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleJoinNow = () => {
        if (!isChecked) {
            alert("You must accept the terms to continue.");
            return;
        }


        window.location.href = 'https://example.com/offer';
    };

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
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <span className="page6__checkbox-mark"></span>
                        </label>
                    </div>
                    <div className="page6__wrapper-text">
                        <p>
                            I have read, understand and agree to Terms of Use, Privacy Policy,
                            Cookie Policy, Billing & Refund Policy, Disclosures & Disclaimers
                        </p>
                    </div>
                </div>
                <div className="page4__button-continue">
                    <button onClick={handleJoinNow}>JOIN NOW →</button>
                </div>
            </div>
        </>
    );
};

export default Page6;
