import './filter-box.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../store/slices/checkBoxSlice';

function FilterBox() {
  const check = useSelector((state) => state.check.check)
  const { all, no, one, two, three } = check
  const dispatch = useDispatch()
  const onDispatchChangeFilter = (e) => {
    const { name, checked } = e.target
    dispatch(changeFilter({ name, value: checked }))
  }

  return(
    <aside className='filter-box'>
      <h2 className='filter-box__title'>количество пересадок</h2>
      <form className='filter-box__checkbox'>
        <label className='filter-box__checkbox-item item-all'>
          <input checked={all} name='ALL'  type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className='filter-box__span-item'></span>
          Все 
        </label>
        <label className='filter-box__checkbox-item item-noConnection'>
          <input checked={no} name='NO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className='filter-box__span-item'></span>
          Без пересадок
        </label>
        <label className='filter-box__checkbox-item item-oneConnection'>
          <input checked={one} name='ONE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className='filter-box__span-item'></span>
          1 пересадка
        </label>
        <label className='filter-box__checkbox-item item-twoConnection'>
          <input checked={two} name='TWO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className='filter-box__span-item'></span>
          2 пересадки 
        </label>
        <label className='filter-box__checkbox-item item-threeConnection'>
          <input checked={three} name='THREE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className='filter-box__span-item'></span>
          3 пересадки
        </label>
      </form>
    </aside>
  )
};

export default FilterBox


