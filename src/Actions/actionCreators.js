import * as types from '../Constants/actionTypes';

export const syncDB = data => ({
  type: types.SYNC_DB,
  data
});

export const checkIn = appointment => ({
  type: types.CHECK_IN,
  appointment
});

export const checkOut = appointment => ({
  type: types.CHECK_OUT,
  appointment
});

export const checkAppt = user => ({
  type: types.CHECK_APPOINTMENT,
  user
});
