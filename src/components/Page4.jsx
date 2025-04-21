import HeaderPages from '../components/HeaderPages.jsx'
import Hot from '../assets/hot.png';
import Trendy from '../assets/trendy.png';
import { useState } from 'react';

const Page4 = () => {
    const [selectedSex, setSelectedSex] = useState(null);

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
                    <input type="text" placeholder='Type your email' />
                </div>

                <div className="page4__wrapper-text">
                    <p>Email is required for registration.</p>
                </div>
                <div className="page4__button-continue">
                    <button>CONTINUE →</button>
                </div>
            </div>
        </>
    )
}

export default Page4;