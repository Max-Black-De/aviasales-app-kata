import './flight-rout-info.css'


function FlightRoutInfo() {
  return (
    <ul className='flight-details'>
      <li className='flight-details__rout'>
        <p className='flight-details__duration-place flight-details__top'>MOW – HKT</p>
        <p className='flight-details__duration-hours flight-details__bottom'>10:45 – 08:00</p>
      </li>
      <li className='flight-details__duration'>
        <p className='flight-details__duration-tittle flight-details__top'>В пути</p>
        <p className='flight-details__duration-time flight-details__bottom'>21ч 15м</p>
      </li>
      <li className='flight-details__stops'>
        <p className='flight-details__stops-tittle flight-details__top'>2 пересадки</p>
        <p className='flight-details__stops-city flight-details__bottom'>HKG, JNB</p>
      </li>
    </ul>
  )
};

export default FlightRoutInfo;