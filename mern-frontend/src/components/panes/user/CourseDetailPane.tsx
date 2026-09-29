import { useState, useEffect } from "react";
import LessonSkeleton from "../../skeleton-loaders/UserDashboard/LessonSkeleton";
import { ASSET_PATH } from "../../../../utils/materials";
import type { UserDemoCourse } from "./MyCoursesPane";

const DEFAULT_COURSE: UserDemoCourse = {
  id: "sample-course",
  name: "Entrepreneurship & Small Business Management",
  description: "Learn how to build, launch, and scale a successful business with practical strategies and real-world principles.",
  progress: 20,
  image: ASSET_PATH("stickers/cv_drafting.png"),
};

type Lesson = {
  id: string;
  title: string;
  completed: boolean;
};

export default function CourseDetailPane({ course }: { course: UserDemoCourse | null }) {
  const selectedCourse = course ?? DEFAULT_COURSE;
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Fetch mock: Replace with API later
    const timer = setTimeout(() => {
      const lessonTitles = selectedCourse.name === "Business Planning & Growth"
        ? ["Shape Your Business Idea", "Build a Practical Business Plan", "Plan Your Finances", "Find Your First Customers", "Measure and Grow"]
        : ["Introduction to Entrepreneurship", "How to Start a Small Business", "Managing Finances & Cashflow", "Marketing & Customer Acquisition", "Scaling Your Business"];
      setLessons(lessonTitles.map((title, index) => ({ id: String(index + 1), title, completed: index === 0 })));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedCourse.name]);

  const toggleComplete = (id: string) => {
    setLessons(prev =>
      prev.map(l => (l.id === id ? { ...l, completed: !l.completed } : l))
    );
  };

  // Calculate progress
  const progress = lessons.length
    ? Math.round(
        (lessons.filter(l => l.completed).length / lessons.length) * 100
      )
    : 0;

  return (
    <div className="p-8 flex flex-col gap-6 w-full">

      <h1 className="text-2xl font-bold text-kbs-blue bg-white/95 rounded-xl shadow-xl p-2 w-50">Courses Details</h1>

      {/* Header — like Coursera */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">
        
        {/* Thumbnail */}
        <div className="w-full md:w-1/4 h-40 md:h-full overflow-hidden rounded-lg">
          <img
            src={selectedCourse.image}
            alt={selectedCourse.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Course Info */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-2xl font-bold text-kbs-blue">
              {selectedCourse.name}
            </h1>

            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {selectedCourse.description}
            </p>
          </div>

          {/* Progress */}
          <div className="mt-4">
            <p className="text-sm text-gray-700 mb-1 font-medium">
              {loading ? "Loading progress…" : `${progress}% Completed`}
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gold/95 h-3 rounded-full transition-all"
                style={{ width: `${loading ? 0 : progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <h2 className="text-xl font-semibold text-white">Modules</h2>

      <div className="grid gap-4 sm:grid-cols-1">

        {loading ? (
          <LessonSkeleton />
        ) : (
          lessons.map(lesson => (
            <div
              key={lesson.id}
              className="bg-white border rounded-xl shadow-md p-4
                         flex flex-col md:flex-row justify-between
                         items-start md:items-center gap-4
                         hover:shadow-lg transition-shadow"
            >

              {/* Lesson Title */}
              <div>
                <h2 className="font-semibold text-lg">{lesson.title}</h2>
              </div>

              {/* Action Button */}
              <button
                onClick={() => toggleComplete(lesson.id)}
                className={`px-4 py-2 rounded-lg text-white transition-all
                  ${
                    lesson.completed
                      ? "bg-gold/95"
                      : "bg-gray-600 hover:bg-gray-700"
                  }
                `}
              >
                {lesson.completed ? "Completed" : "Mark Complete"}
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
