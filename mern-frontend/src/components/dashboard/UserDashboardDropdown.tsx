import { useState, useRef, useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

type DropdownProps = {
  label: string;
  activeSection: string;
  onSelect: (id: string) => void;
};

export default function UserDashboardDropdown({ label, activeSection, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const buttons = [
    { id: "My Courses", name: "My Courses", _class: "sidebar-btn-type w-60" },
    { id: "Course Details", name: "Course Details", _class: "sidebar-btn-type w-60" },
    { id: "Events", name: "My Events", _class: "sidebar-btn-type w-60" },
    { id: "My Account", name: "My Account", _class: "sidebar-btn-type w-60" },
    {
      id: "Log Out",
      name: "Log Out",
      _class: "sidebar-logout w-60",
      event: () => {
        setTimeout(() => navigate("/"), 500);
      },
    },
  ];

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
