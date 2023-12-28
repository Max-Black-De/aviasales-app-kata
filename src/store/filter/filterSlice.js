import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stops: {
    all: false,
    no: false,
    one: false,
    two: false,
    three: false
  },
  params: {
    cheapest: true,
    faster: false,
    optimal: false
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload
      // const { no, one, two, three } = state.stops
      // console.log(no, one, two, three)
      switch (name) {
        case 'ALL':
          state.stops = 
          {
            all: value,
            no: value,
            one: value,
            two: value,
            three: value
          }
          break;
        case 'NO':
          state.stops.no = value
          break;
        case 'ONE':
          state.stops.one = value
          break;
        case 'TWO':
          state.stops.two = value
          break;
        case 'THREE':
          state.stops.three = value
          break;
      
        default:
          break;
      }
      
      if(!value) {
        state.stops.all = false
      } else if(state.stops.no & state.stops.one & state.stops.two & state.stops.three) {
        state.stops.all = true
      }
    },
    sortTickets: (state, action) => {
      switch (action.payload) {
        case 'FAST':
          state.params = {
            cheapest: true,
            faster: false,
            optimal: false
            }
          break;
        case 'CHEAP':
          state.params = {
            cheapest: false,
            faster: true,
            optimal: false
            }
          break;
        case 'OPTIMAL':
          state.params = {
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

export const { changeFilter, sortTickets } = filterSlice.actions

export default filterSlice.reducer