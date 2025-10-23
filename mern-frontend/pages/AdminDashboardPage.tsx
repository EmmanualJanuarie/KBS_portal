import { useEffect } from "react"

export default function AdminDashboardPage(){
    useEffect(()=>{
        document.title= "Admin | Dashboard"
    });

    return(
        <div className="flex flex-row md:flex md:flex-row">
            <div className=" bg-white/95 shadow-lg p-10 justify-center border-gray lg:w-full">SideBar</div>
            <div className="bg-white/90 shadow-lg p-10 justify-center w-full">RightPane</div>
        </div>
    );
}