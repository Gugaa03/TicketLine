import React, { useEffect, useState } from "react";
import EventsAPI from "eventsAPI";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await EventsAPI.getEvents();
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          {event.photo && (
            <img src={event.photo} alt={event.name} width={200} height={150} />
          )}
          <a href={`/event/${event.id}`}>Ver evento</a>
        </div>
      ))}
    </div>
  );
};

export default Events;