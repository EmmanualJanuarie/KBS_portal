/**
 * Tailwind layout for the navitem modal
 * 
 * @function HamburgerNavItemsModal
 * @returns returns the TSX Scripts for the nav item modal
 */

import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

type HamburgerNavItemsModalProps = {
    setClassName: string,
    toggleList: boolean,
    setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HamburgerNavItemsModal({setClassName, toggleList, setToggleList}: HamburgerNavItemsModalProps){
    const navigate = useNavigate();
    return(
        <div className={setClassName}>
            <div className="flex flex-col md:flex-row gap-0 justify-center">
                {/* MOBILE ITEM 1 */}
                <div className="flex items-center gap-20 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <div className={`nav-item ${toggleList ? "color-gold" : "text-gray"} text-hover-gold`} 
                            onClick={() => setToggleList(!toggleList)}>
                            Courses
                        </div>
                    </div>
                </div>
                {/* MOBILE ITEM 2 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <div className="text-gray text-hover-gold nav-item">Guide</div>
                    </div>
                </div>
                 {/* MOBILE ITEM 3 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <div className="text-gray text-hover-gold nav-item">Testimonials</div>
                    </div>
                </div>
                {/* MOBILE ITEM 3 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <div className="text-gray text-hover-gold nav-item">FAQs</div>
                    </div>
                </div>
                {/* MOBILE ITEM 4 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Admin console" setClassName="btn-type-2" setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.ADMIN_PAGE, '_blank');
                            }, 800)
                }} />
                    </div>
                </div>
                {/* MOBILE ITEM 5 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Contact Support" setClassName="btn-type-2" setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.CONTACT_STAFF_PAFE, '_blank');
                            }, 800)
                        }} />
                    </div>
                </div>
                {/* MOBILE ITEM 6 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150"setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.USER_PAGE, '_blank');
                            }, 800)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}