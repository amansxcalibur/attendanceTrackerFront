import Graph from "./graph"

export default function Data(){
    return(
        <div className="flex flex-col mx-[3vw] font-light mt-[2vw] h-full">
            <div className="mb-[1.5vw]">
                <p className="text-[6vw]">S2 <span className="font-thin">CSE</span></p>
            </div>
            <div className="flex">
                <div className="flex flex-[2] items-center">
                    <p className="text-[4.3vw] leading-[1]">78<span className="text-[3vw]">%</span></p>
                    <p className="text-[1.4vw] leading-[1.8vw] ml-4">Overall<br/>attendance</p>
                </div>
                <div className="flex flex-[3] items-center">
                    <p className="text-[4.3vw] leading-[1]">14<span className="text-[3vw]">d</span></p>
                    <p className="text-[1.5vw] leading-[2vw] ml-4">Overall<br/>bunks left</p>
                </div>
            </div>
            <div className="flex-1">
                <Graph/>
            </div>
        </div>
    )
}