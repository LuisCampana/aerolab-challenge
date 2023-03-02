export default function Navbar() {
  return (
    <nav className="text-[#222222]">
      <div className="flex items-center justify-between drop-shadow-md py-2 px-4 gap-2 relative border-0	">
        <img src="../img/aerolab-logo.svg" alt="auriculares" />
        <div className="border-[1px] rounded">
          <img
            src="https://aerolab-challenge-nicofishman.vercel.app/_next/image?url=%2Fimg%2Ficons%2FIcons.png&w=32&q=75"
            alt=""
          />
          tarjeta
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img
          src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies-1024x683.jpg"
          alt="auriculares"
        />
      </div>
    </nav>
  );
}
