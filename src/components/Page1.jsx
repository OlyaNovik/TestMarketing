import '../styles/StylePages.scss';
import Male_M from '../assets/Male_mobile.png';
import Female_M from '../assets/Female_mobile.png';
import { useState } from 'react';
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.png'
import photo6 from '../assets/photo6.png'
import photo7 from '../assets/photo7.png'
import photo8 from '../assets/photo8.png'
import photo9 from '../assets/photo9.png'


const Page1 = () => {
    const [selectedSex, setSelectedSex] = useState(null);
    const ContinueQuestion = () => {
        if(selectedSex !== null){
            console.log('click');
            
        }
    }
    return (
        <div className="page1">
            <div className="page1__line">
                <div className="page1__line-white"></div>
            </div>
            <h1 className="page1__title">Glad you're here!</h1>
            <div className="page1__fotos-lines">
                <div className="page1__foto"><img src={photo3} alt="photo3" /></div>
                <div className="page1__foto"><img src={photo4} alt="photo4" /></div>
                <div className="page1__foto"><img src={photo5} alt="photo5" /></div>
                <div className="page1__foto"><img src={photo6} alt="photo6" /></div>
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
    );
};

export default Page1;
