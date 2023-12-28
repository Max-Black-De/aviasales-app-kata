import './flight-card.scss'

// import s7airlinesLogo from '../../images/s7airlinesLogo.svg'
import {FlightRoutInfo} from '../flight-rout-info';

const airLogoLink = 'https://pics.avs.io/99/36/FV.png'


function FlightCard() {
  return(
    <li className='flights-body__item flight-card'>
      <div className='flight-body_priceLogo'>
        <h1 className='flight-prise'>13 400 ₽</h1>
        <img className='company-logo' src={airLogoLink} alt='air company logo'></img>
      </div>

      <div className='flight-body__rout'>
        <FlightRoutInfo />
        <FlightRoutInfo />
      </div>
    </li>
  )
};

export default FlightCard;