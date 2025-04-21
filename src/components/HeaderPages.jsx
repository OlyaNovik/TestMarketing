import Logo from '../assets/Logo.webp';


const HeaderPages = () => {
    return (
        <>

            <div className="headerpages">
                <div className="headerpages__header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="headerpages__line">
                    <div className="headerpages__line-white"></div>
                </div>
            </div>

        </>
    )
}

export default HeaderPages;