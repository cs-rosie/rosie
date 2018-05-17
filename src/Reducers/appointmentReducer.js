import * as types from '../Constants/actionTypes';

const initialState = {
  vendors: ['Fedex', 'UPS', 'USPS', 'DHL', 'Milk&Eggs'],
  appointments: [
    {
      type: 'Cultural Interview',
      title: 'Cultural Interview',
      firstName: 'Ben',
      lastName: 'Gummelt',
      email: 'Camaromelt@gmail.com',
      checkedIn: false
    },
    {
      type: 'Technical Interview',
      title: 'Technical Interview',
      firstName: 'Jonathan',
      lastName: 'Ko',
      email: 'jonathan.ko523@gmail.com',
      checkedIn: false
    }
  ],
  events: [{}, {}],
  currentDate: '05-17-2018',
  currentAppointments: []
};

function appointmentReducer(state = initialState, action) {
  let appointments;
  let currentAppointments;
  switch (action.type) {
    case types.SYNC_DB:
      appointments = action.data;
      return {
        ...state,
        appointments
      };
    case types.CHECK_APPOINTMENT:
      const { firstName, lastName, email} = action.user;
      let newArr = [];
     currentAppointments = this.state.appointments.filter(item => item.email === email);
     return {
      ...state,
      currentAppointments
    };
    default:
      return state;
  }
}

export default appointmentReducer;
