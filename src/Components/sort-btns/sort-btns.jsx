import styles from './sort-btns.module.scss'

import { useSelector, useDispatch } from 'react-redux';
import { sortTickets } from '../../store/filter/filterSlice'



function SortBtns() {
  // const classNames = require('classnames');
  const toggle = useSelector((state) => state.filter.params)
  const { cheapest, faster, optimal } = toggle
  const dispatch = useDispatch()
  const onSelectSort = (e) => {
    const { name } = e.target
    // const payload = {
    //   name,
    // }
    dispatch(sortTickets(name))
  }
  
  return (
  <ul className={styles['sort-buttons']}>
    <li className={styles['sort-buttons__item']}>
      <button
        name='FAST'
        onClick={(e) => onSelectSort(e)}
        className={[styles['sort-button_cheapest'], styles['sort-button'], styles[cheapest ? 'active' : '']].join(' ')}
      >Самый дешевый</button>
    </li>
    <li className={styles['sort-buttons__item']}>
      <button
        name='CHEAP'
        onClick={(e) => onSelectSort(e)}
        className={[styles['sort-button_fast'], styles['sort-button'], styles[faster ? 'active' : '']].join(' ')}
      >Самый быстрый</button>
    </li>
    <li className={styles['sort-buttons__item']}>
      <button
        name='OPTIMAL'
        onClick={(e) => onSelectSort(e)}
        className={[styles['sort-button_optimal'], styles['sort-button'], styles[optimal ? 'active' : '']].join(' ')}
      >Оптимальный</button>
    </li>
  </ul>
)
};

export default SortBtns;
