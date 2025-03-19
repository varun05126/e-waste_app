import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import Contact from "./Contact";
import Team from "./Team";
import Signup from "./Signup";
import Notifications from "./Notifications";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="p-4 bg-blue-500 text-white flex justify-between">
          <Link to="/">Home</Link>
          <Link to="/dashboard">User Dashboard</Link>
          <Link to="/admin">Admin Dashboard</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/team">Team</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold">Welcome to E-Waste Collection</h1>
      <p className="text-lg mt-4">Efficient and eco-friendly e-waste pickup services at your doorstep.</p>
      <p className="text-md mt-2 max-w-2xl mx-auto">We provide an easy and responsible way to recycle electronic waste, helping to reduce environmental pollution and promote sustainability. Schedule a pickup and contribute to a greener planet today.</p>
      <div className="mt-6">
        <Link to="/pickup" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">Request a Pickup</Link>
      </div>
      <div className="mt-10 flex justify-center">
        <img src="/ewaste-illustration.png" alt="E-Waste Recycling" className="w-96" />
      </div>
    </div>
  );
}

function UserDashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">User Dashboard</h2>
      <p>View and manage your pickup requests here.</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Requests</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2">Schedule Pickup</button>
      </div>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p>Manage and oversee e-waste pickup requests.</p>
      <div className="mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Manage Requests</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg ml-2">User Reports</button>
      </div>
    </div>
  );
}

function FeedbackForm() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Feedback Form</h2>
      <p className="text-center text-md mt-2">We value your feedback. Let us know your thoughts!</p>
      <form className="mt-4">
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Write your feedback here..."
          rows="4"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <p className="text-center text-md mt-2">Access your account and manage e-waste pickup requests.</p>
      <form className="mt-4">
        <select className="w-full p-2 border rounded-md mb-2">
          <option>User</option>
          <option>Admin</option>
        </select>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mb-2" required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md mb-2" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
      </form>
      <p className="text-center mt-2">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
    </div>
  );
}
