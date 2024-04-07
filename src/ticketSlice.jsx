import { createSlice } from '@reduxjs/toolkit';

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    tickets: [],
  },
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload);
    },
    closeTicket: (state, action) => {
      state.tickets = state.tickets.map(ticket =>
        ticket.id === action.payload ? { ...ticket, status: 'closed' } : ticket
      );
    },
  },
});

export const { addTicket, closeTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
