'use client'

import { useState } from "react";
import Link from "next/link";

export default function Layout({children}){
    const [slant, useSlant]=useState("Home");
    return(
        <>
            <div className="bg-red-300">
                <nav className="flex h-[5vw] justify-center items-center">
                    <div className="text-[2vw] flex justify-center items-center p-[1vw]">
                        <div className="rounded-full min-h-16 min-w-16 bg-white"></div>
                        <p className="ml-4">Bunk-Mater</p>
                    </div>
                    <div className="flex-1 flex h-full">
                        <ul className="flex flex-1 bg-slate-600 justify-center items-center text-[1.5vw]">
                            <li className={`p-[1vw] bg-orange-400 rounded-3xl ml-2`}>
                                <Link href="/dashboard/fiddler">Fiddler</Link>
                            </li>
                            <li className="p-[1vw] bg-orange-400 rounded-3xl ml-2">
                                <Link href="/dashboard/fiddler2">More Fiddler</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-[2vw] flex justify-center items-center p-[1vw]">
                        <div className="rounded-full min-h-16 min-w-16 bg-white"></div>
                        <p className="ml-4">Bunk-Mater</p>
                    </div>
                </nav>
            </div>
            {children}
        </>
    )
}