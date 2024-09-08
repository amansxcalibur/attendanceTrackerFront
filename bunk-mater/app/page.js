import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="absolute -z-10"></div>
      <div className="flex flex-col items-center justify-center flex-1 m-[1vw] bg-black rounded-[5vw]">
        <p className="text-[3vw]">Welcome to Bunk-Mate</p>
        {/* <p className="text-[#8a8a8a] pb-[1vw] max-w-[60vw] text-[1.5vw] text-center">Tired of having your attendance in the <span className="text-red-600">red</span>? Track bunks and perhaps mate. Maybe this will be your anti-kryptonite...</p> */}
        <button 
          type="button"
          className="bg-black max-sm:text-lg text-[1.5vw] font-light rounded-lg hover:text-black hover:bg-white transition duration-1000 border-[1px] border-b-blueviolet border-r-blueviolet border-t-white border-l-white p-4 text-blueviolet hover:border-b-[#ee67ee] hover:border-r-[#ee67ee] hover:border-t-blueviolet hover:border-l-blueviolet hover:shadow-[5px_5px_rgba(240,46,170,0.4),10px_10px_rgba(240,46,170,0.3),15px_15px_rgba(240,46,170,0.2)]"
            >
            <Link className="flex-1 p-[1vw]" href="/registration">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
