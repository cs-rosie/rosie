import * as types from '../Constants/actionTypes';

const initialState = {
  vendors: ['Fedex', 'UPS', 'USPS', 'DHL', 'Milk&Eggs'],
  appointments: [],
  events: [{}, {}],
  currentDate: '04-16-2018',
  todaysAppointments: []
};

function appointmentReducer(state = initialState, action) {
  let todaysAppointments;
  let appointments;
  switch (action.type) {
    case types.SYNC_DB:
      appointments = action.data;
      todaysAppointments = appointments[state.currentDate];
      return {
        ...state,
        todaysAppointments,
        appointments
      };
    default:
      return state;
  }
}

export default appointmentReducer;
