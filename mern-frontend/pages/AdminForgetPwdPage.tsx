/**
 * 
 */
import BreadCrumb from "../src/components/BreadCrumb";
import { ROUTES } from "../utils/routes";
import { useNavigate } from "react-router-dom";

export default function AdminForgetPwdPage(){

    const navigate = useNavigate();

    return(
        <div className="w-full lg:h-screen md:max-h-screen sm:max-h-screen" id="admin_page">
            {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-20 gap-20">
                {/* BREADCRUMBS */}
                    <BreadCrumb 
                        crumb_one={{
                            setName: "Landing Page",
                            setNavigationLink: ROUTES.LANDING_PAGE,
                            isSelected: false
                        }}
                        crumb_two={{
                            setName: "Admin SignIn",
                            setNavigationLink: ROUTES.ADMIN_PAGE,
                            isSelected: false,
                            shouldAddAnotherRoute: true
                        }} 
                        crumb_three={{
                            setName: "Forget Password?", 
                            setNavigationLink: "", 
                            isSelected: true, 
                            shouldAddAnotherRoute: false }} 

                        crumb_four={{ setName: "", setNavigationLink: "", isSelected: false }} //void

                    />

                {/* FORM */}
                 <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center forget-pwd-style">
                    <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-9">
                        <div className="text-4xl font-bold color-gold text-center p-bottom-2">Don't worry we have a solution.</div>
                            {/* INNER COLUMN */}
                            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center text-center lg:gap-5 md:gap-5 sm:gap-5">
                                {/* Whatsapp code option */}
                                <div className="bg-white/95 shadow-lg rounded-2xl p-20 border-to-gray-1px background-to-gold btn-padding" onClick={()=>navigate(ROUTES.ADMIN_PAGE_WHATSAPP_CODE_REQUEST)}>
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