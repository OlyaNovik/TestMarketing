import HeaderPages from '../components/HeaderPages.jsx';
import Hot from '../assets/hot.webp';
import Trendy from '../assets/trendy.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page4 = () => {
    const [selectedSex, setSelectedSex] = useState(null);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!selectedSex || email.trim() === '') {
            alert('Please select a content type and enter your email.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        navigate('/step-5');
    };

    return (
        <>
            <div className="page4">
                <HeaderPages />
                <div className="page4__wrapper-headtext">
                    <p>What kind of content do you enjoy? 👀</p>
                </div>
                <div className="page4__question-cards">
                    <div
                        className={`page4__card ${selectedSex === 'hot' ? 'active' : ''}`}
                        onClick={() => setSelectedSex('hot')}
                    >
                        <img src={Hot} alt="hot" />
                        <p>Hot</p>
                    </div>
                    <div
                        className={`page4__card ${selectedSex === 'trendy' ? 'active' : ''}`}
                        onClick={() => setSelectedSex('trendy')}
                    >
                        <img src={Trendy} alt="trendy" />
                        <p>Trendy</p>
                    </div>
                </div>
                <div className="page4__wrapper-text-question">
                    <p>What is your email address?</p>
                </div>
                <div className="page4__wrapperinput">
                    <input
                        type="text"
                        placeholder="Type your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="page4__wrapper-text">
                    <p>Email is required for registration.</p>
                </div>
                <div className="page4__button-continue">
                    <button onClick={handleContinue}>CONTINUE →</button>
                </div>
            </div>
        </>
    );
};

export default Page4;
