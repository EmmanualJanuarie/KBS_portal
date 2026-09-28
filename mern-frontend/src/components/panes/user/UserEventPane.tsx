import { useEffect, useState } from "react";
import EventSkeleton from "../../skeleton-loaders/UserDashboard/EventSkeleton";
import { ASSET_PATH } from "../../../../utils/materials";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  theme: string;
  food: string;
  image: string;
  rsvp: boolean;
};

export default function UserEventPane() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setEvents([
        {
          id: "1",
          title: "Business Networking Summit",
          date: "2025-12-10",
          time: "10:00 AM – 3:00 PM",
          venue: "Cape Town Convention Centre",
          address: "Convention Square, Cape Town",
          theme: "Entrepreneurship & Innovation",
          food: "Light snacks & refreshments provided",
          image: ASSET_PATH("stickers/interview_prep.png"),
          rsvp: false
        },
        {
          id: "2",
          title: "Startup Pitch Day",
          date: "2025-12-15",
          time: "12:00 PM – 5:00 PM",
          venue: "KBS Innovation Hub",
          address: "87 Marine Drive, Port Elizabeth",
          theme: "Pitching, Funding & Growth",
          food: "Full catered lunch included",
          image: ASSET_PATH("stickers/financial_Literacy.png"),
          rsvp: true
        }
      ]);

      setLoading(false);
    }, 800);
  }, []);

  const toggleRSVP = (id: string) => {
    setEvents(prev =>
      prev.map(ev => (ev.id === id ? { ...ev, rsvp: !ev.rsvp } : ev))
    );
  };

  return (
    <div className="p-8 flex flex-col gap-6 w-full">
      <h1 className="text-2xl font-bold text-kbs-blue bg-white/95 rounded-xl shadow-xl p-2 w-56">Upcoming Events</h1>

      {loading ? (
        <EventSkeleton />
      ) : events.length === 0 ? (
        <div className="text-gray-500">No events available.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {events.map(ev => (
            <div
              key={ev.id}
              className="bg-white rounded-xl shadow-md border hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-40 md:h-36 overflow-hidden">
                <img
                  src={ev.image}
                  alt="event banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-lg font-bold text-kbs-blue">
                  {ev.title}
                </h2>

                <div className="flex flex-col gap-1 text-gray-600 text-sm">
                  <p><span className="font-semibold">Date:</span> {ev.date}</p>
                  <p><span className="font-semibold">Time:</span> {ev.time}</p>
                  <p><span className="font-semibold">Venue:</span> {ev.venue}</p>
                  <p><span className="font-semibold">Address:</span> {ev.address}</p>
                  <p><span className="font-semibold">Theme:</span> {ev.theme}</p>
                  <p><span className="font-semibold">Food:</span> {ev.food}</p>
                </div>

                {/* RSVP Button */}
                <button
                  onClick={() => toggleRSVP(ev.id)}
                  className={`mt-3 w-full py-2.5 rounded-lg font-medium text-white transition-all
                    ${
                      ev.rsvp
                        ? "bg-gold/95"
                        : "bg-gold/95"
                    }
                  `}
                >
                  {ev.rsvp ? "Attending ✓" : "RSVP"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
