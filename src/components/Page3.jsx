import Logo from '../assets/Logo.png';
import HeaderPages from '../components/HeaderPages.jsx';
import { useState } from 'react';
const Page3 = () => {

    const [fromAge, setFromAge] = useState('');
    const [toAge, setToAge] = useState('');

    const ages = Array.from({ length: 83 }, (_, i) => i + 18); // від 18 до 100
    return (
        <>
            <div className="page3">
                <HeaderPages />
                <div className="page3__wrapper-headtext">
                    <p>Select your age preference for women</p>
                </div>
                <div className="page3__wrapper-select">

                    <select value={fromAge} onChange={(e) => setFromAge(e.target.value)}>
                        <option value="">From</option>
                        {ages.map((age) => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>


                    <select value={toAge} onChange={(e) => setToAge(e.target.value)}>
                        <option value="">  To</option>
                        {ages
                            .filter((age) => !fromAge || age >= fromAge)
                            .map((age) => (
                                <option key={age} value={age}>{age}</option>
                            ))}
                    </select>

                </div>
                <div className="page3__wrapper-text-bold">
                    <p>What is your age?</p>
                </div>
                <div className="page3__wrapper-select-age">

                    <select >
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>




                    <select >
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>



                    <select >
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>

                </div>

                <div className="page3__wrapper-text">
                        <p>By proceeding, you confirm that you are fully legally capable of using this website and are at least 18 years old.</p>
                    </div>
                    <div className="page3__button-continue">
                        <button>CONTINUE →</button>
                    </div>
            </div>
        </>
    );
};

export default Page3;
