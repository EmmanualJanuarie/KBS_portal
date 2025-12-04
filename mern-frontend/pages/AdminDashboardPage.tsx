import { useEffect, useState } from "react"
import DashboardTitleBoard from "../src/components/dashboard/DashboardTitleBoard";
import { MATERIALS } from "../utils/materials";
import DashboardContentPane from "../src/components/dashboard/DashboardContentPane";
import AdminDashboardLoader from "../src/components/skeleton-loaders/AdminDashboardSkelton/AdminDashboardLoader";

export default function AdminDashboardPage(){
    const [selectedSection, setSelectedSection] = useState<string>(() => {
        //load localstorage if aviable
        return localStorage.getItem("selectedSection") || "Metrics";
    });

    const [loading, setLoading] = useState(true);
 
    useEffect(()=>{
        document.title= "Admin | Dashboard"

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
            {/* ADMIN TITLE BOARD */}
           <div className="fixed z-50 w-full">
                <DashboardTitleBoard dashboardType="Admin" setOnSelect={setSelectedSection} activeSection={selectedSection}/>
           </div>

           {/* ADMIN CONTENT SECTION */}
           <div className="flex flex-1 pt-20 h-full">

                {/* ADMIN CONTENT PANE */}
                <div className="flex-1 overflow-auto">
                    <DashboardContentPane id={selectedSection} />
                </div>
           </div>
        </div>
    );
}