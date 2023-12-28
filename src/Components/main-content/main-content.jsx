import './main-content.scss';
import { FilterBox } from '../filter-box';
import { FlightsData } from '../flights-data';
import allContentClass from '../hoc/allContentClass';


function AllContent() {
  return (
    <>
      <div className='App__content-wrapper'>
        <FilterBox />
        <FlightsData />
      </div>
    </>
  );
}

export default allContentClass(AllContent, 'App__content');
