import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen text-black">
      <div className="h-[10vh] w-[10vw] flex justify-center items-center bg-[#1c1c1c] text-white rounded-3xl">
        <Link href='/dashboard/home'>Click to go home</Link>
      </div>
       <div className="flex flex-col h-screen">
        <header className="h-12 bg-gray-700 text-white flex items-center justify-center">Header</header>
        <div className="flex flex-grow overflow-hidden">
          <aside className="w-48 bg-gray-200 overflow-y-auto">
            <ul>
              {Array.from({ length: 30 }).map((_, idx) => (
                <li key={idx} className="p-2">Menu Entry</li>
              ))}
            </ul>
          </aside>
          <main className="flex-1 flex flex-col overflow-y-auto">
            <div className="flex-grow p-4">Large stuff here</div>
          </main>
          <aside className="w-48 bg-gray-200 overflow-y-auto">Another sidebar</aside>
        </div>
        <footer className="h-12 bg-gray-700 text-white flex items-center justify-center">Footer</footer>
      </div>
    </main>
  );
}
