import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

/**
 * Creates and displays the Sign In component form for all pages
 * @returns tsx script for SignInForm
 */

type signInComponentProps = {
    setFormTitle: string;
    setForgetPwdLink: string;
}

export default function SignInFormComponent({setFormTitle, setForgetPwdLink}: signInComponentProps){

    const navigate = useNavigate()

    return(
        <div>
            {/* SIGNIN FORM */}
            <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center form-signin">
                <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center gap-10">
                    <div className="text-4xl font-bold color-gold text-center">{setFormTitle}</div>
                    <p className="mb-4 text-center text-sm text-gray-500">Sign-in is not connected in this portfolio demo. Use the dashboard demo buttons on the home page instead.</p>
                    <form onSubmit={(event) => event.preventDefault()}>
                        {/* INNER COLUMN */}
                        <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center gap-10">
                            {/* EMAIL INPUT */}
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

                            {/* PASSWORD INPUT */}
                            <div className="">
                                <label htmlFor="email" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                                    Password
                                </label>

                                <input
                                type="password"
                                placeholder="••••••••••••"
                                className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-20"
                                required/>
                            </div>

                            <div className="text-center text-gold-hover-effect">
                                <p onClick={()=> navigate(setForgetPwdLink)}>Forget Password?</p>
                            </div>

                            {/* SIGNIN BUTTON */}
                            <div className="text-center">
                                <ButtonComponent name="Sign In" setClassName="btn-type-3 btn-w-150" setOnClick={() => window.alert("Sign-in is not connected in this portfolio demo.")} />
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    );
}
