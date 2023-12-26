import styles from './SortBtnsList.module.scss'

function SortBtnsList() {
  return (
  <ul className={styles['sort-buttons']}>
    <li className={styles['sort-buttons__item']}>
      <button className={[styles['sort-button_cheapest'], styles['sort-button'], styles['active']].join(' ')}>Самый дешевый</button>
    </li>
    <li className={styles['sort-buttons__item']}>
      <button className={[styles['sort-button_fast'], styles['sort-button']].join(' ')}>Самый быстрый</button>
    </li>
    <li className={styles['sort-buttons__item']}>
      <button className={[styles['sort-button_optimal'], styles['sort-button']].join(' ')}>Оптимальный</button>
    </li>
  </ul>
)
};

export default SortBtnsList;
