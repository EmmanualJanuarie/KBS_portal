import { useEffect, useState } from "react";
import { MATERIALS } from "../../../../../utils/materials";
import NewCourse from "./modals/NewCourse";
import CourseCard from "./CourseCard"; // Make sure this points to your CourseCard component
import CourseCardSkeleton from "../../../skeleton-loaders/CourseCardSkeleton";

export default function CourseManagementPane() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const [loading, setLoading] = useState(true);
          
      useEffect(() => {
          // Simulate data fetching
          const timer = setTimeout(() => setLoading(false), 1500);
          return () => clearTimeout(timer);
      }, []);

  // Dummy course data — business & entrepreneurship focused
const dummyCourses = [
  {
    id: 1,
    courseName: "Startup Fundamentals",
    courseDes: "Learn how to validate your business idea, build a minimum viable product, and pitch to investors.",
    courseAuthor: "Elena Roberts",
    courseImage: "https://picsum.photos/400/200?random=11",
  },
  {
    id: 2,
    courseName: "Business Strategy & Growth",
    courseDes: "Master strategic planning, market analysis, and scaling techniques to grow your business successfully.",
    courseAuthor: "Marcus Lee",
    courseImage: "https://picsum.photos/400/200?random=12",
  },
  {
    id: 3,
    courseName: "Financial Management for Entrepreneurs",
    courseDes: "Understand cash flow, budgeting, funding options, and financial decision-making for startups.",
    courseAuthor: "Sophia Patel",
    courseImage: "https://picsum.photos/400/200?random=13",
  },
  {
    id: 4,
    courseName: "Marketing & Branding Essentials",
    courseDes: "Learn to create powerful marketing strategies, build your brand identity, and attract the right customers.",
    courseAuthor: "David Kim",
    courseImage: "https://picsum.photos/400/200?random=14",
  },
  {
    id: 5,
    courseName: "Leadership & Team Building",
    courseDes: "Develop essential leadership skills, manage teams effectively, and create a strong company culture.",
    courseAuthor: "Amira Johnson",
    courseImage: "https://picsum.photos/400/200?random=15",
  },
];


  // State to hold created courses, initialized with dummy data
  const [courses, setCourses] = useState(dummyCourses);

  interface Button {
    icon: string;
    name: string;
    setEvent: () => void;
  }

  const buttons: Button[] = [
    {
      icon: MATERIALS.ICONS.ADD_ICON,
      name: "New Course",
      setEvent() {
        setToggleBtn(!toggleBtn);
      },
    },
  ];

    // Save new course handler
    const handleSaveCourse = (course: {
    courseName: string;
    courseDes: string;
    courseAuthor: string;
    courseImage?: string;
    }) => {
    setCourses(prev => [
        ...prev,
        {
        ...course,
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        courseImage: course.courseImage || "", // ensure it's always a string
        },
    ]);
    };


  const handleDeleteCourse = (id: number) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  const handleEditCourse = (id: number) => {
    console.log("Edit course", id);
    // You can implement pre-filled editing logic here
  };

  return (
    <>
      <div className="flex bg-white border-to-bottom-gray p-8 w-full justify-center items-center sm:justify-center md:justify-center lg:justify-end xl:justify-end">
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

      {/* TOGGLE FORM */}
      {toggleBtn && (
        <NewCourse
          onClose={() => setToggleBtn(false)}
          onSaveCourse={handleSaveCourse}
        />
      )}

      {/* COURSE CARDS */}
      <div className="grid gap-6 p-10 
                grid-cols-1        /* mobile: 1 column */
                sm:grid-cols-2     /* small screens: 2 columns */
                md:grid-cols-3     /* medium screens: 3 columns */
                lg:grid-cols-4     /* large screens: 4 columns */
                xl:grid-cols-5     /* extra large screens: 5 columns */
                justify-items-center">
        {courses.map(course => (
            <>{loading? <CourseCardSkeleton /> : <CourseCard
            key={course.id}
            id={course.id}
            courseName={course.courseName}
            courseDes={course.courseDes}
            courseAuthor={course.courseAuthor}
            courseImage={course.courseImage}
            onEdit={handleEditCourse}
            onDelete={handleDeleteCourse}
            />}</>
        ))}
        </div>
    </>
  );
}
