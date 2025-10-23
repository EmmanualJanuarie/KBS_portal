/**
 * Displays the User Sign in Form
 * 
 * @function UserPage
 * @returns  TSX SCRIPT FOR USERPAGE
 */

import { useEffect } from "react";
import SignInFormComponent from "../src/components/SignInFormComponent";

import { ROUTES } from "../utils/routes";

export default function UserPage(){

    useEffect(() => {
        document.title = "User | SignIn"
    });

    return(
        <div className="w-full" id="user_page">
            {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-40 gap-20">
               {<SignInFormComponent setFormTitle="User" setForgetPwdLink={ROUTES.USER_FORGET_PWD}/>}
            </div>
        </div>
    );
}