import HeaderPages from '../components/HeaderPages.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page5 = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!password || !confirmPassword) {
            alert('Please fill in both password fields.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }


        navigate('/step-6'); 
    };

    return (
        <>
            <div className="page5">
                <HeaderPages />
                <div className="page5__wrapper-headtext">
                    <p>Create your password</p>
                </div>
                <div className="page5__wrapperinput">
                    <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="page5__wrapper-text">
                    <p>Passwords must be at least 8 characters long. You can recover passwords at any time using the email address you provided.</p>
                </div>
                <div className="page5__button-continue">
                    <button onClick={handleContinue}>CONTINUE →</button>
                </div>
            </div>
        </>
    );
};

export default Page5;
