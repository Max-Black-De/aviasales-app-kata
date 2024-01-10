import style from './flight-rout-info.module.scss'
import { format } from 'date-fns';

function FlightRoutInfo({ origin, destination, date, duration, stops }) {
  const hours = Math.trunc(duration / 60)
  const minutes = duration - (hours * 60)
  const stop = stops.join(', ')

  const getRouteTimes = () => {
    const origDate = new Date(date);
    const destDate = new Date(origDate.getTime() + duration * 6e4);
    return `${format(origDate, 'HH:mm')} - ${format(destDate, 'HH:mm')}`;
  };

  const text = () => {
    if (stops.length === 0) {
      return 'Без пересадок'
    }
    else if (stops.length === 1) {
      return 'пересадка'
    }
    else return 'пересадки'
  }

  return (
    <ul className={style['flight-details']}>
      <li className={style['flight-details__rout']}>
        <p className={style['flight-details__top']}>{origin} – {destination}</p>
        <p className={style['flight-details__bottom']}>{getRouteTimes()}</p>
      </li>
      <li className={style['flight-details__duration']}>
        <p className={style['flight-details__top']}>В пути</p>
        <p className={style['flight-details__bottom']}>{hours}ч {minutes}м </p>
      </li>
      <li className={style['flight-details__stops']}>
        <p className={style['flight-details__top']}> {stops.length !== 0 ? stops.length : null} {text()}</p>
        <p className={style['flight-details__bottom']}>{stop}</p>
      </li>
    </ul>
  )
};

export default FlightRoutInfo;