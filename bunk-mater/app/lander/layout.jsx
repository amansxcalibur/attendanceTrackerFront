export default function RootLayout({ children }) {
  return (
    <div className="w-full">
      <nav className="flex h-[3vw] bg-red-300">
        <p>BunkMate</p>
        <div className="flex flex-1 justify-center">
          <p>Home</p>
          <p>Features</p>
          <p>About</p>
        </div>
      </nav>
      <div className="h-full">{children}</div>
    </div>
  );
}
