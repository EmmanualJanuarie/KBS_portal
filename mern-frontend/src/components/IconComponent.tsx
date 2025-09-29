/**
 * Contains the tsx script for the Icon Component layout
 * @function IconComponent
 * @returns TSX script for the Icon Component
 */

type iconComponentProps = {
    setSRC: string,
    setAlt: string,
    setClassName: string
}

export default function IconComponent({setSRC, setAlt, setClassName}: iconComponentProps){
    return (
        <>
            <picture>
                <img src={setSRC} alt={setAlt} className={setClassName}/>
            </picture>
        </>
    );
}