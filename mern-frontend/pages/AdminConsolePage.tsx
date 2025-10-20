/**
 * Displays the admin consoles Sign in Form
 * 
 * @function AdminConsolePage
 * @returns 
 */

import BreadCrumb from "../src/components/BreadCrumb";
import MobileBreadCrumb from "../src/components/MobileBreadCrumb";
import SignInFormComponent from "../src/components/SignInFormComponent";
import { ICONS } from "../utils/icons";
import { ROUTES } from "../utils/routes";

export default function AdminConsolePage(){


    function AdminPage(){
        return(
            <>
            {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-20 gap-20 ">
                {/* BREADCRUMBS */}
                {/* BREADCRUMBS FOR LAPTOP/DESKTOP */}
                <div className="hidden md:flex">
                    <BreadCrumb 
                        crumb_one={{
                            setName: "Landing Page",
                            setNavigationLink: ROUTES.LANDING_PAGE,
                            isSelected: false
                        }}
                        crumb_two={{
                            setName: "Admin SignIn",
                            setNavigationLink: "",
                            isSelected: true,
                            shouldAddAnotherRoute: false
                        }} crumb_three={{setName: "", setNavigationLink: "", isSelected: false , shouldAddAnotherRoute: false}} 
                        crumb_four={{ setName: "", setNavigationLink: "", isSelected: false }}
                        
                        setSeperatorIcon={ICONS.DOUBLE_ARROW_ICON}

                    />
                </div>

                {/* BREADCRUMBS FOR MOBILE */}
                <div className="flex md:hidden">
                    <MobileBreadCrumb 
                        crumb_one={{ name: "Admin Sign In", value: "Admin Sign In", route: "", add_crumb_two: true}}
                        crumb_two={{ name: "Landing Page", value: "Landing Page", route: ROUTES.LANDING_PAGE, add_crumb_three: false}}
                        crumb_three={{ name: "", value: "", route: ""}}
                    />
                </div>

               {<SignInFormComponent setFormTitle="Admin Sign-In" setForgetPwdLink={ROUTES.ADMIN_FORGET_PWD}/>}
            </div>
            </>
        );
    }
    return(
        <div className="w-full lg:h-screen md:max-h-screen sm:max-h-screen" id="admin_page">
            <div className="">
                {AdminPage()}
            </div>
        </div>
    );
}