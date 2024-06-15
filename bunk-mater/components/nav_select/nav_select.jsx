export default function NavSelect({ props }) {
    return (
        <div className="flex">
            <div className="justify-center relative m-auto flex h-[5vw] w-[5vw] overflow-hidden">
                <div className="m-auto h-[11vw] w-[5vw] translate-x-[7px] rotate-45 bg-black"></div>
            </div>
            <div className="h-[5vw] bg-black flex items-center">{props}</div>
            <div className="justify-center relative m-auto flex h-[5vw] w-[5vw] overflow-hidden">
                <div className="m-auto h-[11vw] w-[5vw] -translate-x-[7px] -rotate-45 bg-black"></div>
            </div>
        </div>
    );
}
