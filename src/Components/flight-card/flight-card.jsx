import './flight-card.scss'
import { v4 as key } from 'uuid';
import { FlightRoutInfo } from '../flight-rout-info';

function FlightCard({ price, carrier, segments}) {
  return (
    <li className='flights-body__item flight-card'>
      <div className='flight-body_priceLogo'>
        <h1 className='flight-prise'>{price.toLocaleString('Ru-ru')} ₽</h1>
        <img className='company-logo' src={`https://pics.avs.io/99/36/${carrier}.png`} alt='air company logo'></img>
      </div>

      <div className='flight-body__rout'>
        {segments.map(segment => (
          <FlightRoutInfo key={key()} {...segment}/>
        ))
        }
      </div>
    </li>
  )

};

export default FlightCard;