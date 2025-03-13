import React from "react";
import Link from "next/link";
import "./AdminPage.css";

function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link href="RegistrationForm">
          <div className="section bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-4">Registration Forms</h2>
            {/* Add content here */}
          </div>
        </Link>
        <Link href="/last-events">
          <div className="section bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-lbod msb-4">Finished Events</h2>
            {/* Add content here */}
          </div>
        </Link>
        <Link href="/available-editors">
          <div className="section bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-4">Available Editors</h2>
            {/* Add content here */}
          </div>
        </Link>
        <Link href="/Events-Ongoing">
          <div className="section bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-4">Events Ongoing</h2>
            {/* Add content here */}
          </div>
        </Link>
        <Link href="/Admin/EnableEvents">
          <div className="section bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-bold mb-4">Enable Events</h2>
            {/* Add content here */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
