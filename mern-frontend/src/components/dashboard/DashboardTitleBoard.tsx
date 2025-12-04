/**
 * Displays the title board for ADMIN/USER
 * @returns 
 */

import { MATERIALS } from "../../../utils/materials";
import LogoComponent from "../LogoComponent";
import DashboardAdminDropdown from "./DashboardAdminDropdown";

type dashboardTitleProps = {
    dashboardType: string;
    activeSection: string;
    setOnSelect: (id: string) => void;
}

export default function DashboardTitleBoard({dashboardType, activeSection, setOnSelect}:dashboardTitleProps){

    return(
        <>
           <div className="bg-white border-to-bottom-gray p-4 flex flex-col justify-center items-center gap-3">
                 <div className="flex flex-row justify-center gap-10 ">
                    {/* Logo */}
                    <div className="shrink-0">
                        <LogoComponent setSRC={"/" + MATERIALS.LOGOS.KBS} setClassName="logo-size" />
                    </div>

                    {/* DASHBOARD TYPE */}
                    <div className="text-gray size-of-logo">
                        {dashboardType}
                    </div>
                </div>

                 {/* DROPDOWN Navbar */}
                <div className="">
                    <DashboardAdminDropdown label="John Doe" activeSection={activeSection} onSelect={setOnSelect }/>
                </div>
           </div>
        </>
    );
}