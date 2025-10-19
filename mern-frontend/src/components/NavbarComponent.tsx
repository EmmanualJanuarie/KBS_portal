import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent"
import LogoComponent from "./LogoComponent"
import { ROUTES } from "../../utils/routes";

/**
 * Contains the set tailwind layout structure for the navbar.
 * 
 * @function NavbarComponent
 * @returns Tailwind layout for navbar 
 */

type navbarProps = {
    toggleList : boolean,
    setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarComponent({toggleList, setToggleList}: navbarProps){

    const navigate = useNavigate();

    return(
       <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-8 w-full md:flex-1">
            {/* Logo */}
            <div className="shrink-0">
                <LogoComponent setSRC="/src/assets/images/logos/KBS_Logo.jpg" setClassName="logo-size" />
            </div>

            {/* Nav Items */}
            <div className="md:flex md:flex-row gap-2">
                <div className={`nav-item ${toggleList ? "color-gold" : "text-gray"} text-hover-gold`} 
                    onClick={() => setToggleList(!toggleList)}>
                    Courses
                </div>
                <div className="text-gray text-hover-gold nav-item">Guide</div>
                <div className="text-gray text-hover-gold nav-item">Testimonials</div>
                <div className="text-gray text-hover-gold nav-item">FAQs</div>
            </div>
            </div>

            

            {/* RIGHT SIDE */}
            <div className="flex gap-4 justify-end w-full">
                <ButtonComponent name="Admin console" setClassName="btn-type-1" setOnClick={()=>{
                    setTimeout(()=>{
                         navigate(ROUTES.ADMIN_PAGE);
                    }, 800)
                }}/>
                <ButtonComponent name="Contact staff" setClassName="btn-type-2" setOnClick={() => navigate(ROUTES.CONTACT_STAFF_PAFE)} />
                <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150" setOnClick={() => navigate(ROUTES.USER_PAGE)} />
            </div>

        </div>
       </div>
    )
}