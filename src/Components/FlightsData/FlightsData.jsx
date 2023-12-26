import './FlightsData.css'

import { FlightsDataHeader } from '../FlightsDataHeader';
import { FlightsDataFooter } from '../FlightsDataFooter';
import { FlightsInfoList } from '../FlightsInfoList';



function FlightsData() {
  return(
    <main className='flights-info'>
      <FlightsDataHeader />
      <FlightsInfoList />
      <FlightsDataFooter />
    </main>
  )
};

export default FlightsData;