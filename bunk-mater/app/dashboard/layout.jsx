'use client'

import { options } from "../_utils/navbarConstants";
import NavMapped from "@/components/nav_select/nav_mapped";
import { usePathname } from "next/navigation";
import SideMenu from "@/components/nav_select/side_menu";

export default function Layout({children}){
    const pathname=usePathname();
    return(
        <div className="flex flex-col h-screen">
            <div className="bg-[#1c1c1c] max-sm:bg-black">
                <nav className="flex h-[5vw] overflow-hidden max-md:h-[72px]">
                    <div className="text-[2vw] flex items-center p-[1vw] max-sm:text-3xl max-sm:flex-1 max-sm:mt-3 ml-2 mb-2">
                        <div className="rounded-full min-h-[3.5vw] min-w-[3.5vw] bg-white max-sm:w-[54px] h-[54px] max-sm:hidden"></div>
                        <p className="ml-4 max-sm:flex-1 max-sm:text-4xl max-sm:ml-2">Bunk-Mater</p>
                    </div>
                    <div className="flex-1 flex justify-center max-sm:hidden">
                        <ul className="flex justify-center items-center text-[1.5vw]">
                            {options.map(option=>
                                <li key={option.id}>
                                    <NavMapped option={option.option}
                                                href={option.href}
                                                pathname={pathname}
                                                />
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center text-5xl px-5 sm:hidden">
                        <SideMenu options={options}
                                  pathname={pathname}/>
                    </div>
                    <div className="text-[2vw] flex justify-center items-center p-[1vw] invisible max-sm:hidden">
                        <div className="rounded-full min-h-16 min-w-16 bg-white"></div>
                        <p className="ml-4">Bunk-Mater</p>
                    </div>
                </nav>
            </div>
            <div className="h-full bg-black">{children}</div>
        </div>
    )
}