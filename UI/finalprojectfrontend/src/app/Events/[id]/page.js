"use client";
import React, { useState, useEffect } from "react";
import HttpUtilities from "@/app/Utilities/httputilities";
import { EventsAPI } from "eventsAPI";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import dayjs from "dayjs";
import "./EventDetails.css";

const EventsDetails = (props) => {
  const router = useRouter();
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCheckOut = () => {
    console.log("Checkout!");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      setIsLoggedIn(true);
    }
    // Fetch event details from the EventsAPI
    const fetchData = async () => {
      try {
        const _eventsAPI = new EventsAPI(null, "https://localhost:7008");
        const eventId = Number(params.id);
        const res = await _eventsAPI.apiEventId.get(eventId);

        if (res.body !== null) {
          console.log(res.body);
          const event = res.body;
          setEvent(event);
        }
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };
    fetchData();
  }, [params.id]);

  const handleDelete = async () => {
    const eventId = Number(params.id);

    try {
      await HttpUtilities.delete(`https://localhost:7008/api/Event/${eventId}`);
      router.push("/"); // Redirect to the landing page after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="event--page">
      <div className="header--center">
        <div className="logo-container">
          <Link href="/">
            <Image src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
          </Link>
        </div>
      </div>
      <div className="screen">
        <div className="wrapper-70">
          {event ? (
            <div className="container">
              <div className="image-container">
                <img
                  src={event.photo}
                  alt={event.name}
                  className="event-photo"
                />
              </div>
              <div className="event-details">
                <h1>
                  {event.name}
                  <span className="tag">{event.type}</span>
                </h1>

                <p>{event.description}</p>

                <div className="list">
                  <div className="time">
                    <div className="time--item">
                      <p>De:</p>
                      <span>
                        {dayjs(event.startDate).format("DD/MM/YYYY HH:mm")}
                      </span>
                    </div>
                    <div className="time--item">
                      <p>Até:</p>
                      <span>
                        {dayjs(event.endDate).format("DD/MM/YYYY HH:mm")}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="list--item">
                      Localização: <span>{event.location}</span>
                    </p>
                    <p className="list--item">
                      Capacidade: <span>{event.capacity}</span>
                    </p>
                    Posto por : <span>{event.createdBy}</span>
                    <p className="list--item">
                      Preço: <span>{event.price}€</span>
                    </p>
                  </div>
                </div>

                {event.capacity > 0 && (
                  <Link href={`/CheckOut/${event.id}`}>
                    <button onClick={handleCheckOut}>Comprar</button>
                  </Link>
                )}
                {isLoggedIn && <button onClick={handleDelete}>Excluir</button>}
              </div>
            </div>
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
