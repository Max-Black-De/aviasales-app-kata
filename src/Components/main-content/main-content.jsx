import './main-content.scss';
import { Result } from 'antd';
import { FilterBox } from '../filter-box';
import { FlightsData } from '../flights-data';
import allContentClass from '../hoc/allContentClass';
import { Offline, Online } from "react-detect-offline";




function AllContent() {
  return (
    <>
      <Online >
        <div className='App__content-wrapper'>
          <FilterBox />
          <FlightsData />
        </div>
      </Online>
      <Offline >
        <Result
          status="500"
          title="Sorry"
          subTitle="There is no Internet connection. Check your router and reload the page."
        />
      </Offline>
    </>
  );
}

export default allContentClass(AllContent, 'App__content');
