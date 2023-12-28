import { Header } from '../app-header'
import { AllContent } from '../main-content'

import './App.scss';

function App() {

  // async function getId (){
  //   const res = await fetch('https://aviasales-test-api.kata.academy/search')
  //   const body = await res.json()
  //   console.log(body)
  //   return body.searchId
  // };
  // async function getTickets (){
  //   const id = await getId()
  //   const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
  //   const body = await res.json()
  //   console.log(body.tickets)
  // };
  // getTickets()
  return (
    <div className="App">
      <div className='App-wrapper'>
        <Header />
        <AllContent />
      </div>
    </div>
  );
}

export default App;
