'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import NavSelect from "@/components/nav_select/nav_select";
import { ACCESS_TAB_NAME } from "../_utils/navbarConstans";

export default function Layout({children}){
    const [slant, setSlant]=useState("Home");
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem(ACCESS_TAB_NAME))!=null){
            setSlant(JSON.parse(localStorage.getItem(ACCESS_TAB_NAME)));
        }
    },[]);
    const tabUpdate=(param)=>{
        setSlant(param);
        localStorage.setItem(ACCESS_TAB_NAME,JSON.stringify(param));
    }
    return(
        <div className="flex flex-col h-screen">
            <div className="bg-[#1c1c1c]">
                <nav className="flex h-[5vw] overflow-hidden">
                    <div className="text-[2vw] flex justify-center items-center p-[1vw]">
                        <div className="rounded-full min-h-[3.5vw] min-w-[3.5vw] bg-white"></div>
                        <p className="ml-4">Bunk-Mater</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <ul className="flex justify-center items-center text-[1.5vw]">
                            <li>
                                {slant=="Home"?
                                <div className="mb-[-0.5vw]">
                                    <NavSelect props={
                                        <Link className="px-[2vw] mt-[-0.5vw]" href="/dashboard/home">
                                            <button type="submit" onClick={()=>{tabUpdate("Home")}}>Home</button>
                                        </Link>
                                    }/> 
                                </div>:
                                <div className="p-[1vw] bg-[#232222] rounded-3xl ml-2">
                                    <Link href="/dashboard/home">
                                        <button type="submit" onClick={()=>{tabUpdate("Home")}}>Home</button>
                                    </Link>
                                </div>
                                }
                            </li>
                            <li>
                                {slant=="Table"?
                                <div className="mb-[-0.5vw]">
                                    <NavSelect props={
                                        <Link className="px-[2vw] mt-[-0.5vw]" href="/dashboard/table">
                                            <button type="submit" onClick={()=>{tabUpdate("Table")}}>Table</button>
                                        </Link>
                                    }/>
                                </div>:
                                <div className="p-[1vw] bg-[#232222] rounded-3xl ml-2">
                                    <Link href="/dashboard/table">
                                        <button type="submit" onClick={()=>{tabUpdate("Table")}}>Table</button>
                                    </Link>
                                </div>
                                }
                            </li>
                            <li>
                                {slant=="Ranked"?
                                <div className="mb-[-0.5vw]">
                                    <NavSelect props={
                                        <Link className="px-[2vw] mt-[-0.5vw]" href="/dashboard/ranked">
                                            <button type="submit" onClick={()=>{tabUpdate("Ranked")}}>Ranked</button>
                                        </Link>
                                    }/>
                                </div>:
                                <div className="p-[1vw] bg-[#232222] rounded-3xl ml-2">
                                    <Link href="/dashboard/ranked">
                                        <button type="submit" onClick={()=>{tabUpdate("Ranked")}}>Ranked</button>
                                    </Link>
                                </div>
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="text-[2vw] flex justify-center items-center p-[1vw] invisible">
                        <div className="rounded-full min-h-16 min-w-16 bg-white"></div>
                        <p className="ml-4">Bunk-Mater</p>
                    </div>
                </nav>
            </div>
            <div className="h-full">{children}</div>
        </div>
    )
}