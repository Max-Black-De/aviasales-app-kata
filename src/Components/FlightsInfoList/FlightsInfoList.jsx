import './FlightsInfoList.css'

import { FlightCard } from '../FlightCard'


function FlightsInfoList() {
  return (
    <ul className='flights-info__list'>
    {/* коллекция */}
      <FlightCard />
    </ul>
  )
};

export default FlightsInfoList;