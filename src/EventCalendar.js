// EventCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = () => {
    const eventTitle = prompt('Enter event title:');
    const eventDetails = prompt('Enter event details:');

    if (eventTitle && eventDetails) {
      setEvents([...events, { date, title: eventTitle, details: eventDetails }]);
    }
  };

  const filteredEvents = events.filter(
    (event) => event.date.toDateString() === date.toDateString()
  );

  return (
    <div>
      <h2>Event Calendar</h2>
      <div>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      <div>
        <h3>Events for {date.toDateString()}:</h3>
        {filteredEvents.length > 0 ? (
          <ul>
            {filteredEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.title}</strong> - {event.details}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events for this date.</p>
        )}
      </div>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default EventCalendar;
