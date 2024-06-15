import Statusman from "@/components/statusman/statusman";

export default function Home(){
    return(
        <div className="h-full flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-[20] flex ">
                <div className="bg-[#1c1c1c] flex-[4] m-[1px] rounded-lg">
                    <Statusman/>
                </div>
                <div className="bg-[#1c1c1c] flex-[9] m-[1px] rounded-lg">f</div>
            </div>
        </div>
    );
}