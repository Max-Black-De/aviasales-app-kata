import './flight-rout-info.scss'
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
    <ul className='flight-details'>
      <li className='flight-details__rout'>
        <p className='flight-details__duration-place flight-details__top'>{origin} – {destination}</p>
        <p className='flight-details__duration-hours flight-details__bottom'>{getRouteTimes()}</p>
      </li>
      <li className='flight-details__duration'>
        <p className='flight-details__duration-tittle flight-details__top'>В пути</p>
        <p className='flight-details__duration-time flight-details__bottom'>{hours}ч {minutes}м </p>
      </li>
      <li className='flight-details__stops'>
        <p className='flight-details__stops-tittle flight-details__top'> {stops.length !== 0 ? stops.length : null} {text()}</p>
        <p className='flight-details__stops-city flight-details__bottom'>{stop}</p>
      </li>
    </ul>
  )
};

export default FlightRoutInfo;