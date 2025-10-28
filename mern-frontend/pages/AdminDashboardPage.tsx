import { useEffect } from "react"

export default function AdminDashboardPage(){
    useEffect(()=>{
        document.title= "Admin | Dashboard"
    });

    return(
        <div className="flex flex-row lg:gap-20">
            <div className="flex flex-col bg-white/96 rounded-lg shadow-lg w-[400px]">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
            <div className="flex-1 bg-blue-100 p-4">Content Pane</div>
        </div>
    );
}