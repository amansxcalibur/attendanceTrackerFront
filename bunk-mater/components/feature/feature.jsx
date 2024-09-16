import RewindTime from "@/app/_assets/rewind_time.png"
import Statusman from "@/app/_assets/statusman.png"
import CoursesDropped from "@/app/_assets/courses_drop_cropped.png"
import Image from "next/image"

export default function Feature(){
    return(
        <>
        <div className="grid grid-rows-7 grid-flow-col justify-center max-h-[210vw] max-md:hidden">
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] flex items-end">
                    <p className="text-[1.5vw] flex-1 m-[2vw] break-normal">Add and edit your timetable</p>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-l from-[#1c1c1c73] hover:bg-[#1c1c1c73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
            </div>
            <div className="grid grid-cols-3 min-w-[80vw] max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-l from-[#1c1c1c73] hover:bg-[#1c1c1c73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] overflow-hidden hover:bg-[#1c1c1c73] transition">
                    <Image src={CoursesDropped} className="h-full w-full object-none object-center hover:scale-[1.05] transition"/>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-r from-[#1c1c1c73] hover:bg-[#1c1c1c73] transition"></div>
            </div>
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-br from-[#1c1c1c73]"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-tl from-[#33000073] hover:bg-[#33000073] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#330000] flex items-end">
                    <p className="text-[1.5vw] flex-1 m-[2vw] break-normal">Choose which day’s course status to change</p>
                </div>
            </div>
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-l from-[#33000073] hover:bg-[#33000073] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid overflow-hidden">
                    <Image src={RewindTime} className=" h-full object-none object-center w-full hover:scale-[1.05] transition"/>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-r from-[#33000073] hover:bg-[#33000073] transition"></div>
            </div>
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-tr from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-tl from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
            </div>
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-l from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] flex justify-center flex-col items-center overflow-hidden">
                    <Image src={Statusman} className="w-full h-full object-none object-center hover:scale-[1.05] transition"/>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-r from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
            </div>
            <div className="grid grid-cols-3 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#0f240d]">
                    <p className="text-[1.5vw] flex-1 m-[2vw] break-normal">Update your attendance for each course</p>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-bl from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
            </div>
        </div>
        <div className="grid grid-rows-7 grid-flow-col justify-center max-h-[300vw] md:hidden">
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-l from-[#1c1c1c73] hover:bg-[#1c1c1c73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
            </div>
            <div className="grid grid-cols-2 min-w-[80vw] max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] overflow-hidden hover:bg-[#1c1c1c73] transition">
                    <Image src={CoursesDropped} className="h-full w-full object-cover object-center hover:scale-[1.05] transition"/>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] flex items-end">
                    <p className="text-[5vw] flex-1 m-[2vw] break-normal">Add and edit your timetable</p>
                </div>
            </div>
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-br from-[#1c1c1c73]"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-tl from-[#33000073] hover:bg-[#33000073] transition"></div>
            </div>
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#330000] flex items-end">
                    <p className="text-[5vw] flex-1 m-[2vw] break-normal">Choose which day’s course status to change</p>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid overflow-hidden">
                    <Image src={RewindTime} className=" h-full object-center object-cover w-auto hover:scale-[1.05] transition"/>
                </div>
            </div>
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-tl from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
            </div>
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#1c1c1c] flex justify-center flex-col items-center overflow-hidden">
                    <Image src={Statusman} className="w-full h-full object-center object-cover hover:scale-[1.05] transition"/>
                </div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-[#0f240d]">
                    <p className="text-[5vw] flex-1 m-[2vw] break-normal">Update your attendance for each course</p>
                </div>
            </div>
            <div className="grid grid-cols-2 max-w-[90vw]">
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid bg-gradient-to-bl from-[#0f240d73] hover:bg-[#0f240d73] transition"></div>
                <div className="h-full w-full border-[#1c1c1c] border-[1px] border-solid"></div>
            </div>
        </div>
        </>
        // <div className="flex flex-col justify-center">
        //     <div className="flex justify-start">
        //     <Image src={CoursesDropped} className="w-[20vw] h-auto"/>
        //     <p>Add and edit your timetable</p>
        //     </div>
        //     <div className="flex justify-end">
        //     <p>Choose which day’s course status to change</p>
        //     <Image src={RewindTime} className="w-[20vw] h-auto"/>
        //     </div>
        //     <div className="flex justify-start">
        //     <Image src={Statusman} className="w-[20vw] h-auto"/>
        //     <p>Update your attendance for each course</p>
        //     </div>
        // </div>
    )
}