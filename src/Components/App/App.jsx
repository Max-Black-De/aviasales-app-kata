import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTicketsData } from '../../store/apiTicketsService/apiTicketsService';
import { Header } from '../app-header'
import { AllContent } from '../main-content'

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTicketsData())
  }, [dispatch])
  
  return (
    <div className={styles.App}>
      <div className={styles['App-wrapper']}>
        <Header />
        <AllContent />
      </div>
    </div>
  );
}

export default App;
