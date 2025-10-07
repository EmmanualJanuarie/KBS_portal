import IconComponent from "./IconComponent";

const socials = {
    x: "src/assets/images/icons/x_icon.png",
    instagram: "src/assets/images/icons/instagram_icon.png",
    tiktok: "src/assets/images/icons/tiktok_icon.png",
    linkedin: "src/assets/images/icons/linkedin_icon.png"
}
export default function MobileFooterComponent(){
    return(
        <div className="w-full py-10">
            <div className="flex flex-row md:flex md:flex-row gap-0 justify-center">
                <div className="nav-item text-lg">Socials</div>
                <div className="nav-item lg:text-3xl md:text-2xl sm:text-2xl">|</div>

                <div className="gap-2 flex" id="icons">
                    <div className="nav-item shrink-0">
                        <IconComponent defaultSRC={socials.x} setLink="x.com/kbs" onHoverSRC={socials.x} setClassName="w-9"/>
                    </div>
                    <div className="nav-item shrink-0">
                        <IconComponent defaultSRC={socials.instagram} setLink="x.com/kbs" onHoverSRC={socials.instagram} setClassName="w-9"/>
                    </div>
                    <div className="nav-item shrink-0">
                        <IconComponent defaultSRC={socials.tiktok} setLink="x.com/kbs" onHoverSRC={socials.tiktok} setClassName="w-9"/>
                    </div>
                    <div className="nav-item shrink-0">
                        <IconComponent defaultSRC={socials.linkedin} setLink="x.com/kbs" onHoverSRC={socials.linkedin} setClassName="w-9"/>
                    </div>
                </div>
                
            </div>

            {/* Lined Divider */}
            <center>
                <p className="border-bottom-1 py-3 footer-divider-w"></p>
            </center>

            {/* COLUMN */}
            <div className="flex flex-col text-center justify-center">

                {/* FOOTER COLUMN 1 */}
                <div className="md:flex md:flex-row gap-10 justify-center">
                    <div className="lg:text-lg md:text-base sm:text-base">
                        <h1 className="font-bold footer-items-padding-with-gray">Company</h1>
                        <ul className="lg:text-base footer-items-padding-with-gray space-y-1">
                            <li><a href="#" className="text-hover-gold">Metrics</a></li>
                            <li><a href="#" className="text-hover-gold">Guide</a></li>
                            <li><a href="#" className="text-hover-gold">Testimonials</a></li>
                            <li><a href="#" className="text-hover-gold">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* FOOTER COLUMN 2 */}
                <div className="md:flex md:flex-row gap-10 justify-center">
                    <div className="lg:text-lg md:text-base sm:text-base">
                        <h1 className="font-bold footer-items-padding-with-gray">Courses & Workshops</h1>
                        <ul className="lg:text-base footer-items-padding-with-gray space-y-1">
                            <li><a className="text-hover-gold">Customer Service</a></li>
                            <li><a className="text-hover-gold">Financial Literacy</a></li>
                            <li><a className="text-hover-gold">Interview Prep</a></li>
                            <li><a className="text-hover-gold">CV Drafting</a></li>
                        </ul>
                    </div>
                </div>

                {/* FOOTER COLUMN 3 */}
                <div className="md:flex md:flex-row gap-10 justify-center">
                    <div className="lg:text-lg md:text-base sm:text-base">
                        <h1 className="font-bold footer-items-padding-with-gray">Resources</h1>
                        <ul className="lg:text-base footer-items-padding-with-gray space-y-1">
                            <li><a href="#" className="text-hover-gold">Acknowledgements</a></li>
                            <li><a href="#" className="text-hover-gold">FAQs</a></li>
                            <li><a href="#" className="text-hover-gold">Help Center</a></li>
                            <li><a href="#" className="text-hover-gold">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Lined Divider */}
            <center>
                <p className="border-bottom-1 py-3 footer-divider-w"></p>
            </center>

            {/* COPYRIGHT AND VERSIONING SECTION */}
            <div className="footer-items-gap text-justify text-wrap justify-center">
                <div className="py-3 text-gray text-center">
                    © 2025 KBS Portal. All rights reserved. | Version 0.11.0
                </div>
            </div>
        </div>
    );
}