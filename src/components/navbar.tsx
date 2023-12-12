import { useNavigate } from "react-router-dom";

function Navbar({ idx }: { idx: number }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed z-50 flex h-[160px] bg-transparent w-full items-center justify-between px-14">
        <div className="flex items-center gap-16">
          <img src="/assets/itebe.svg" alt="" className="w-20 h-20" />
          <p
            className={`text-[20px]  hover:font-bold cursor-pointer ${
              idx == 0 ? "font-bold" : "font-medium"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className={`text-[20px]  hover:font-bold cursor-pointer ${
              idx == 1 ? "font-bold" : "font-medium"
            }`}
            onClick={() => navigate("/virtual")}
          >
            3D Virtual Gallery 2022
          </p>
          <p
            className={`text-[20px]  hover:font-bold cursor-pointer ${
              idx == 2 ? "font-bold" : "font-medium"
            }`}
            onClick={() => navigate("/arsip")}
          >
            Arsip
          </p>
          <p
            className={`text-[20px]  hover:font-bold cursor-pointer ${
              idx == 3 ? "font-bold" : "font-medium"
            }`}
            onClick={() => navigate("/aboutus")}
          >
            About
          </p>
        </div>
        <img src="/assets/merdeka.svg" alt="" className="w-32 h-16" />
      </div>
    </>
  );
}

export default Navbar;
