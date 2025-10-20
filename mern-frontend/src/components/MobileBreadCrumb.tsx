import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../utils/routes"

/**
 * Specific Breadcrumb for mobile devices
 * 
 * @returns tsx script to display the  Mobile BreadCrumb
 */

type mobileBreadCrumbProps = {
    crumb_one: {
        value: string,
        route: string,
        name: string,
        add_crumb_two: boolean
    },

    crumb_two: {
        value: string,
        route: string,
        name: string,
        add_crumb_three: boolean
    },
    crumb_three: {
        value: string,
        route: string,
        name: string
    }
}
export default function MobileBreadCrumb({crumb_one,crumb_two, crumb_three}:mobileBreadCrumbProps){

    const navigate = useNavigate();
    return(
        <>
            {/* BREADCRUMB */}
            <div className="bg-white/95 shadow-lg rounded-2xl p-6" id="admin_breadcrumb">
                <select name="subject" className="bg-white/95 rounded-2xl  lg:p-5 md:p-5 sm:p-5 text-left input-style-1 py-20 triangle-pos" required
                    onChange={(e)=>{
                        const selected_crumb = e.target.value;
                        if(selected_crumb === crumb_two.value){
                            navigate(crumb_two.route)
                        }else{
                            if(selected_crumb === crumb_three.value){
                                navigate(crumb_three.route)
                            }
                        }
                    }}
                >
                    <option value={crumb_one.value}>{crumb_one.name}</option>

                    {/* ADD CRUMB TWO*/}
                    { crumb_one.add_crumb_two && (
                        <>
                            <option value={crumb_two.value}>{crumb_two.name}</option>
                        </>
                    )}

                     {/* ADD CRUMB THREE*/}
                    { crumb_two.add_crumb_three && (
                        <>
                            <option value={crumb_three.value}>{crumb_three.name}</option>
                        </>
                    )}
                    
                </select>       
            </div>
        </>
    )
}