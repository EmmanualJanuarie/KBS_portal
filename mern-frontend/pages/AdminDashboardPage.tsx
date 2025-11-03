import { useEffect } from "react"

export default function AdminDashboardPage(){
    useEffect(()=>{
        document.title= "Admin | Dashboard"
    });

    return(
        <>
            <div className="flex items-center justify-center max-lg:h-44" style={{backgroundColor: "red"}}>
                sdfsd
            </div>
        </>
    );
}