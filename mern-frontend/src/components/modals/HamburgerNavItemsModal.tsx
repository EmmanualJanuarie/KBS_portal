/**
 * Tailwind layout for the navitem modal
 * 
 * @function HamburgerNavItemsModal
 * @returns returns the TSX Scripts for the nav item modal
 */

import ButtonComponent from "../ButtonComponent";

type HamburgerNavItemsModalProps = {
    setClassName: string,
    toggleList: boolean,
    setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HamburgerNavItemsModal({setClassName, toggleList, setToggleList}: HamburgerNavItemsModalProps){
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
                        <div className="text-gray text-hover-gold nav-item">About</div>
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
                        <div className="text-gray text-hover-gold nav-item">Guide</div>
                    </div>
                </div>
                {/* MOBILE ITEM 4 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Admin console" setClassName="btn-type-2" />
                    </div>
                </div>
                {/* MOBILE ITEM 5 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Contact staff" setClassName="btn-type-2" />
                    </div>
                </div>
                {/* MOBILE ITEM 6 */}
                <div className="flex items-center gap-0 w-full md:flex-1">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150" />
                    </div>
                </div>
            </div>
        </div>
    );
}