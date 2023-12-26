import './FlightCard.css'

import s7airlinesLogo from '../../images/s7airlinesLogo.svg'
import {FlightCardItem} from '../FlightCardItem';


function FlightCard() {
  return(
    <li className='flights-info__list-flight flight-card'>
      <div className='flight-info_priceLogo'>
        <h1 className='flight-prise'>13 400 ₽</h1>
        <img className='company-logo' src={s7airlinesLogo} alt='air company logo'></img>
      </div>

      <div className='flight-info__data'>
        <FlightCardItem />
        <FlightCardItem />
      </div>
    </li>
  )
};

export default FlightCard;