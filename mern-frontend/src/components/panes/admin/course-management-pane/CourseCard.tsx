import { useState } from "react";

type CourseCardProps = {
  id: number;
  courseName: string;
  courseDes: string;
  courseAuthor: string;
  courseImage?: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function CourseCard({
  id,
  courseName,
  courseDes,
  courseAuthor,
  courseImage,
  onEdit,
  onDelete,
}: CourseCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-sm relative">
      {/* Image section */}
      <div className="h-48 w-full relative">
        {courseImage ? (
          <img
            src={courseImage}
            alt={courseName}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center bg-gray-100 h-full w-full">
            <span className="text-gray-400">No Image</span>
          </div>
        )}

        {/* Ellipsis button */}
        <div className="absolute top-2 right-2">
          <button
            className="text-gray-700 hover:text-gray-900 text-xl p-1 rounded-full hover:bg-gray-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#x22EE; {/* Vertical ellipsis */}
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-20">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  onEdit(id);
                  setMenuOpen(false);
                }}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                onClick={() => {
                  onDelete(id);
                  setMenuOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Course details */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-900">{courseName}</h2>
        <p className="text-gray-600 text-sm">{courseDes}</p>
        <span className="text-gray-500 text-xs">Author: {courseAuthor}</span>
      </div>
    </div>
  );
}
