import { ICONS } from "../../utils/icons";
import IconComponent from "./IconComponent";
import { useNavigate } from "react-router-dom";
import MobileBreadCrumb from "./MobileBreadCrumb";

/**
 * Determines the amount of items for the breadcrumb for pages
 * @returns tsx script for breadcrumb
 */

type breadCrumbProps = {
    crumb_one: {
        setName: string,
        setNavigationLink: string,
        isSelected: boolean,
    },
    crumb_two: {
        setName: string,
        setNavigationLink: string,
        isSelected: boolean,
        shouldAddAnotherRoute: boolean
    },
    crumb_three: {
        setName: string,
        setNavigationLink: string,
        isSelected: boolean,
        shouldAddAnotherRoute: boolean
    },
    crumb_four: {
        setName: string,
        setNavigationLink: string,
        isSelected: boolean
    },
    setSeperatorIcon: string
}
export default function BreadCrumb({crumb_one, crumb_two, crumb_three, crumb_four, setSeperatorIcon}:breadCrumbProps){
    const navigate = useNavigate();

    function breadcrumb(
    ){

        return(
           <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row lg:gap-2 md:gap-2 sm:gap-2">
                <div className={`${crumb_one.isSelected? "selected-breadcrumb" : "hover-breadcrumb"} breadcrumb-text-p`} onClick={()=>{
                    setTimeout(()=>{
                        navigate(crumb_one.setNavigationLink);
                    },800);
                }}>{crumb_one.setName}</div>
                <div>
                    <IconComponent defaultSRC={setSeperatorIcon} link="" isLinkActive={false} onHoverSRC={setSeperatorIcon} setClassName="w-9 py-3 md:w-10"/>
                </div>
                <div className={`${crumb_two.isSelected? "selected-breadcrumb" : "hover-breadcrumb"} breadcrumb-text-p`} onClick={()=>{
                    setTimeout(()=>{
                        navigate(crumb_two.setNavigationLink);
                    },800);
                }}>{crumb_two.setName}</div>

                {/* ADD ANOTHER ROUTE */}
                {crumb_two.shouldAddAnotherRoute && (
                    <>
                        <IconComponent defaultSRC={setSeperatorIcon} link="" isLinkActive={false} onHoverSRC={setSeperatorIcon} setClassName="w-9 py-3 md:w-10"/>
                        
                        {/* OTHER ROUTES */}
                        <div className={`${crumb_three.isSelected? "selected-breadcrumb" : "hover-breadcrumb"} breadcrumb-text-p`} onClick={()=>{
                        setTimeout(()=>{
                            navigate(crumb_three.setNavigationLink);
                        },800);
                        }}>{crumb_three.setName}</div>
                   </>
                ) }

                {/* ADD ANOTHER ROUTE */}
                {crumb_three.shouldAddAnotherRoute && (
                    <>
                        <div>
                            <IconComponent defaultSRC={setSeperatorIcon} link="" isLinkActive={false} onHoverSRC={setSeperatorIcon} setClassName="w-9 py-3 md:w-10"/>
                        </div>
                        <div className={`${crumb_two.isSelected? "selected-breadcrumb" : "hover-breadcrumb"} breadcrumb-text-p`}>{crumb_four.setName}</div>
                    </>
                )}
            </div>
        );
    }

    return(
        <div>
            <div className="bg-white/95 shadow-lg rounded-2xl p-6" id="admin_breadcrumb">
                <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row lg:gap-2 md:gap-2 sm:gap-2">
                    {breadcrumb()}
                </div>                
            </div>
        </div>
    );
}