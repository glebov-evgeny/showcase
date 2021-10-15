
import logo from './img/logo.gif';

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <a href="//ea-glebov.ru/" target="_blank" rel='noreferrer' className="header__logo">
                    <img src={logo} alt="logo" />
                    <p>Глебов Евгений<br/><span>фронтенд-разработчик</span></p>
                </a>
                <p className="header__title">React Showcase</p>
            </div>
        </header>
    )
}

export {Header}