"use client";
import HttpUtilities from "@/app/Utilities/httputilities";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function EnableEvents() {
  const [eventsToEnable, setEventsToEnable] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      setIsLoggedIn(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await HttpUtilities.get(
        "https://localhost:7008/DisabledEvents"
      );
      setEventsToEnable(res.data.$values);
      console.log(res.data.$values);
    } catch (error) {
      console.error("Error fetching disabled events:", error);
    }
  };

  const handleBtn = async (eventId) => {
    try {
      await HttpUtilities.post(`https://localhost:7008/EnableEvent/`, {
        eventId,
      });
      setEventsToEnable(eventsToEnable.filter((event) => event.id !== eventId));
      console.log(`Event with ID ${eventId} enabled`);
    } catch (error) {
      console.error("Error enabling event:", error);
    }
  };

  if (!isLoggedIn) {
    return null; // Renderiza nada se o usuário não estiver logado
  }

  return (
    <div className="event-page">
      <div className="header-center">
        <div className="logo-container">
          <Link href="/">
            <Image src="/LogoProjeto.png" alt="Logo" width={200} height={100} />
          </Link>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Enable Events</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Price</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventsToEnable.map((event) => (
                <tr key={event.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{event.name}</td>
                  <td className="px-4 py-2 border-b">{event.description}</td>
                  <td className="px-4 py-2 border-b">${event.price}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(event.startDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleBtn(event.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    >
                      Enable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EnableEvents;
