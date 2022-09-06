import style from './header.module.scss';

const Header = () => {
    return (
        <nav className={style.container}>
            <div className={style.item}>Home</div>
            <div className={style.item}>Other Page</div>
        </nav>
    );
};

export default Header;
