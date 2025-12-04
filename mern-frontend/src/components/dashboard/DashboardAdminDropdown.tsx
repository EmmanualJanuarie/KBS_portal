import { useState, useRef, useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

type DropdownProps = {
  label: string;
  activeSection: string;
  onSelect: (id: string) => void;
};

export default function DashboardAdminDropdown({ label, activeSection, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

    const buttons = [
        {id: "Metrics", name: "Metrics", _class: "sidebar-btn-type w-60"}, //DISPLAYS OVERALL METRIC DATA (PIECHARTS, PLOTS ..)
        {id: "Admin", name: "Admin", _class: "sidebar-btn-type w-60"}, // ADD NEW ADMINS/ ADD NEW USERS TO THE DASHBOARD // SHOWS ALSO WHO // CAN ALSO HANDLE USER REQUESTS
        {id: "Course Management", name: "Course Management", _class: "sidebar-btn-type w-60"}, // ADD NEW COURSES // EDIT COURSES 
        {id: "Assessment Management", name: "Assessment Management", _class: "sidebar-btn-type w-60"}, // CREATE ASSESSMENTS BASED ON COURSES
        {id: "Event Management", name: "Event Management", _class: "sidebar-btn-type w-60"}, // Determines events to users
        {id: "Resource Management", name: "Resource Management", _class: "sidebar-btn-type w-60"}, // Upload or manage files, documents, and media for users/courses
        {id: "My Account", name: "My Account", _class: "sidebar-btn-type w-60"}, // Allows ADMIN users to manage their account
        {id: "Log Out", name: "LOG OUT", _class: "sidebar-logout w-60", event: ()=> {
            setTimeout(()=>{
                navigate("/");
            }, 1000);
        }},
    ]

  return (
    <div className="relative inline-block text-left px-20" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center w-40 px-4 py-20 btn-type-round text-white  hover:bg-gold-200 focus:outline-none"
      >
        {label}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-90 p-10 rounded-md shadow-lg bg-gold/95 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1 flex flex-col gap-4">
            {buttons.map(({ id, name, _class, event }) => (
              <div key={id}>
                <ButtonComponent
                  name={name}
                  setClassName={`${_class} ${activeSection === id ? "sidebar-btn-type-active" : ""}`}
                  setOnClick={() => {
                    if (id === "Log Out") {
                      event?.();
                    } else {
                      onSelect(id);
                    }
                    setIsOpen(false); // close dropdown after click
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
