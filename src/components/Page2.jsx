
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPages from '../components/HeaderPages.jsx'


const Page2 = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  
    const handleContinue = () => {
      if (username.trim() !== '') {
        navigate('/step-3');
      } else {
        alert('Please enter your name before continuing.');
      }
    };
    return (

        <>
            <div className="page2">
                <HeaderPages />
                <div className='page2__question_container'>
                    <div className="page2__wrapper-headtext">
                        <p>What name should users call you?</p></div>
                    <div className="page2__wrapperinput">
                        <input
                            type="text"
                            placeholder='Type your username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="page2__wrapper-text">
                        <p>You don’t have to use your real name – feel free to use a nickname. You can change it anytime.</p>
                    </div>
                    <div className="page2__button-continue">
                    <button onClick={handleContinue}>CONTINUE →</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Page2;