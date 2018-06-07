import * as types from '../Constants/actionTypes';

export const syncDB = data => ({
  type: types.SYNC_DB,
  data
});
export const checkIn = email => ({
  type: types.CHECK_IN,
  email
});
export const checkOut = email => ({
  type: types.CHECK_OUT,
  email
});
export const checkAppt = email => ({
  type: types.CHECK_APPOINTMENT,
  email
});
