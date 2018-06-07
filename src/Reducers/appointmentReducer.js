import * as types from '../Constants/actionTypes';

const initialState = {
  vendors:
  [
    {
      name: 'Fedex',
      logo: 'https://www.more.com/sites/more.com/files/styles/slide/public/fedex2.jpg'
    }, {
      name: 'USPS',
      logo: 'https://uspsblog.com/wp-content/uploads/2015/11/USPS_Eagle-Symbol-web-size.png'
    }, {
      name: 'UPS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/United_Parcel_Service_logo_2014.svg/104px-United_Parcel_Service_logo_2014.svg.png'
    }, {
      name: 'Milk&Eggs',
      logo: 'https://cdn.shopify.com/s/files/1/1078/0310/t/45/assets/logo-retina.png?2820073375099413396'
    }
  ],
  appointments: [
    {
      _id: '5afe03e7e3b9cd76fa683427',
      description: 'Event Details:\nInvitee: Luis Ramirez\nInvitee Email: langelramirez@ucla.edu\n\nAdditional details:\nPhone Number:: 2132221345\n\nEvent Type Description:\nPlease bring your laptop with you. This interview will be conducted on-site at Codesmith HQ. The address is 5300Beethoven Street, Los Angeles, CA 90066.\n\nNote: Should you need to cancel or reschedule the event, we recommend you use the cancel and reschedule features from your Calendly Dashboard.',
      firstName: 'Luis',
      lastName: 'Ramirez',
      email: 'langelramirez@ucla.edu',
      summary: 'Luis Ramirez: Codesmith Technical Interview: On-site',
      type: 'techical',
      interviewer: 'fakexayvr@codesmith.io',
      start: '2018-05-17T21:45:00.000Z',
      end: '2018-05-17T22:45:00.000Z',
      __v: 0
    }, {
      _id: '5afe03e7e3b9cd76fa683428',
      description: 'Event Details:\nInvitee: Benjamin Gummelt\nInvitee Email: ben@codesmith.io\n\nAdditional details:\nPhone Number:: 8181234567\n\nEvent Type Description:\nSome description\nNote: Should you need to cancel or reschedule the event, we recommend you use the cancel and reschedule features from your Calendly Dashboard.',
      firstName: 'Benjamin',
      lastName: 'Gummelt',
      email: 'ben@codesmith.io',
      summary: 'Benjamin Gummelt: Codesmith Initial Chat: On-site',
      type: 'cultural',
      interviewer: 'fakeshanda@codesmith.io',
      start: '2018-05-17T23:00:00.000Z',
      end: '2018-05-18T00:00:00.000Z',
      __v: 0
    }, {
      _id: '5afe03e7e3b9cd76fa683428',
      description: 'Event Details:\nInvitee: Benjamin Gummelt\nInvitee Email: ben@codesmith.io\n\nAdditional details:\nPhone Number:: 8181234567\n\nEvent Type Description:\nSome description\nNote: Should you need to cancel or reschedule the event, we recommend you use the cancel and reschedule features from your Calendly Dashboard.',
      firstName: 'Benjamin',
      lastName: 'Gummelt',
      email: 'ben@codesmith.io',
      summary: 'Benjamin Gummelt: Codesmith Initial Chat: On-site',
      type: 'cultural',
      interviewer: 'fakeshanda@codesmith.io',
      start: '2018-05-17T23:00:00.000Z',
      end: '2018-05-18T00:00:00.000Z',
      __v: 0
    }
  ],
  events: [
    {
      _id: '5afe03e7e3b9cd76fa683429',
      summary: 'The Hard Parts: Asynchronous JavaScript (Event Loop)',
      type: 'public',
      start: '2018-05-18T01:00:00.000Z',
      end: '2018-05-18T02:00:00.000Z',
      __v: 0
    }
  ],
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
      appointments = state.appointments;
      
      let email = action.email;
      currentAppointments = appointments.filter(item => item.email == email);
      console.log(currentAppointments);
      return {
        ...state,
        currentAppointments
      };
    case types.CHECK_IN:
      
    default:
      return state;
  }
}

export default appointmentReducer;
