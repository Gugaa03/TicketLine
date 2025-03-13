"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./MainEvents.css";
const MainEvents = (props) => {
  const eventsProp = props.events[0][1];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (eventsProp !== null) {
      // Filter out expired events (events whose endDate is past the current date)
      // const filteredEvents = eventsProp.filter(event => new Date(event.endDate) >= new Date());

      // Sort events by startDate (ascending order)

      const sortedEvents = eventsProp.sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      );

      setEvents(sortedEvents);
    }
  }, [eventsProp]);

  return (
    <div className="mainevents-container">
      <div className="mainevents-container-title">Next Future Events</div>
      <div className="mainevents-container-events">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <Link key={event.id} href={`/Events/${event.id}`}>
              <img src={event.photo} alt={event.name} className="event-image" />
            </Link>
            <div className="event-details">
              <h2 className="event-name">
                {event.name} <span className="event-type">{event.type}</span>
              </h2>
              <p className="event-description">{event.description}</p>
              <div className="event-line">
                <p className="event-location">Location: {event.location}</p>
                <p className="event-capacity">Capacity: {event.capacity}</p>
              </div>
              <p className="event-dates">
                Date: {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </p>
              <p className="event-price">Price: €{event.price.toFixed(2)}</p>{" "}
              {/* New price element */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainEvents;
