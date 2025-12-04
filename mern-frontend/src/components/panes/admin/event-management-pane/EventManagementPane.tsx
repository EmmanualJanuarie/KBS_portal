import { useState, useEffect } from "react";
import React from "react";
import { MATERIALS } from "../../../../../utils/materials";
import EventSkeleton from "../../../skeleton-loaders/EventSkeleton";

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  venue: string;
  theme: string;
  date: string; // ISO string or date
  food: "Provided" | "BYO" | "None";
  category: string; // e.g., Networking, Workshop, Pitch
}

export default function EventManagementPane() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(false); // Show/hide form

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    venue: "",
    theme: "",
    date: "",
    food: "None" as "Provided" | "BYO" | "None",
    category: "",
  });

  const [editingEventId, setEditingEventId] = useState<number | null>(null);

  interface Button {
    icon: string;
    name: string;
    setEvent: () => void;
  }

  const buttons: Button[] = [
    {
      icon: MATERIALS.ICONS.ADD_ICON,
      name: "Add Event",
      setEvent() {
        setToggleBtn(prev => !prev);
        setEditingEventId(null); // Reset editing when opening the form
        setForm({
          title: "",
          description: "",
          location: "",
          venue: "",
          theme: "",
          date: "",
          food: "None",
          category: "",
        });
      },
    },
  ];

  useEffect(() => {
    setLoading(true);
    // Simulate fetching events from server
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "Tech Meetup",
          description: "Networking for developers",
          location: "Cape Town",
          venue: "WeWork Waterfront",
          theme: "Entrepreneurship & Tech",
          date: "2025-12-10",
          food: "Provided",
          category: "Networking",
        },
        {
          id: 2,
          title: "Startup Pitch Day",
          description: "Pitch your startup idea to investors",
          location: "Port Elizabeth",
          venue: "Nelson Mandela University",
          theme: "Startup Growth & Investment",
          date: "2025-12-15",
          food: "BYO",
          category: "Pitch",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.date || !form.location || !form.venue) {
      alert("Title, date, location, and venue are required");
      return;
    }

    if (editingEventId) {
      // Update existing
      setEvents(events.map(ev => ev.id === editingEventId ? { ...ev, ...form } : ev));
      setEditingEventId(null);
    } else {
      // Add new
      const newEvent: Event = { id: Date.now(), ...form };
      setEvents([...events, newEvent]);
    }

    setForm({
      title: "",
      description: "",
      location: "",
      venue: "",
      theme: "",
      date: "",
      food: "None",
      category: "",
    });
    setToggleBtn(false); // Hide form after submit
  };

  const handleEdit = (id: number) => {
    const ev = events.find(ev => ev.id === id);
    if (ev) {
      setForm({
        title: ev.title,
        description: ev.description,
        location: ev.location,
        venue: ev.venue,
        theme: ev.theme,
        date: ev.date,
        food: ev.food,
        category: ev.category,
      });
      setEditingEventId(id);
      setToggleBtn(true); // Show form when editing
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(ev => ev.id !== id));
    }
  };

  return (
    <>
      {/* Buttons */}
      <div className="flex bg-white border-b p-8 w-full justify-center lg:justify-end xl:justify-end">
        <div className="flex flex-row gap-10">
          {buttons.map((btn, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 btn-type-1 cursor-pointer"
              onClick={btn.setEvent}
            >
              <div className="shrink-0">
                <picture>
                  <img src={btn.icon} alt="icon" className="w-7" />
                </picture>
              </div>
              <div>{btn.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 w-full">
        {/* Form - show only if toggleBtn is true */}
        {toggleBtn && (
          <div className="mb-6 border p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold mb-2">{editingEventId ? "Edit Event" : "Create Event"}</h3>
            <div className="flex flex-col gap-2">
              <input name="title" placeholder="Event Title" value={form.title} onChange={handleChange} className="border p-2 rounded" />
              <textarea name="description" placeholder="Event Description" value={form.description} onChange={handleChange} className="border p-2 rounded" />
              <input name="location" placeholder="City/Region" value={form.location} onChange={handleChange} className="border p-2 rounded" />
              <input name="venue" placeholder="Venue" value={form.venue} onChange={handleChange} className="border p-2 rounded" />
              <input name="theme" placeholder="Event Theme" value={form.theme} onChange={handleChange} className="border p-2 rounded" />
              <input name="date" type="date" value={form.date} onChange={handleChange} className="border p-2 rounded" />
              <select name="food" value={form.food} onChange={handleChange} className="border p-2 rounded">
                <option value="None">No Food</option>
                <option value="Provided">Food Provided</option>
                <option value="BYO">Bring Your Own Food</option>
              </select>
              <input name="category" placeholder="Category (Networking, Workshop, Pitch, etc.)" value={form.category} onChange={handleChange} className="border p-2 rounded" />
              <button onClick={handleSubmit} className="btn-type-3 px-4 py-2 mt-2">
                {editingEventId ? "Update Event" : "Create Event"}
              </button>
            </div>
          </div>
        )}

        {/* Event List */}
        {loading ? (
          <EventSkeleton />
        ) : events.length === 0 ? (
          <div className="text-gray-500">No events created yet.</div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="overflow-x-auto hidden lg:block">
              <table className="min-w-full border border-gray-200 rounded-xl">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2">#</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Venue</th>
                    <th className="px-4 py-2">Theme</th>
                    <th className="px-4 py-2">Food</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((ev, idx) => (
                    <tr key={ev.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-2">{idx + 1}</td>
                      <td className="px-4 py-2">{ev.title}</td>
                      <td className="px-4 py-2">{ev.description}</td>
                      <td className="px-4 py-2">{ev.location}</td>
                      <td className="px-4 py-2">{ev.venue}</td>
                      <td className="px-4 py-2">{ev.theme}</td>
                      <td className="px-4 py-2">{ev.food}</td>
                      <td className="px-4 py-2">{ev.category}</td>
                      <td className="px-4 py-2">{ev.date}</td>
                      <td className="px-4 py-2 flex gap-2">
                        <button onClick={() => handleEdit(ev.id)} className="text-blue-500 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(ev.id)} className="text-red-500 hover:underline">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="flex flex-col gap-4 lg:hidden">
              {events.map((ev, _) => (
                <div
                  key={ev.id}
                  className="border rounded-xl bg-white p-4 shadow-sm flex flex-col gap-3"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{ev.title}</h3>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {ev.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">{ev.description || "No description"}</p>

                  <div className="text-sm flex flex-col gap-1">
                    <p><strong>Location:</strong> {ev.location}</p>
                    <p><strong>Venue:</strong> {ev.venue}</p>
                    <p><strong>Theme:</strong> {ev.theme || "—"}</p>
                    <p><strong>Food:</strong> {ev.food}</p>
                    <p><strong>Date:</strong> {ev.date}</p>
                  </div>

                  <div className="flex items-center justify-end gap-4 pt-2 border-t">
                    <button
                      onClick={() => handleEdit(ev.id)}
                      className="text-blue-600 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ev.id)}
                      className="text-red-500 font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </>
  );
}
