/**
 * Fabricates the layout of the about us component
 * @function AboutUsComponent
 * @returns tsx script to render in the layout.
 */

import IconComponent from "./IconComponent";

export default function AboutUsComponent(){

    return(
        <div className="w-full px-5 py-10 aboutus-background">
          <div className="flex flex-col md:flex-row justify-center items-center py-20">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            {/* CARD WRAPPER */}
              <div className="bg-white/90 shadow-lg rounded-2xl p-6 text-center md:text-left max-w-lg mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold color-gold py-3">ABOUT KBS PORTAL</h1>
                <h2 className="text-sm md:text-base lg:text-lg text-black py-2 text-wrap text-justify">
                  KBS Portal is a digital gateway designed to simplify access to our services, resources, and training opportunities. 
                  Built with efficiency in mind, it brings together everything you need in one place, from online courses and workshops to tools that support personal and professional growth.
                  {<br/>}{<br/>}

                  At Kore Business Solutions (KBS), our focus is on empowering individuals and organizations through knowledge, skill-building, and innovative solutions. The portal gives 
                  professionals, and businesses a seamless way to explore learning programs, manage progress, and connect with opportunities tailored to their goals.
                  With KBS Portal, we make growth accessible, organized, and future-ready — giving you the confidence to achieve more.
                </h2>

                <p className="text-3xl md:text-5xl lg:text-2xl font-bold color-gold py-3">CHECK OUT OUR SOCIALS</p>

                {/* KBS SOCIALS */}
                <div className="w-full flex gap-8">
                    <div className="md:1/2 md:justify-start">
                        <IconComponent defaultSRC="src/assets/images/icons/instagram_black_icon.png" 
                        onHoverSRC="src/assets/images/icons/instagram_gold_icon.png"
                        setLink="https://instagram.com/kbs_portal" 
                        setClassName="w-16 px-2 py-3"/>
                    </div>
                    <div className="md:1/2 items-center md:justify-start">
                        <IconComponent defaultSRC="src/assets/images/icons/x_black_icon.png"
                        onHoverSRC="src/assets/images/icons/x_gold_icon.png"
                        setLink="https://twitter.com/kbs_portal"
                        setClassName="w-16 px-2 py-3"/>
                    </div>
                    <div className="md:1/2 items-center md:justify-start">
                        <IconComponent defaultSRC="src/assets/images/icons/tiktok_black_icon.png"
                         onHoverSRC="src/assets/images/icons/tiktok_gold_icon.png" 
                         setLink="https://tiktok.com/@kbs_portal"
                         setClassName="w-16 px-2 py-3"/>
                    </div>
                    <div className="md:1/2 items-center md:justify-start">
                        <IconComponent defaultSRC="src/assets/images/icons/linkedin_black_icon.png"
                         onHoverSRC="src/assets/images/icons/linkedin_gold_icon.png" 
                         setLink="https://linkedin.com/kbs_portal"
                         setClassName="w-16 px-2 py-3"/>
                    </div>

                </div>
                
                <div className="mt-6">
                  
                </div>
              </div>
            </div>
        
            {/* RIGHT COLUMN */}
            <div className="md:flex w-1/2 justify-center">
              <div className="flex flex-wrap gap-10">
                <picture className="business_pic">
                    <img src="src/assets/images/stickers/business_background_1.png" alt="business picture"/>
                </picture>
              </div>
            </div>
          </div>
        </div>
    );
}