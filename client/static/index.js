// This is the event object we need to create to add to GOOGLE Calendar
let event = {
  summary: 'New Test100',
  location: '800 Howard St., San Francisco, CA 94103',
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: '2018-05-16T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  end: {
    dateTime: '2018-05-17T17:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  // 'recurrence': [
  //   'RRULE:FREQ=DAILY;COUNT=2'
  // ],
  attendees: [{ email: 'lpage@example.com' }, { email: 'sbrin@example.com' }],
  reminders: {
    useDefault: false,
    overrides: [{ method: 'email', minutes: 24 * 60 }, { method: 'popup', minutes: 10 }],
  },
};

// Client ID and API key from the Developer Console
let CLIENT_ID = '379439708310-f3atk4bffsnr1u8rqhmk8kpfu5jonfje.apps.googleusercontent.com';
let API_KEY = 'AIzaSyDTkHmq6OTj3ZvL_3WPk_XXGjEn-jAy11c';

// Array of API discovery URLs for APIs
let DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be included, separated by spaces.
// The following scope us for Read and Write access
let SCOPES = ' https://www.googleapis.com/auth/calendar';

// DOM buttons
let authorizeButton = document.getElementById('authorize-button');
let createNewEvent = document.getElementById('newEvent-button');
let sendSlackMessage = document.getElementById('sendMessage');
let textInput = document.getElementById('textInput').value;

sendSlackMessage.onclick = () => {
  fetch('/sendSlack', {
    method: 'POST',
    body: JSON.stringify({ test: 'hello Pauline' }), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
};

// On load, called to load the OAuth2.0 library and API client library.
let handleClientLoad = () => {
  gapi.load('client:auth2', initClient);
};

// Initializes the API client library and sets up sign-in state listeners.
let initClient = () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(() => {
      // calls the OAuth function
      authorizeButton.onclick = handleAuthClick;

      // Listen for changes in printCalendarObj function
      gapi.auth2.getAuthInstance().isSignedIn.listen(printCalendarObj);
      // Passing in the evaluated result of OAuth verification boolean value
      printCalendarObj(gapi.auth2.getAuthInstance().isSignedIn.get());
      // Uses events.insert method on google api to insert event object to primary calendar
      createNewEvent.onclick = () => {
        let request = gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: event,
        });

        // calls the request funciton
        request.execute(event => {});
      };
    });
};

// Prints calendarObj if arguments is true
let printCalendarObj = (isSignedIn) => {
  console.log('PrintCalendarObj ran');

  if (isSignedIn) {
    console.log(' user is signed in PrintCalendarObj will print ');
    listUpcomingEvents();
  }
};

// Sign in the user upon button click.
let handleAuthClick = event => {
  gapi.auth2.getAuthInstance().signIn();
};

// Sign out the user upon button click.
let handleSignoutClick = event => {
  gapi.auth2.getAuthInstance().signOut();
};

// Print the summary and start datetime/date of the next 30 events in the
// authorized user's calendar.
let listUpcomingEvents = () => {
  gapi.client.calendar.events
    .list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 30,
      orderBy: 'startTime',
    })
    .then((res) => {
      fetch('/addEvents', {
        method: 'POST',
        body: JSON.stringify(res.result.items), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      console.log(res.result.items, '<===== this is the response');
    });
};
