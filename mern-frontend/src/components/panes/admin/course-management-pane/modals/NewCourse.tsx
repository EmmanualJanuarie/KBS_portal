import { useState } from "react";
import NewModuleForm from "./NewModuleForm";
import CourseButtons from "../CourseButtons";
import NewAssessmentForm from "./NewAssessmentForm";
import type { Question } from "../types";

type NewCourseProps = {
  onClose: () => void;
  onSaveCourse?: (course: {
    courseName: string;
    courseDes: string;
    courseAuthor: string;
    courseImage?: string;
    modules?: any[];
    assessments?: Question[];
  }) => void;
};

export default function NewCourse({ onClose, onSaveCourse }: NewCourseProps) {
  const [toggleModule, setToggleModule] = useState(false);
  const [toggleAssessment, setToggleAssessment] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    questionText: "",
    options: ["", "", "", ""],
  });

  const [formData, setFormData] = useState({
    courseName: "",
    courseDes: "",
    courseAuthor: "",
  });

  const [courseImage, setCourseImage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // IMAGE HANDLER
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCourseImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Handlers for assessment buttons
  const handleAddAnotherQuestion = () => {
    if (questions.length >= 10) return;
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({ questionText: "", options: ["", "", "", ""] });
  };

  const handleSaveAssessment = () => {
    setQuestions([...questions, currentQuestion]);
    console.log("Saved Questions:", [...questions, currentQuestion]);
    setToggleAssessment(false);
  };

  // SAVE COURSE (called from CourseButtons in "course" mode)
const handleSaveCourse = () => {
  if (!formData.courseName || !formData.courseDes || !formData.courseAuthor) return;

  const courseData = {
    ...formData,
    courseImage: courseImage || undefined,
    assessments: questions,
    modules: [],
  };

  onSaveCourse?.(courseData); // only call if exists
  onClose();
};


  return (
    <div className="flex bg-white border-to-bottom-gray p-8 w-full justify-center items-center">
      <div className="bg-white/95 shadow-lg rounded-2xl p-4 sm:p-8 w-full max-w-full sm:max-w-lg md:max-w-xl mx-4 sm:mx-auto input-style-no-fx-w">
        <h1 className="text-4xl font-bold color-gold text-center mb-10 ">
          Create Course
        </h1>

        <form className="flex flex-col gap-10">
          {/* COURSE IMAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              Course Image
            </label>

            <div className="relative w-full h-64 border-2 border-dashed rounded-2xl flex justify-center items-center overflow-hidden cursor-pointer">
              {courseImage ? (
                <img
                  src={courseImage}
                  alt="Course"
                  className="object-cover w-full h-full"
                  onClick={() => setCourseImage(null)}
                />
              ) : (
                <span className="text-gray-400">Click to select an image</span>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* COURSE NAME */}
          <div className="flex flex-col gap-2">
            <label htmlFor="courseName" className="text-lg font-medium text-gray-700">
              Course Name
            </label>
            <input
              id="courseName"
              name="courseName"
              type="text"
              placeholder="Intro to Machine Learning"
              className="bg-white/95 rounded-2xl p-5 w-full input-style-no-fx-w"
              required
              value={formData.courseName}
              onChange={handleChange}
            />
          </div>

          {/* AUTHOR */}
          <div className="flex flex-col gap-2">
            <label htmlFor="courseAuthor" className="text-lg font-medium text-gray-700">
              Author
            </label>
            <input
              id="courseAuthor"
              name="courseAuthor"
              type="text"
              placeholder="John Doe"
              className="bg-white/95 rounded-2xl p-5 w-full input-style-no-fx-w"
              required
              value={formData.courseAuthor}
              onChange={handleChange}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-2">
            <label htmlFor="courseDes" className="text-lg font-medium text-gray-700">
              Course Description
            </label>
            <textarea
              id="courseDes"
              name="courseDes"
              placeholder="Write a short description..."
              className="bg-white/95 rounded-2xl p-5 w-full h-40 resize-none input-style-no-fx-w"
              required
              value={formData.courseDes}
              onChange={handleChange}
            />
          </div>

          {/* MODULE FORM */}
          {toggleModule && (
            <NewModuleForm
              onCancel={() => setToggleModule(false)}
              onAddAssessment={() => setToggleAssessment(true)}
            />
          )}

          {/* ASSESSMENT FORM */}
          {toggleAssessment && (
            <NewAssessmentForm
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              questions={questions}
            />
          )}

          {/* BUTTONS */}
          <CourseButtons
            mode={
              toggleAssessment
                ? "assessment"
                : toggleModule
                ? "module"
                : "course"
            }
            onCancel={
              toggleAssessment
                ? () => setToggleAssessment(false)
                : toggleModule
                ? () => setToggleModule(false)
                : onClose
            }
            onAddModule={() => setToggleModule(true)}
            onAddAssessment={() => setToggleAssessment(true)}
            onAddAnotherModule={() => console.log("Add Another Module")}
            onAddAnotherQuestion={handleAddAnotherQuestion}
            onSaveAssessment={handleSaveAssessment}
            // NEW: pass save course for "course" mode
            onSaveCourse={handleSaveCourse} // this ensures the "Add Module" button acts as Save for now
          />
        </form>
      </div>
    </div>
  );
}
