import { useState, useEffect } from "react";
import CourseSkeleton from "../../skeleton-loaders/UserDashboard/CourseSkeleton";

type Course = {
  id: string;
  name: string;
  description: string;
  progress: number; 
  image: string;
};

export default function MyCoursesPane() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCourses([
        {
          id: "1",
          name: "Cyber Security Basics",
          description: "Learn fundamentals of cybersecurity.",
          progress: 25,
          image: "/images/course-cyber.jpg",
        },
        {
          id: "2",
          name: "Fire Safety 101",
          description: "Basic fire safety training.",
          progress: 70,
          image: "/images/course-fire.jpg",
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-8 w-full flex flex-col gap-6">

      <h1 className="text-2xl font-bold  bg-white/95 rounded-xl shadow-xl p-2 w-40">My Courses</h1>

      {loading ? (
        <CourseSkeleton />
      ) : courses.length === 0 ? (
        <div className="text-gray-500">You are not enrolled in any courses yet.</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border rounded-xl shadow-md overflow-hidden 
              flex flex-col md:flex-row 
              hover:shadow-lg transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <div className="w-full md:w-1/4 h-40 md:h-auto overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h2 className="text-xl font-semibold">{course.name}</h2>
                <p className="text-gray-600 text-sm">{course.description}</p>

                {/* Progress Bar */}
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gold/95 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{course.progress}% completed</p>
              </div>

              {/* Action Buttons */}
              <div className="p-4 flex flex-row md:flex-col gap-2 justify-end md:justify-center">
                <button className="btn-type-3 px-4 py-2 rounded-lg w-full md:w-auto">
                  Go to Course
                </button>
                <button className="btn-type-2 px-4 py-2 rounded-lg w-full md:w-auto">
                  Unenroll
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
