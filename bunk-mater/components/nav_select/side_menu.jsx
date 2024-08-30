'use client'

import Link from "next/link"
import { useState } from "react"
import Bars from "../svg/bars-3"

export default function SideMenu({options, href, pathname}){
    const [open, setOpen]=useState(false)
    return(
        <>
            <button className="text-5xl" onClick={()=>{setOpen(true)}}>
                <Bars/>
            </button>
            <div className={`absolute z-10 bg-[rgba(20,20,20,0.5)] backdrop-blur-sm h-[100vh] w-full left-0 top-0 flex justify-end ${open?'':'hidden'}`}>
                <div className="bg-black w-44 p-4 rounded-l-3xl">
                    <button className="text-5xl" onClick={()=>{setOpen(false)}}>X</button>
                    <ul className="flex justify-center flex-col text-4xl mt-3">
                        {options.map(option=>
                            <li key={option.id} className="mt-1">
                                <Link onClick={()=>setOpen(false)} href={option.href}>{option.option}</Link>
                            </li>
                        )}
                    </ul>
                    <ul className="absolute bottom-0 mb-4">
                        <li>
                            <button className="text-4xl">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}