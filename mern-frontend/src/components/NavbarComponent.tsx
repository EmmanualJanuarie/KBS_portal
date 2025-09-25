import ButtonComponent from "./ButtonComponent"
import LogoComponent from "./LogoComponent"

/**
 * Contains the set tailwind layout structure for the navbar.
 * 
 * @function NavbarComponent
 * @returns Tailwind layout for navbar 
 */

export default function NavbarComponent(){
    return(
       <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-8 w-full md:flex-1">
            {/* Logo */}
            <div className="shrink-0">
                <LogoComponent setSRC="/src/assets/images/KBS_Logo.jpg" setClassName="logo-size" />
            </div>

            {/* Nav Items */}
            <div className="md:flex md:flex-row gap-2">
                <div className="text-gray text-hover-gold nav-item">Courses</div>
                <div className="text-gray text-hover-gold nav-item">About</div>
                <div className="text-gray text-hover-gold nav-item">Testimonials</div>
                <div className="text-gray text-hover-gold nav-item">Guide</div>
            </div>
            </div>

            

            {/* RIGHT SIDE */}
            <div className="flex gap-4 justify-end w-full">
                <ButtonComponent name="Admin console" setClassName="btn-type-1" />
                <ButtonComponent name="Contact staff" setClassName="btn-type-2" />
                <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150" />
            </div>

        </div>
       </div>
    )
}