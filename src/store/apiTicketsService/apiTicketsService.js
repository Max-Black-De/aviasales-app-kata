import { createAsyncThunk } from "@reduxjs/toolkit";

const _apiBase = 'https://aviasales-test-api.kata.academy'
const _searchId = async () => {
  const response = await fetch(`${_apiBase}/search`)
  const data =  await response.json()
  return data.searchId
}
export const fetchTicketsData = createAsyncThunk(
  'tickets/fetchTickets',
  async function(){
    const response = await fetch(`${_apiBase}/tickets?searchId=${await _searchId()}`)
    const data = await response.json()
    return data;
  }
)
// export const fetchCarrierLogo = createAsyncThunk(
//   'logo/fetchLogo',
//   async function(){
//     const response = await fetch(`https://pics.avs.io/99/36/${carrier}.png`)
//     const data = await response.json()
//     return data;
//   }
// )