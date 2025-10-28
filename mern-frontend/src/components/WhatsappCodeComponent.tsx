import { useEffect, useState } from "react";

import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";
import { EMAIL_INPUT_FUNC, OTP_INPUT_FUNC } from "../../utils/handleInput";
import { IS_ADMIN_EMAIL, IS_USER_EMAIL, OTP_LOGIC} from "../../utils/authLogic";
import MessageComponent from "./MessageComponent";
import { ICONS } from "../../utils/icons";
import { ROUTES } from "../../utils/routes";

/**
 * 
 * @returns tsx script that renders the Whatsapp form to generate the code
 */

type wpCodeComponentProps = {
    page:{
        backgroundImage:string
    }

    tab:{
        title: string
    }

    options: {
        changeOptions: string
    }

    isAdmin: boolean
}
export default function WhatsappCodeComponent({ page, tab, options, isAdmin}:wpCodeComponentProps){

    const [toggleSection, setToggleSection] = useState(false);
    const navigate = useNavigate();
    const [otpMessage, setOTPMessage] = useState<string | null>(null);

    useEffect(() => {
        document.title = tab.title;
    });

    //To determine if OTP is valid
        const [isOtpValid, setIsOtpValid] = useState<boolean | null>(null);
    
        // Destructuring the OTP input function
        const {inputs, handleInputChange, combinedInputs} = OTP_INPUT_FUNC();
    
        //To determine if email is valid
        const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
    
        // Destructuring the Email input function
        const {email, handleEmailChange} = EMAIL_INPUT_FUNC();

    function email_section(){
        return(
             <form>
            {/* INNER COLUMN */}
            <div className="flex flex-col gap-10">
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
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required/>
                </div>

                 <div className="text-center text-gold-hover-effect">
                    <p onClick={()=> navigate(options.changeOptions)}>Change Options</p>
                </div>

                {/* SIGNIN BUTTON */}
                <div className="text-center">
                    <ButtonComponent  name="Request" setClassName="btn-type-3 btn-w-150" setOnClick={() =>
                        {
                            let choice = false;
                            if(isAdmin){
                                choice = IS_ADMIN_EMAIL(email);
                            }else{
                                choice = IS_USER_EMAIL(email);
                            }

                            const valid= choice;
                            setIsEmailValid(valid);
                            if (valid) setToggleSection(true); // move to OTP section
                        }
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
            <div className="flex flex-col gap-10">
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
                    <div className="flex flex-row gap-2">
                        <input
                            type="text"
                            placeholder="1"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 p-3"
                            name="input1"
                            value={inputs.input1}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            placeholder="2"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 lg:p-3 p-3"
                            name="input2"
                            value={inputs.input2}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            placeholder="3"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 p-3"
                            name="input3"
                            value={inputs.input3}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            placeholder="W"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 p-3"
                            name="input4"
                            value={inputs.input4}
                            onChange={handleInputChange}
                            required
                        />

                        <input
                            type="text"
                            placeholder="T"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 p-3"
                            name="input5"
                            value={inputs.input5}
                            onChange={handleInputChange}
                            required
                        />

                         <input
                            type="text"
                            placeholder="C"
                            className="bg-white/95 rounded-2xl text-center input-style-no-fx-w w-10 p-3"
                            name="input6"
                            value={inputs.input6}
                            onChange={handleInputChange}
                            required
                        />

                    </div>
                </div>

                <div className="text-center">
                    <p  className="text-gold-hover-effect" onClick={()=> {
                        setToggleSection(false);
                        setIsEmailValid(null);
                        setIsOtpValid(null);
                    }}>Change Email</p>
                </div>

                {/* SIGNIN BUTTON */}
                <div className="text-center">
                    <ButtonComponent  name="Authenticate" setClassName="btn-type-3 btn-w-150" setOnClick={() =>
                        {
                            const valid = OTP_LOGIC(combinedInputs);
                            setIsOtpValid(valid)

                             if(valid && isAdmin){
                                setOTPMessage('Verifying...');

                                setTimeout(()=>{
                                    setOTPMessage('Correct OTP');
                                }, 800);

                                setTimeout(()=>{
                                    navigate(ROUTES.ADMIN_DASHBOARD)
                                }, 1600);
                            }else if(valid && !isAdmin){
                                setOTPMessage('Verifying...');

                                setTimeout(()=>{
                                    setOTPMessage('Correct OTP');
                                }, 800);

                               setTimeout(()=>{
                                    navigate(ROUTES.USER_DASHBOARD)
                                }, 1600)
                            }
                        }
                    } />
                </div>
            </div>
        </form> 
        )
    }

    return(

        <div className={`${page.backgroundImage} w-full`} id="whatsapp_page">
            {/* COLUMN */}
            <div className="flex flex-col items-center py-20 gap-2">
                {/* REQUEST CODE FORM */}
                <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center form-contactstaff">
                    <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-3 md:gap-3 sm:gap-3">
                        <div className="text-4xl font-bold color-gold text-center">Whatsapp Authentication</div>
                           {/* DEFAULT - SHOW EMAIL SECTION, AND WHEN INCORRECT*/}
                            <div className={`transition-all duration-500 ease-in-out ${
                                (isEmailValid === null || isEmailValid === false) && toggleSection === false ? 
                                "max-h-[500px] opacity-100 transition-y-0 pointer-events-auto"
                                :
                                "max-h-0 opacity-0 -translate-y-10 pointer-events-none" 
                            }`}>
                                {email_section()}
                            </div>

                            {/*CLICKED , CALL THIS FUNC - SHOWS ONLY THE OTP SECTION WHEN THE EMAIL IS VALID*/}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isEmailValid === true && toggleSection === true && isOtpValid !== true ?
                                "max-h-[500px] opacity-100 transition-y-0 pointer-events-auto"
                                :
                                "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
                            }`}>
                                {OTP_section()}
                            </div>
                    </div>
                </div>

                {/* ERROR MESSAGES */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isEmailValid === false?
                    "max-h-[500px] opacity-100 transition-y-0 pointer-events-auto"
                    :
                    "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
                }`}>
                    {isAdmin?
                        <>
                            {<MessageComponent setIcon={"/" + ICONS.ERROR_ICON} setMessage="Not Admin Email"/>}
                        </>
                        :
                        <>
                            {<MessageComponent setIcon={"/" + ICONS.ERROR_ICON} setMessage="Incorrect Email"/>}
                        </>
                    }
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOtpValid === false?
                    "max-h-[500px] opacity-100 transition-y-0 pointer-events-auto"
                    :
                    "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
                }`}>
                    {<MessageComponent setIcon={"/" + ICONS.ERROR_ICON} setMessage="Incorrect OTP"/>}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    otpMessage?
                    "max-h-[500px] opacity-100 transition-y-0 pointer-events-auto"
                    :
                    "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
                }`}>
                    {otpMessage && (
                        <MessageComponent setIcon={"/" + ICONS.CORRECT_ICON} setMessage={otpMessage}/>
                    )}
                </div>
            </div>
        </div>

    );
}