import style from './flights-data.module.scss';
import { SortBtnsList } from '../sort-btns';
import { FlightCard } from '../flight-card';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Result } from 'antd';

function FlightsData() {
  const { ticketsData, status, error } = useSelector((state) => state.tickets.tickets)
  const filters = useSelector((state) => state.filter.filter)
  const connections = useSelector((state) => state.check.check)

  const [checkedData, setCheckedData] = useState([])
  const [end, setEnd] = useState(5)

  const { cheapest, faster, optimal } = filters
  const { all, no, one, two, three } = connections

  const btnOrDiv = () => {
    if((!all && !no && !one && !two && !three) || status === 'LOADING') {
      return  <div className={style['show-more-info-block']}>
                Выберите фильтры для получения информации об интересующих вас рейсах
              </div>
    }
      return  <button onClick={addFiveTickets} className={style['show-more-btn']}>
                Показать еще 5 билетов!
              </button>
  }

  const errorStat = () => {
    if(error) {
      return  <Result
                status="404"
                title="Sorry."
                subTitle="Something went wrong, please reload your page."
              />
    }
    return  <ul className={style['flights-data__body']}>
              {(checkedData.slice(0, end)).map((elem) => (
                <FlightCard key={uuid()}
                  {...elem}
                />
              ))
              }
            </ul>
  }

  useEffect(() => sortingFlyingsData(cheapest, faster, optimal), [all, no, one, two, three, cheapest, faster, optimal])

  const addFiveTickets = () => {
    setEnd((prevEnd) => prevEnd + 5)
  }
  const filterByCost = (allData) => {
    const cheapArr = allData.sort((a, b) => a.price - b.price)
    setCheckedData(cheapArr)
  }
  const filterByDuration = (allData) => {
    const fastArr = allData.sort((a, b) => 
      a.segments[0].duration +
      a.segments[1].duration -
      b.segments[0].duration -
      b.segments[1].duration
    )
    setCheckedData(fastArr)
  }
  const sortingByCheckBox = (arrData, connectValues, filterFn) => {
    if(!all) {
      arrData = arrData.filter((ticket) => {
        return ticket.segments.every((segment) => {
          return connectValues[segment.stops.length]
        })
      })
      filterFn(arrData)
    } else filterFn([...ticketsData])
  }
  const sortingFlyingsData = (cheapest, faster, optimal) => {
    const connectValues = Object.values({
      no,
      one,
      two,
      three
    })
    let arrData = [...ticketsData]

    if(cheapest) {
      sortingByCheckBox(arrData, connectValues, filterByCost)
    } else if(faster) {
      sortingByCheckBox(arrData, connectValues, filterByDuration)
    } else if (optimal) {
      sortingByCheckBox(arrData, connectValues, setCheckedData)
    } else setCheckedData(ticketsData)
  }

  return (
    <main className={style['flights-data']}>
      <header className={style['flights-data__header']}>
        <SortBtnsList />
      </header>
      {errorStat()}
      <footer className={style['flights-data__footer']}>
      {!error ? btnOrDiv() : null}
      </footer>
    </main>
  )
};

export default FlightsData;