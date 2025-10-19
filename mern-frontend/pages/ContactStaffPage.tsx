/**
 * Displays the Contact Staff Form
 * 
 * @function ContactStaffPage
 * @returns tsx script to render in the Contact Staff form
 */

import BreadCrumb from "../src/components/BreadCrumb";
import ButtonComponent from "../src/components/ButtonComponent";
import { ROUTES } from "../utils/routes";

export default function ContactStaffPage(){

    return(
        <div className="w-full" id="contactstaff_page">
              {/* COLUMN */}
            <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center items-center py-20 gap-20 ">
                {/* BREADCRUMBS */}
                <BreadCrumb 
                    crumb_one={{
                        setName: "Landing Page",
                        setNavigationLink: ROUTES.LANDING_PAGE,
                        isSelected: false
                    }}
                    crumb_two={{
                        setName: "Contact Staff",
                        setNavigationLink: "",
                        isSelected: true,
                        shouldAddAnotherRoute: false
                    }} crumb_three={{setName: "", setNavigationLink: "", isSelected: false , shouldAddAnotherRoute: false}} 
                       crumb_four={{ setName: "", setNavigationLink: "", isSelected: false }}

                />

                {/* CONTACT FORM */}
                 <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center form-contactstaff">
                        <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-20">
                            <div className="text-4xl font-bold color-gold text-center">Contact Staff</div>
                            <form>
                                {/* INNER COLUMN */}
                                <div className="flex flex-col md:flex md:flex-col sm:flex sm:flex-col justify-center lg:gap-10 md:gap-10 sm:gap-10">
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
        
                                    {/* SUBJECT INPUT */}
                                    <div className="">
                                        <label htmlFor="subject" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                                            Subject
                                        </label>
        
                                        <select name="subject" className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-20" required>
                                            <option value={"Technical Support"}>Technical Support</option>
                                            <option value={"Account Issue"}>Account Issue</option>
                                            <option value={"Feedback"}>Feedback</option>
                                            <option value={"Billing"}>Billing</option>
                                            <option value={"Report a Bug"}>Report a Bug</option>
                                            <option value={"Media"}>Media</option>
                                            <option value={"Other"}>Other</option>
                                        </select>
                                    </div>
        
                                   {/* RESPONSE INPUT */}
                                    <div className="">
                                        <label htmlFor="response" className="text-lg font-medium items-left py-20 text-gray-700 mb-1">
                                            Response
                                        </label>
        
                                        <textarea
                                        placeholder="Please enter you response here. Thank you."
                                        className="bg-white/95 rounded-2xl lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-0"
                                        required/>
                                    </div>
        
                                    {/* SIGNIN BUTTON */}
                                    <div className="text-center">
                                        <ButtonComponent  name="Submit" setClassName="btn-type-3 btn-w-150" setOnClick={alert} />
                                    </div>
                                </div>
                            </form> 
                        </div>
                </div>
            </div>
        </div>
    );
}