import LogoLoader from "../LogoLoader";
import AdminNavbarLoader from "./AdminNavbarLoader";

/**
 * Displays the dashboard loader
 */
export default function AdminDashboardLoader(){

    return(
        <>
            <LogoLoader width="full" height="12"/>
            <AdminNavbarLoader />
        </>
    );
}