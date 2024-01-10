import { createSlice } from "@reduxjs/toolkit";
import { fetchTicketsData } from "../apiTicketsService/apiTicketsService";

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: {
      ticketsData: [],
      status: null,
      stop: null,
      error: null
    }
  },
  reducers: {
    setTicketsData(state, action) {
      state.tickets.ticketsData = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(
      fetchTicketsData.pending, (state, action) => {
        state.tickets.status = 'LOADING'
        state.tickets.error = null
      })
      builder.addCase(
        fetchTicketsData.fulfilled, (state, action) => {
          state.tickets.ticketsData = action.payload.tickets
          state.tickets.stop = action.payload.stop
          state.tickets.status = 'RESOLVED'
      })
      builder.addCase(
        fetchTicketsData.rejected, (state, action) => {
          state.tickets.error = true
      }
    )
  }
})

export const { setTicketsData } = ticketsSlice.actions

export default ticketsSlice.reducer