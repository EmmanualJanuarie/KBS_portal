/**
 * Displays the admin consoles Sign in Form
 * 
 * @function AdminConsolePage
 * @returns 
 */

import { useEffect } from "react";
import SignInFormComponent from "../src/components/SignInFormComponent";
import { ROUTES } from "../utils/routes";


export default function AdminConsolePage(){
    // Sets the title of t he tab
    useEffect(() => {
        document.title = 'Admin | SignIn'
    }, []);

    return(
        <>
            <div className="w-full" id="admin_page">
                {/* COLUMN */}
                <div className="flex flex-col items-center py-40">
                {<SignInFormComponent setFormTitle="Admin" setForgetPwdLink={ROUTES.ADMIN_FORGET_PWD}/>}
                </div>
            </div>
        </>
    );
}