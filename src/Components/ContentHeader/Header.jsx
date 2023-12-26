import './Header.css';
import mainAirplane from "../../images/mainAirplane.svg";

function Header() {
  return (
    <header className='App__header'>
      <img className='app-logo' src={mainAirplane} alt='app logo'></img>
    </header>
  );
}

export default Header;
