import '../styles/StylePages.scss';
import Male_M from '../assets/Male_mobile.webp';
import Female_M from '../assets/Female_mobile.webp';
import { useState } from 'react';
import photo1 from '../assets/photo1.webp'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.webp'
import photo4 from '../assets/photo4.webp'
import photo5 from '../assets/photo5.webp'
import photo6 from '../assets/photo6.webp'
import photo7 from '../assets/photo7.webp'
import photo8 from '../assets/photo8.webp'
import photo9 from '../assets/photo9.webp'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
    const [selectedSex, setSelectedSex] = useState(null);
    const navigate = useNavigate();

    const ContinueQuestion = () => {
        if (selectedSex !== null) {
            navigate('/step-2');
        }  else {
            alert('Please select your sex before continuing.');
          }
    };
    return (
        <>
            <Header />

            <div className="page1">
                <div className="page1__line">
                    <div className="page1__line-white"></div>
                </div>
                <h1 className="page1__title">Glad you're here!</h1>


                <div className="page1__slider-container">
                    <div className="page1__slider-track">
                        <div className="page1__foto"><img src={photo1} alt="" /></div>
                        <div className="page1__foto"><img src={photo2} alt="" /></div>
                        <div className="page1__foto"><img src={photo3} alt="" /></div>
                        <div className="page1__foto"><img src={photo4} alt="" /></div>
                        <div className="page1__foto"><img src={photo5} alt="" /></div>
                        <div className="page1__foto"><img src={photo6} alt="" /></div>
                        <div className="page1__foto"><img src={photo7} alt="" /></div>
                        <div className="page1__foto"><img src={photo8} alt="" /></div>
                        <div className="page1__foto"><img src={photo9} alt="" /></div>

                        <div className="page1__foto"><img src={photo1} alt="" /></div>
                        <div className="page1__foto"><img src={photo2} alt="" /></div>
                        <div className="page1__foto"><img src={photo3} alt="" /></div>
                    </div>
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
                        <button onClick={ContinueQuestion}>CONTINUE →</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Page1;
