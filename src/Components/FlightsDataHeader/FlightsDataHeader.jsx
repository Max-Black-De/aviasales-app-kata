import { SortBtnsList } from '../SortBtnsList';
import './FlightsDataHeader.css'

function FlightsDataHeader() {
  return(
    <header className='flights-info__header'>
      <SortBtnsList />
    </header>
  )
};

export default FlightsDataHeader;
