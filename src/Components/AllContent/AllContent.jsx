import './AllContent.css';
import { FilterBox } from '../FilterBox';
import { FlightsData } from '../FlightsData';
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
