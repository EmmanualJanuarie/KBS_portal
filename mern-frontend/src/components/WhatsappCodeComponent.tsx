import { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import ButtonComponent from "./ButtonComponent";

/**
 * 
 * @returns tsx script that renders the Whatsapp form to generate the code
 */

type wpCodeComponentProps = {
    breadcrumb_one:{
        setName: string,
        setNavigationLink: string
    },

    breadcrumb_two:{
        setName: string,
        setNavigationLink: string
    },

    breadcrumb_three:{
        setName: string,
        setNavigationLink: string
    },
    page:{
        backgroundImage:string
    }
}
export default function WhatsappCodeComponent({breadcrumb_one, breadcrumb_two ,breadcrumb_three, page}:wpCodeComponentProps){

    const [toggleSection, setToggleSection] = useState(false);

    function email_section(){
        return(
             <form>
            {/* INNER COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-10 md:gap-10 sm:gap-10">
                {/* SUB-TEXT */}
                <div className="text-center">
                    Enter your email and click submit. An <b>OTP</b> will be <u>sent to your WhatsApp number</u>. 
                    Enter the OTP to securely access your account.
                </div>

                {/* EMAIL ADDRESS INPUT */}
                <div className="">
                    <label htmlFor="email" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                        Email Address
                    </label>

                    <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-0"
                    required/>
                </div>

                {/* SIGNIN BUTTON */}
                <div className="text-center">
                    <ButtonComponent  name="Submit" setClassName="btn-type-3 btn-w-150" setOnClick={
                        ()=>setToggleSection(true)
                    } />
                </div>
            </div>
        </form> 
        )
    }

    function OTP_section(){
        return(
             <form>
            {/* INNER COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-10 md:gap-10 sm:gap-10">
                {/* SUB-TEXT */}
                <div className="text-center">
                    Enter the <b>6 digit OTP</b> you recived bellow. You have limited time to do so "90min expired time"
                </div>

                {/* EMAIL ADDRESS INPUT */}
                <div className="">
                    <label htmlFor="otp" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                        OTP Code 
                    </label>

                    {/* CODE INPUT SECTION */}
                    <div className="flex flex-row md:flex md:flex-row sm:flex sm:flex-row justify-left lg:gap-2 md:gap-2 sm:gap-2">
                        <input
                            type="text"
                            placeholder="1"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="2"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="3"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="W"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="T"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                         <input
                            type="text"
                            placeholder="C"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 md:p-3 sm:p-3"
                            required
                        />

                        
                    </div>
  
                </div>

                {/* SIGNIN BUTTON */}
                <div className="text-center">
                    <ButtonComponent  name="Authenticate" setClassName="btn-type-3 btn-w-150" setOnClick={
                        ()=>alert("Proceed")
                    } />
                </div>
            </div>
        </form> 
        )
    }

    return(

        <div className={`${page.backgroundImage} w-full`} id="whatsapp_page">
            {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-20 gap-20">
                {/* BREADCRUMBS */}
                <BreadCrumb 
                    crumb_one={{
                        setName: breadcrumb_one.setName,
                        setNavigationLink: breadcrumb_one.setNavigationLink,
                        isSelected: false
                    }}
                    crumb_two={{
                        setName: breadcrumb_two.setName,
                        setNavigationLink: breadcrumb_two.setNavigationLink,
                        isSelected: false,
                        shouldAddAnotherRoute: true
                    }} 
                    crumb_three={{
                        setName: breadcrumb_three.setName, 
                        setNavigationLink: breadcrumb_three.setNavigationLink, 
                        isSelected: true, 
                        shouldAddAnotherRoute: false }} 

                    crumb_four={{ setName: "", setNavigationLink: "", isSelected: false }} //void

                />

                {/* REQUEST CODE FORM */}
                <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center form-contactstaff">
                    <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-7 md:gap-7 sm:gap-20">
                        <div className="text-4xl font-bold color-gold text-center">Whatsapp Authentication</div>
                            {/* EMAIL SECTION */}
                            {toggleSection? 
                            //CLICKED , CALL THIS FUNC
                                <>{OTP_section()}</>
                            :
                            //NOT CLICKED , CALL THIS FUNC
                               <>{email_section()}</>
                            }
                    </div>
                </div>
            </div>
        </div>

    );
}