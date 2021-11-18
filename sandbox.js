const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  "110800290100-b7mvrvl086knl4b99qh65lqq6i2qj81n.apps.googleusercontent.com",
  "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"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04OKo5IGYCRzbCgYIARAAGAQSNwF-L9IrVwK9AY6IZfdfCuY2rYUJ6vQPsAjHKjNkgYO0Iu5Jm5t1mrLmM0GmpP_bo-dN67jtZGQ",
});

const calendar = google.calendar({
  version: "v3",
  auth: oAuth2Client,
});

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

const event = {
  summary: "Dota With New Party", //title
  location: "rumah masing masing", //optional(?)
  description: 'Playing dota with party "OTW TO TI"',
  start: {
    dateTime: eventStartTime,
    timeZone: "UTC+7",
  },
  end: {
    dateTime: eventEndTime,
    timeZone: "UTC+7",
  },
  colorId: 1,
};

calendar.events.insert({ calendarId: "primary", resource: event }, (err) => {
    if(err) return console.error('Calendar event creation error: ', err)
    return console.log('Calender Event Created')
});
