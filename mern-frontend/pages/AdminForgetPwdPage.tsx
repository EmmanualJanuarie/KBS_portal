/**
 * 
 */
import { useEffect } from "react";
import { ROUTES } from "../utils/routes";
import { useNavigate } from "react-router-dom";

export default function AdminForgetPwdPage(){

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Admin | Forget Password?"
    });

    return(
        <div className="w-full" id="admin_page">
            {/* COLUMN */}
            <div className="flex flex-col items-center py-60">
                <div className=" flex flex-col bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center forget-pwd-style gap-10">
                    <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-9">
                        <div className="text-4xl font-bold color-gold text-center p-bottom-2">
                            Don't worry we have a solution.
                        </div>
                            {/* INNER COLUMN */}
                            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center text-center">
                                {/* Whatsapp code option */}
                                <div className="bg-white/95 shadow-lg rounded-2xl p-20 border-to-gray-1px background-to-gold btn-padding" onClick={()=>navigate(ROUTES.ADMIN_PAGE_WHATSAPP_CODE_REQUEST)}>
                                    WhatsApp Code
                                </div>

                                    {/* Request Password Change */}
                                <div className="bg-white/95 shadow-lg rounded-2xl border-to-gray-1px background-to-gold btn-padding" onClick={()=>navigate(ROUTES.ADMIN_PAGE_PASSWORD_RESET_REQUEST)}>
                                    Request Password Change
                                </div>
                            </div>
                    </div>

                    <div className="text-center text-gold-hover-effect">
                        <p onClick={()=> navigate(ROUTES.ADMIN_PAGE)}>Back</p>
                    </div>
                </div>
            </div>
        </div>
    );
}