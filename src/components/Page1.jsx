import '../styles/StylePages.scss';
import Male_M from '../assets/Male_mobile.png';
import Female_M from '../assets/Female_mobile.png';
import { useState } from 'react';

const Page1 = () => {
    const [selectedSex, setSelectedSex] = useState(null);

    return (
        <div className="page1">
            <div className="page1__line">
                <div className="page1__line-white"></div>
            </div>
            <h1 className="page1__title">Glad you're here!</h1>
            <div className="page1__fotos-lines">
                <div className="page1__foto"></div>
            </div>
            <div className="page1__question">
                <p>Select your sex</p>
                <div className="page1__question-cards">
                    <div
                        className={`page1__card ${selectedSex === 'male' ? 'active' : ''}`}
                        onClick={() => setSelectedSex('male')}
                    >
                        <img src={Male_M} alt="Male" />
                        <p>Male</p>
                    </div>
                    <div
                        className={`page1__card ${selectedSex === 'female' ? 'active' : ''}`}
                        onClick={() => setSelectedSex('female')}
                    >
                        <img src={Female_M} alt="Female" />
                        <p>Female</p>
                    </div>
                </div>
                <div className="page1__button-continue">
                    <button>CONTINUE →</button>
                </div>
            </div>
        </div>
    );
};

export default Page1;
