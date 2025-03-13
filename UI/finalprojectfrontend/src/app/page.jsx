"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "@/app/Components/Carousel/EmblaCarousel";
import MainEvents from "./Components/MainEvents/MainEvents";
import Footer from "./Components/Footer/Footer";
import { EventsAPI } from "eventsAPI";
import { API_ROUTES } from "@/app/Utilities/Constants/api";
import HttpUtilities from "@/app/Utilities/httputilities";
import "./globals.css";
import "../app/Components/Carousel/EmblaCarousel.css";

const OPTIONS = { loop: true };

function organizeEventsByDay(events) {
  const eventsByDay = events.reduce((acc, event) => {
    const eventDate = new Date(event.startDate);
    const day = new Date();

    if (!acc[day]) {
      acc[day] = [];
    }

    acc[day].push(event);

    return acc;
  }, {});

  return Object.entries(eventsByDay);
}

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [slides, setSlides] = useState([]);
  const [eventsByDay, setEventsByDay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _eventsAPI = new EventsAPI(null, "https://localhost:7008");
        const res = await _eventsAPI.apiEvent.get();
        console.log(res.body);
        if (res.body !== null) {
          const eventSlides = res.body.$values.map((event) => ({
            id: event.id,
            name: event.name,
            description: event.description,
            photo: event.photo,
          }));

          setSlides(eventSlides);
          setEventsByDay(organizeEventsByDay(res.body.$values));
        } else {
          console.error("Invalid response format:", res);
        }
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
  };
  const handleAdmin = () => {
    console.log("Admin");
  };
  const handleCreateEvent = () => {
    console.log("Evento criado!");
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const allEvents = eventsByDay.flatMap(([date, events]) =>
      events.map((event) => ({ ...event, date }))
    );

    if (searchQuery === "") {
      setFilteredEvents(allEvents);
    } else {
      setFilteredEvents(
        allEvents.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, eventsByDay]);

  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const date = event.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(event);
    return acc;
  }, {});

  return (
    <div className="content-wrapper">
      <div className="header">
        <div className="logo-container">
          <Image src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
        </div>
        <div className="search">
          <div className="search-container">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events..."
            />
            {searchQuery && (
              <div
                className={`search-events ${
                  Object.keys(groupedEvents).length > 0 ? "visible" : ""
                }`}
              >
                {Object.keys(groupedEvents).length > 0 ? (
                  Object.keys(groupedEvents).map((date) => (
                    <div key={date}>
                      {groupedEvents[date].map((event, index) => (
                        <Link href={`/Events/${event.id}`}>
                          <div key={index}>{event.name}</div>
                        </Link>
                      ))}
                    </div>
                  ))
                ) : (
                  <div>No events found</div>
                )}
              </div>
            )}
          </div>
        </div>
        {isLoggedIn ? (
          <div className="user-info">
            <h1>Bem-vindo, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
            <Link href="/CreateEvents">
              <button onClick={handleCreateEvent}>Criar Eventos</button>
            </Link>
            <Link href="/Admin/EnableEvents">
              <button onClick={handleAdmin}>Admin</button>
            </Link>
          </div>
        ) : (
          <div className="user-info">
            <div className="button-container">
              <Link href="/Login">
                <button>
                  <div>Login</div>
                </button>
              </Link>

              <Link href="/CreateEvents">
                <button onClick={handleCreateEvent}>Criar Eventos</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="screen-home">
        <div className="content">
          {slides.length > 0 ? (
            <EmblaCarousel slides={slides} options={OPTIONS} />
          ) : (
            <div className="loading">Loading Events...</div>
          )}
          {eventsByDay.length > 0 ? (
            <MainEvents events={eventsByDay} />
          ) : (
            <div className="loading">Loading Events...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
