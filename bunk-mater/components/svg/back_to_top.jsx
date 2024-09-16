export default function BackToTop() {
  return (
    <button onClick={()=>{window.scrollTo(0,0)}} className="relative max-sm:w-36 max-sm:h-14 w-[9vw] h-[3.9vw] text-[1.5vw] max-md:text-[4vw] overflow-hidden border-none text-black bg-transparent pb-8 cursor-pointer group">
      <div className="text flex absolute w-full h-full">
        <span className="transition-opacity opacity-100 ml-1 group-hover:translate-y-[-60px]">Back</span>
        <span className="transition-opacity opacity-100 ml-1 group-hover:translate-y-[-60px]">to</span>
        <span className="transition-opacity opacity-100 ml-1 group-hover:translate-y-[-60px]">top</span>
      </div>
      <div className="clone flex absolute w-full h-full">
        <span className="transition-all opacity-100 ml-1 translate-y-[60px] group-hover:translate-y-0 delay-[150ms]">Back</span>
        <span className="transition-all opacity-100 ml-1 translate-y-[60px] group-hover:translate-y-0 delay-[200ms]">to</span>
        <span className="transition-all opacity-100 ml-1 translate-y-[60px] group-hover:translate-y-0 delay-[250ms]">top</span>
      </div>
      <svg
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-[-50deg] transition-all duration-200 ease-out group-hover:rotate-[-90deg] max-sm:w-5 max-sm:h-5 w-[1.5vw] h-[1.5vw]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
      <span className="absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 origin-bottom-right bg-current transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
    </button>
  );
}
