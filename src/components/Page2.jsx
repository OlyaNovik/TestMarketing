
import Logo from '../assets/Logo.png';
import HeaderPages from '../components/HeaderPages.jsx'


const Page2 = () => {


    return (

        <>
            <div className="page2">
                <HeaderPages />
                <div className='page2__question_container'>
                    <div className="page2__wrapper-headtext">
                        <p>What name should users call you?</p></div>
                    <div className="page2__wrapperinput">
                        <input type="text" placeholder='Type your username' />
                    </div>
                    <div className="page2__wrapper-text">
                        <p>You don’t have to use your real name – feel free to use a nickname. You can change it anytime.</p>
                    </div>
                    <div className="page2__button-continue">
                        <button>CONTINUE →</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Page2;