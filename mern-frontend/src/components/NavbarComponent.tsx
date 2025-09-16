/**
 * Contains the set tailwind layout structure for the navbar.
 * 
 * @function NavbarComponent
 * @returns Tailwind layout for navbar 
 */

export default function NavbarComponent(){
    return(
       <>
        <div className="container px-10">
            <div className="flex flex-row gap-80">

                <div className="basis-1/2">
                {/* First column section */}

                    <div className="flex flex-row">
                        <div className="basis-1/3"> KBS Logo</div>
                        {/* Inner first column*/}
                        <div className="flex flex-row gap-7">
                            <div className="basis-1/2 text-gray text-hover-gold">item1</div>
                            <div className="basis-1/2 text-gray text-hover-gold">item2</div>
                            <div className="basis-1/2 text-gray text-hover-gold">item3</div>
                            <div className="basis-1/2 text-gray text-hover-gold">item4</div>
                        </div>

                    </div>
                </div>
                <div className="basis-1/2">
                
                    {/* Second column section */}
                    <div className="flex flex-row gap-24">
                        <div>Admin Console</div>
                        <div>Contact Staff</div>
                        <div>SignIn</div>
                    </div>
                    
                </div>
            </div>
        </div>
       </>
    )
}