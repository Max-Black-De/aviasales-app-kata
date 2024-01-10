import style from'./filter-box.module.scss'
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
    <aside className={style['filter-box']}>
      <h2 className={style['filter-box__title']}>количество пересадок</h2>
      <form className={style['filter-box__checkbox']}>
        <label className={style['filter-box__checkbox-item']}>
          <input className={style['box-input']} checked={all} name='ALL'  type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className={style['filter-box__span-item']}></span>
          Все 
        </label>
        <label className={style['filter-box__checkbox-item']}>
          <input className={style['box-input']} checked={no} name='NO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className={style['filter-box__span-item']}></span>
          Без пересадок
        </label>
        <label className={style['filter-box__checkbox-item']}>
          <input className={style['box-input']} checked={one} name='ONE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className={style['filter-box__span-item']}></span>
          1 пересадка
        </label>
        <label className={style['filter-box__checkbox-item']} >
          <input className={style['box-input']} checked={two} name='TWO' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className={style['filter-box__span-item']}></span>
          2 пересадки 
        </label>
        <label className={style['filter-box__checkbox-item']}>
          <input className={style['box-input']} checked={three} name='THREE' type='checkbox' onChange={(e) => onDispatchChangeFilter(e)} />
          <span className={style['filter-box__span-item']}></span>
          3 пересадки
        </label>
      </form>
    </aside>
  )
};

export default FilterBox


