import ButtonComponent from "./ButtonComponent";

/**
 * 
 * @returns tsx script that renders in the reset form
 */
export default function PasswordResetComponent(){

    return(

        <form>
            {/* INNER COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-10 md:gap-10 sm:gap-10">

                {/* PASSWORD INPUT */}
                <div className="">
                    <label htmlFor="pwd" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                        Password
                    </label>

                    <input
                    type="pwd"
                    placeholder="••••••••••••"
                    className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-0"
                    required/>
                </div>

                {/* REPEAT PASSWORD INPUT */}
                <div className="">
                    <label htmlFor="repeat-pwd" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                        Repeat Password
                    </label>

                    <input
                    type="repeat-pwd"
                    placeholder="••••••••••••"
                    className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-0"
                    required/>
                </div>

                {/* SIGNIN BUTTON */}
                <div className="text-center">
                    <ButtonComponent  name="Reset" setClassName="btn-type-3 btn-w-150" setOnClick={
                        ()=>alert("Return to the Sign In")
                    } />
                </div>
            </div>
        </form> 
    );
}