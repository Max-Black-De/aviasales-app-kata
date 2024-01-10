import { createSlice } from '@reduxjs/toolkit'

export const sortBtnsSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      cheapest: true,
      faster: false,
      optimal: false
    }
  },
  reducers: {
    sortTickets: (state, action) => {
      console.log(action)
      switch (action.payload.name) {
        case 'FAST':
          state.filter = {
            cheapest: true,
            faster: false,
            optimal: false
            }
          break;
        case 'CHEAP':
          state.filter = {
            cheapest: false,
            faster: true,
            optimal: false
            }
          break;
        case 'OPTIMAL':
          state.filter = {
            cheapest: false,
            faster: false,
            optimal: true
            }
          break;
      
        default:
          break;
      }
    }
  }
});

export const { sortTickets } = sortBtnsSlice.actions

export default sortBtnsSlice.reducer
