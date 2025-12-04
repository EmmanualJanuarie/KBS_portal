/**
 * Displays the content for the user dashboard
 */

import MyCoursesPane from "../panes/user/MyCoursesPane";
import UserEventPane from "../panes/user/UserEventPane";
import UserAccountPane from "../panes/user/UserAccountPane";
import CourseDetailPane from "../panes/user/CourseDetailPane";

type UserDashboardContentPaneProps = {
  id: string;
};

export default function UserDashboardContentPane({ id }: UserDashboardContentPaneProps) {

  const RenderPane = () => {
    switch (id) {
      case "My Courses":
        return <MyCoursesPane />;
      case "Course Details":
        return <CourseDetailPane />;
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
