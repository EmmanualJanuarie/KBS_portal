/**
 * Displays the title board for ContentPane
 * @returns 
 */

import AdminPane from "../panes/admin/admin-pane/AdminPane";
import AssessmentManagementPane from "../panes/admin/assessment-pane/AssessmentManagementPane";
import CourseManagementPane from "../panes/admin/course-management-pane/CourseManagementPane";
import EventManagementPane from "../panes/admin/event-management-pane/EventManagementPane";
import MetricsPane from "../panes/admin/metrics-pane/MetricsPane";
import MyAccountPane from "../panes/admin/account-pane/MyAccountPane";
import ResourceManagementPane from "../panes/admin/resource-management-pane/ResourceManagementPane";
type dashboardContentPaneProps = {
    id: string;
}



export default function DashboardContentPane({id}: dashboardContentPaneProps){

    
    const RenderPane = () => {
        switch (id) {
            case "Metrics": return <MetricsPane />;
            case "Admin": return <AdminPane />;
            case "Course Management": return <CourseManagementPane />;
            case "Assessment Management": return <AssessmentManagementPane />;
            case "Event Management": return <EventManagementPane />;
            case "Resource Management": return <ResourceManagementPane />;
            case "My Account": return <MyAccountPane />;
            default: return null;
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