/**
 * Allows ADMIN users to manage their account (no avatar section)
 *
 * @function MyAccountPane
 * @returns tsx script to render My Account Pane
 */

import { useState } from "react";

export default function MyAccountPane() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("admin@kbs.com");
  const [phone, setPhone] = useState("082-123-4567");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* Save Profile Info */
  const handleSaveProfile = () => {
    alert("Profile details saved (mock). Hook into backend 💪");
  };

  /* Change Password */
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password updated (mock). Connect to backend.");
  };

  return (
    <div className="p-8 w-full flex flex-col gap-8">

      {/* Main Card */}
      <div className="bg-white border rounded-2xl shadow-md p-8 flex flex-col gap-12">

        {/* Profile Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-kbs-blue">My Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="text"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <button
            className="btn-type-3 px-6 py-2 rounded-lg mt-2 w-fit"
            onClick={handleSaveProfile}
          >
            Save Profile
          </button>
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Password Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-kbs-blue">Change Password</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">New Password</label>
              <input
                type="password"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            className="btn-type-2 px-6 py-2 rounded-lg w-fit"
            onClick={handlePasswordChange}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
