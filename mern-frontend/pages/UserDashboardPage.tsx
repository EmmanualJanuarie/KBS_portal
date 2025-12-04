import { useEffect, useState } from "react"
import { MATERIALS } from "../utils/materials";
import AdminDashboardLoader from "../src/components/skeleton-loaders/AdminDashboardSkelton/AdminDashboardLoader";
import UserDashboardContentPane from "../src/components/dashboard/UserDashboardContentPane";
import DashboardUserTitleBoard from "../src/components/dashboard/DashboardUserTitleBoard";

export default function UserDashboardPage(){
    const [selectedSection, setSelectedSection] = useState<string>(() => {
        //load localstorage if aviable
        return localStorage.getItem("selectedSection") || "My Courses";
    });

    const [loading, setLoading] = useState(true);
 
    useEffect(()=>{
        document.title= "User | Dashboard"

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // 1.5 seconds loading
        return () => clearTimeout(timer);
    });

    //whenever the user changes the section it saves to local
    useEffect(()=>{
        localStorage.setItem("selectedSection", selectedSection);
    }, [selectedSection]);

    if(loading) {
        return <AdminDashboardLoader />
    }

    return(
        <div className={`${MATERIALS.BACKGROUNDS.CLASSES.ADMIN_BACKGROUND} flex flex-col h-screen`}>
            {/* TITLE BOARD */}
           <div className="fixed z-50 w-full">
                <DashboardUserTitleBoard dashboardType="User" setOnSelect={setSelectedSection} activeSection={selectedSection}/>
           </div>

           {/* USER CONTENT SECTION */}
           <div className="flex flex-1 pt-20 h-full">

                {/* USER CONTENT PANE */}
                <div className="flex-1 overflow-auto">
                    <UserDashboardContentPane id={selectedSection} />
                </div>
           </div>
        </div>
    );
}