import { useEffect } from "react";

export default function UserDashboardPage(){

    useEffect(()=>{
            document.title= "User | Dashboard"
        });
        
    return (
        <p>User Dashboard</p>
    );
}