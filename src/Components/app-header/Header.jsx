import style from './Header.module.scss';
import mainAirplane from "../../images/mainAirplane.svg";

function Header() {
  return (
    <header className={style['App__header']}>
      <img className='app-logo' src={mainAirplane} alt='app logo'></img>
    </header>
  );
}

export default Header;
