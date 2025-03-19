import React from "react";

export default function Signup() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <p className="text-center">Create an account to manage your e-waste pickups.</p>
      <form className="mt-4">
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md mb-2" required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mb-2" required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md mb-2" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}
