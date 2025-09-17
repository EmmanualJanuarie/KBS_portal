/**
 * Creates the Logo
 * 
 * @function LogoComponent
 * @param {string} setSRC - The image url of the image
 * @param {string} setClassName - the class attribute
 * @returns TSX script for the logo to be rendered.
 */

type logoComponentProps ={
    setSRC: string,
    setClassName: string
}
export default function LogoComponent({setSRC, setClassName}: logoComponentProps){

    return(
        <>
            <div className="flex flex-row gap-2">
                <div>
                    <picture>
                        <img src={setSRC} alt="KBS Logo" className={setClassName}/>
                    </picture>
                </div>
                <div id="logoText">
                    KBS Portal
                </div>
            </div>
        </>
    );
}