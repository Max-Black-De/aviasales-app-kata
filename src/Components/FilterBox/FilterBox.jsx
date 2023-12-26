import './FilterBox.scss'

function FilterBox() {

  return(
    <aside className='filter-box'>
      <h2 className='filter-box__title'>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className='filter-box__checkbox'>
        <li className='filter-box__checkbox-item item-all'>
          <label><input type='checkbox'></input> Все </label>
        </li>
        <li className='filter-box__checkbox-item item-noConnection'>
          <label><input type='checkbox'></input> Без пересадок </label>
        </li>
        <li className='filter-box__checkbox-item item-oneConnection'>
          <label><input type='checkbox'></input> 1 пересадка </label>
        </li>
        <li className='filter-box__checkbox-item item-twoConnection'>
          <label><input type='checkbox'></input> 2 пересадки </label>
        </li>
        <li className='filter-box__checkbox-item item-threeConnection'>
          <label><input type='checkbox'></input> 3 пересадки </label>
        </li>
      </ul>
    </aside>
  )
};

export default FilterBox


