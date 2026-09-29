import { useState } from "react";

export default function UserAccountPane() {
  const [name, setName] = useState("Demo Learner");
  const [email, setEmail] = useState("learner@example.com");
  const [phone, setPhone] = useState("000-000-0000");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveProfile = () => alert("Profile updated (mock).");
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) return alert("Passwords do not match.");
    alert("Password updated (mock).");
  };

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="bg-white border rounded-2xl shadow-md p-6 flex flex-col gap-8">

        <h1 className="text-2xl font-bold text-kbs-blue">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 text-sm">Full Name</label>
            <input type="text" className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-kbs-blue" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <input type="email" className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-kbs-blue" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Phone</label>
            <input type="text" className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-kbs-blue" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
        </div>

        <button className="btn-type-3 px-6 py-2 rounded-lg w-fit" onClick={handleSaveProfile}>Save Profile</button>

        <div className="border-t mt-6"></div>

        <h2 className="text-2xl font-bold text-kbs-blue">Change Password</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="password" placeholder="New Password" className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" className="border p-2 rounded-lg focus:ring-2 focus:ring-kbs-blue" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        <button className="btn-type-2 px-6 py-2 rounded-lg w-fit" onClick={handlePasswordChange}>Update Password</button>

      </div>
    </div>
  );
}
