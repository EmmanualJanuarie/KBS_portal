/**
 * Displays the content for the user dashboard
 */

import MyCoursesPane from "../panes/user/MyCoursesPane";
import UserEventPane from "../panes/user/UserEventPane";
import UserAccountPane from "../panes/user/UserAccountPane";
import CourseDetailPane from "../panes/user/CourseDetailPane";
import type { UserDemoCourse } from "../panes/user/MyCoursesPane";

type UserDashboardContentPaneProps = {
  id: string;
  onSelectSection: (section: string) => void;
  onSelectCourse: (course: UserDemoCourse) => void;
  selectedCourse: UserDemoCourse | null;
};

export default function UserDashboardContentPane({ id, onSelectSection, onSelectCourse, selectedCourse }: UserDashboardContentPaneProps) {

  const RenderPane = () => {
    switch (id) {
      case "My Courses":
        return <MyCoursesPane onOpenCourse={(course) => { onSelectCourse(course); onSelectSection("Course Details"); }} />;
      case "Course Details":
        return <CourseDetailPane course={selectedCourse} />;
      case "Events":
        return <UserEventPane />;
      case "My Account":
        return <UserAccountPane />;
      default:
        return null;
    }
  };

  return(
      <div className="bg-gold/95 shadow-lg min-h-screen">
          <div className="w-full">
              {RenderPane()}
          </div>
      </div>
    );
}
