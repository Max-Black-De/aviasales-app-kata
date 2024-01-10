import { createSlice } from '@reduxjs/toolkit'

export const checkBoxSlice = createSlice({
  name: 'check',
  initialState: {
    check: {
      all: false,
      no: false,
      one: false,
      two: false,
      three: false
    }
  },
  reducers: {
    changeFilter: (state, action) => {
      const { name, value } = action.payload
      switch (name) {
        case 'ALL':
          state.check = 
          {
            all: value,
            no: value,
            one: value,
            two: value,
            three: value
          }
          break;
        case 'NO':
          state.check.no = value
          break;
        case 'ONE':
          state.check.one = value
          break;
        case 'TWO':
          state.check.two = value
          break;
        case 'THREE':
          state.check.three = value
          break;

        default:
          break;
      }
      
      if(!value) {
        state.check.all = false
      } else if(state.check.no & state.check.one & state.check.two & state.check.three) {
        state.check.all = true
      }
    }
  }
});

export const { changeFilter } = checkBoxSlice.actions

export default checkBoxSlice.reducer
