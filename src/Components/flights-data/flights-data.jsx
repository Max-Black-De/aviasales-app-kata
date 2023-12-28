import './flights-data.css'

import { SortBtnsList } from '../sort-btns';
import { FlightCard } from '../flight-card'



function FlightsData() {
  return (
    <main className='flights-data'>
      <header className='flights-data__header'>
        <SortBtnsList />
      </header>
      <ul className='flights-data__body'>
        <FlightCard />
      </ul>
      <footer className='flights-data__footer'>
        <button className='show-more-btn'>Показать еще 5 билетов!</button>
      </footer>
    </main>
  )
};

export default FlightsData;