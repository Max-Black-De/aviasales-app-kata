import './filter-box.scss'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../store/filter/filterSlice'

export function FilterBox() {
  const check = useSelector((state) => state.filter.stops)
  const dispatch = useDispatch()
  const { all, no, one, two, three } = check
  const onDispatchChangeFilter = (e) => {
    const { name, checked } = e.target
    const payload = {
      name,
      value: checked
    }
    dispatch(changeFilter(payload))
  }

  return(
    <aside className='filter-box'>
      <h2 className='filter-box__title'>количество пересадок</h2>
      <form className='filter-box__checkbox'>
        <label className='filter-box__checkbox-item item-all'>
          <input checked={all} name='ALL'  type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} /> Все 
        </label>
        <label className='filter-box__checkbox-item item-noConnection'>
          <input checked={no} name='NO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          Без пересадок
        </label>
        <label className='filter-box__checkbox-item item-oneConnection'>
          <input checked={one} name='ONE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          1 пересадка
        </label>
        <label className='filter-box__checkbox-item item-twoConnection'>
          <input checked={two} name='TWO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          2 пересадки 
        </label>
        <label className='filter-box__checkbox-item item-threeConnection'>
          <input checked={three} name='THREE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          3 пересадки
        </label>
      </form>
    </aside>
  )
};

export default FilterBox


