export default function Navbar() {
  return (
    <nav className="text-[#222222]">
      <div className="flex items-center justify-between drop-shadow-md py-2 px-4 gap-2 relative border-0	">
        <img
          src="https://miro.medium.com/max/1400/1*uK5URprcu6a2-MpBxbDiiw.png"
          alt="auriculares"
          width="200px"
          className="rounded-[50%]"
        />
        <div className="border-[1px] rounded-[100px] w-[155px]">
          <img
            src="https://aerolab-challenge-nicofishman.vercel.app/_next/image?url=%2Fimg%2Ficons%2FIcons.png&w=32&q=75"
            alt=""
          />
          $Plata que tenemos
        </div>
      </div>

      <div className=" w-full lg:flex justify-center mt-[20px] md:grid-cols-1 ">
        <h3 className="mt-[15px] text-[25px] ml-[25px]">
          Explora nuestros productos
          <span className="gap-[90px] mt-[40px] grid justify-center ">
            <img
              src="https://cdn.icon-icons.com/icons2/930/PNG/96/arrow-down_icon-icons.com_72377.png"
              alt=""
            />
            <img
              src="https://cdn.icon-icons.com/icons2/930/PNG/96/arrow-down_icon-icons.com_72377.png"
              alt=""
            />
          </span>
        </h3>
        <img
          className="rounded-[20%]"
          src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies-1024x683.jpg"
          alt="auriculares"
          width="750px"
        />
      </div>
    </nav>
  );
}
