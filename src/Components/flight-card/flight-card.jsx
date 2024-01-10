import style from './flight-card.module.scss'
import { v4 as key } from 'uuid';
import { FlightRoutInfo } from '../flight-rout-info';

function FlightCard({ price, carrier, segments}) {
  return (
    <li className={style['flight-card']}>
      <div className={style['flight-card_priceLogo']}>
        <h1 className={style['flight-card-prise']}>{price.toLocaleString('Ru-ru')} ₽</h1>
        <img className={style['company-logo']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt='air company logo'></img>
      </div>

      <div className={style['flight-body__rout']}>
        {segments.map(segment => (
          <FlightRoutInfo key={key()} {...segment}/>
        ))
        }
      </div>
    </li>
  )

};

export default FlightCard;