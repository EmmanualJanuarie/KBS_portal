/**
 * 
 */
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../src/components/BreadCrumb";
import { ROUTES } from "../utils/routes";
import { ICONS } from "../utils/icons";
import MobileBreadCrumb from "../src/components/MobileBreadCrumb";

export default function UserForgetPwdPage(){

    const navigate = useNavigate();

    return(
        <div className="w-full lg:h-screen md:max-h-screen sm:max-h-screen" id="user_page">
            {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-20 gap-20">
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
                            setName: "User SignIn",
                            setNavigationLink: ROUTES.USER_PAGE,
                            isSelected: false,
                            shouldAddAnotherRoute: true
                        }} 
                        crumb_three={{ setName: "Forget Password?", setNavigationLink: "", isSelected: true, shouldAddAnotherRoute: false }} 

                        crumb_four={{ setName: "", setNavigationLink: "", isSelected: false }} //void
                        setSeperatorIcon={"../../" + ICONS.DOUBLE_ARROW_ICON}

                    />
                    </div>

                    {/* BREADCRUMBS FOR MOBILE */}
                    <div className="flex md:hidden">
                        <MobileBreadCrumb 
                            crumb_one={{ name: "Forget Password?", value: "Forget Password?", route: "", add_crumb_two: true}}
                            crumb_two={{ name: "User Sign In", value: "User Sign In", route: ROUTES.USER_PAGE, add_crumb_three: true}}
                            crumb_three={{ name: "Landing Page", value: "Landing Page", route: ROUTES.LANDING_PAGE}}
                        />
                    </div>

                {/* ADMIN SIGNIN FORM */}
                 <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center forget-pwd-style">
                    <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-9">
                        <div className="text-4xl font-bold color-gold text-center p-bottom-2">Don't worry we have a solution.</div>
                            {/* INNER COLUMN */}
                            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center text-center lg:gap-5 md:gap-5 sm:gap-5">
                                {/* Whatsapp code option */}
                                <div className="bg-white/95 shadow-lg rounded-2xl p-20 border-to-gray-1px background-to-gold btn-padding" onClick={()=> navigate(ROUTES.USER_PAGE_WHATSAPP_CODE_REQUEST)}>
                                    WhatsApp Code
                                </div>

                                    {/* Request Password Change */}
                                <div className="bg-white/95 shadow-lg rounded-2xl border-to-gray-1px background-to-gold btn-padding">
                                    Request Password Change
                                </div>
                            </div>
                    </div>
                 </div>
            </div>
        </div>
    );
}