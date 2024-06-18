import Statusman from "@/components/statusman/statusman";
import Data from "@/components/statistics/data";

export default function Home(){
    return(
        <div className="h-full flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-[20] flex ">
                <div className="bg-[#1c1c1c] flex-[4] m-[1px] px-5 rounded-[20px]">
                    <Statusman/>
                </div>
                <div className="bg-[#1c1c1c] flex-[9] m-[1px] rounded-[20px]">
                    <Data/>
                </div>
            </div>
        </div>
    );
}