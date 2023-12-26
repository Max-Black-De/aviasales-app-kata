import './FlightCardItem.css'


function FlightCardItem() {
  return(
    <ul className='flight-info__details'>
    <li className='flight-info__rout'>
      <p className='flight-info__duration-place flight-info__top'>MOW – HKT</p>
      <p className='flight-info__duration-hours flight-info__bottom'>10:45 – 08:00</p>
    </li>
    <li className='flight-info__duration'>
      <p className='flight-info__duration-tittle flight-info__top'>В пути</p>
      <p className='flight-info__duration-time flight-info__bottom'>21ч 15м</p>
    </li>
    <li className='flight-info__stops'>
      <p className='flight-info__stops-tittle flight-info__top'>2 пересадки</p>
      <p className='flight-info__stops-city flight-info__bottom'>HKG, JNB</p>
    </li>
  </ul>
  )
};

export default FlightCardItem;