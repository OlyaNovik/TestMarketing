import HeaderPages from '../components/HeaderPages.jsx'


const Page5 = () => {
    return (
        <>
            <div className="page5">
                <HeaderPages />
                <div className="page5__wrapper-headtext">
                    <p>Create your password</p>
                </div>
                <div className="page5__wrapperinput">
                    <input type="text" placeholder='Your password' />
                    <input type="text" placeholder='Confirm password' />

                </div>
                <div className="page5__wrapper-text">
                    <p>Passwords must be at least 8 characters long. You can recover passwords at any time using the email address you provided.</p>
                </div>
                <div className="page5__button-continue">
                    <button>CONTINUE →</button>
                </div>
            </div>
        </>
    )
}

export default Page5;