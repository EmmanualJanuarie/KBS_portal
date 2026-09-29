/**
 *  ADD NEW ADMINS/ ADD NEW USERS TO THE DASHBOARD // SHOWS ALSO WHO // CAN ALSO HANDLE USER REQUESTS
 * 
 * @function AdminPane
 * @returns tsx script to render Admin Pane
 */

import { useEffect, useState } from "react";
import { MATERIALS } from "../../../../../utils/materials";
import NewUserModal from "./modals/NewUserModal";
import NewAdminModal from "./modals/NewAdminModal";
import months from "../../../../../utils/months"
import TableSkeleton from "../../../skeleton-loaders/TableSkeleton";

export default function AdminPane(){
    const [openModal, setOpenModal] = useState("");

    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleOpen = (state: string) =>{
        setOpenModal(prev => prev === state ? "" : state);
    }

    interface Data {
        name:string; surname:string; email:string; role:string; expire: Date; isOnline: boolean;
    }
    const tableEntries:Data[] = [
        {name: "Alex", surname: "Morgan", email: "learner.one@example.com", role: "Learner", expire: new Date("2026-12-31"), isOnline: true},
        {name: "Sam", surname: "Jordan", email: "learner.two@example.com", role: "Learner", expire: new Date("2026-11-30"), isOnline: false},
        {name: "Riley", surname: "Taylor", email: "admin.demo@example.com", role: "Admin", expire: new Date("2026-10-31"), isOnline: true},
    ];


    interface Button{
        icon:string; name:string;setEvent: ()=> void;
    }
                                                 
    const buttons: Button[] = [
        {icon:MATERIALS.ICONS.ADD_ICON, name:"New User", setEvent() {
            handleOpen("user");
        },},
        {icon:MATERIALS.ICONS.ADD_ICON, name:"New Admin", setEvent() {
            handleOpen("admin");
        },},
    ]

    function table(){
        return(
            <>
                 <div className="flex bg-gold/96 p-10 w-full justify-center">
                {/* TABLET/ DESKTOP TABLE */}
                <div className="hidden lg:block shadow-xl rounded-xl w-full max-w-5xl">
                    <p className="mb-3 text-sm text-white">Sample records only. Passwords and access codes are never displayed.</p>
                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
                        {/* TABLE CONTENT */}
                        <thead className="bg-gray-100 text-gray-800 uppercase text-sm font-semibold">
                            <tr>
                                <th className="px-6 py-4 text-left">Name</th>
                                <th className="px-6 py-4 text-left">Surname</th>
                                <th className="px-6 py-4 text-left">Email</th>
                                <th className="px-6 py-4 text-left">Role</th>
                                <th className="px-6 py-4 text-left">Expire</th>
                                <th className="px-6 py-4 text-left">Status</th>
                            </tr>
                        </thead>

                        {tableEntries.map((td,index)=>(
                            <tbody key={index} className="text-gray-700 text-sm">
                                <tr className="border-b hover:bg-gray-50 transition">
                                <td className="px-6 py-4">{td.name}</td>
                                <td className="px-6 py-4">{td.surname}</td>
                                <td className="px-6 py-4 break-words max-w-[150px] truncate" title={td.email}>{td.email}</td>
                                <td className="px-6 py-4">{td.role}</td>
                                <td className="px-6 py-4" title={`${td.expire.getDate()}-${months(td.expire.getMonth()+1)}-${td.expire.getFullYear()}`}>{`${td.expire.getDate()}-${months(td.expire.getMonth()+1)}-${td.expire.getFullYear()}`}</td>
                                <td className="px-6 py-4">{td.isOnline? 
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <span className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-sm text-gray-700">Online</span>
                                        </div>
                                    </> 
                                    :
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <span className="h-4 w-4 rounded-full bg-gray-400"></span>
                                            <span className="text-sm text-gray-700">Offline</span>
                                        </div>
                                    </>}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>

                {/* MOBILE TABLE CARDS */}
                <div className="flex flex-col gap-10 justify-center lg:hidden">
                    {tableEntries.map((td,index)=>(
                        <div key={index} className="p-5 justify-center items-center bg-white/95 rounded-xl border-gray shadow-lg">
                            <div className="flex flex-col gap-2">
                                {/* NAME CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Name:</span>
                                    <span className="text-left">{td.name}</span>
                                </div>

                                {/* SURNAME CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Surname:</span>
                                    <span>{td.surname}</span>
                                </div>

                                {/* EMAIL CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Email:</span>
                                    <span className="break-words max-w-[150px] truncate">{td.email}</span>
                                </div>

                                {/* ROLE CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Role:</span>
                                    <span className="">{td.role}</span>
                                </div>

                                {/* EXPIRE CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Expire:</span>
                                    <span className="">{`${td.expire.getDate()}-${months(td.expire.getMonth()+1)}-${td.expire.getFullYear()}`}</span>
                                </div>

                                {/* STATUS CELL */}
                                <div className="flex justify-between items-start gap-6">
                                    <span className="semi-bold">Status:</span>
                                    <span className="">{td.isOnline? 
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <span className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-sm text-gray-700">Online</span>
                                        </div>
                                    </> 
                                    :
                                    <>
                                        <div className="flex items-center space-x-2">
                                            <span className="h-4 w-4 rounded-full bg-gray-400"></span>
                                            <span className="text-sm text-gray-700">Offline</span>
                                        </div>
                                    </>}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </>
        );
    }

    return (
        <>
            <div className="flex bg-white border-to-bottom-gray p-8 w-full justify-center items-center sm:justify-center md:justify-center lg:justify-end xl:justify-end">
                <div className="flex flex-row gap-10">
                    {/*BUTTONS*/}
                    {buttons.map((btn, index)=>(
                        <div key={index} className="flex flex-row gap-2 btn-type-1" onClick={btn.setEvent}>
                            <div className="shrink-0">
                                <picture>
                                    <img src={btn.icon} alt="icon" className="w-7"/>
                                </picture>
                            </div>

                            <div>{btn.name}</div>
                        </div>
                    ))} 
                </div>
            </div>

            {/* TOGGLE MODALS */}
            <div
                className={`
                    transition-all duration-300 ease-in-out
                    ${openModal ? "opacity-100 translate-y-0 max-h-[1px]" : "opacity-0 -translate-y-4 max-h-0 py-0"}
                `}
                >
                {openModal === "user" && <NewUserModal />}
                {openModal === "admin" && <NewAdminModal />}
            </div>

            {/* TABLE  */}
            {loading? <TableSkeleton /> : table()}
        
        </>
        
    )
}
