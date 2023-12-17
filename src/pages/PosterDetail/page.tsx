import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function PosterDetail() {
  const nav = useNavigate();
  return (
    <>
      <Navbar idx={5} />
      <div className="w-full h-full flex flex-col px-10 lg:px-24 mb-[100px] lg:mb-[120px]">
        <p className="mt-[96px] lg:mt-[160px] font-semibold text-[16px] lg:text-[36px] text-center">
          Pengembangan Teknologi Material Bioaspal - Sebagai Bahan Peremaja
          untuk Material Daur Ulang Perkerasan Jalan Lentur - Part 2
        </p>
        <p className="mt-4 font-medium text-[12px] lg:text-[24px] text-center">
          Oleh: Bambang Sugeng, Eri Susanto, Atmy Verani R.S., dan Ivan Imanuel
        </p>
        <div className="mt-12 w-full flex justify-between">
          <Button
            type={"button"}
            icon={true}
            iconPosition="left"
            text="Back to Exhibitor Posters"
            color="secondary"
            onClick={() => nav("/exhibitors")}
          />
          <Button
            type={"button"}
            icon={true}
            iconPosition="left"
            text="Back to Exhibitor List"
            color="secondary"
          />
        </div>
        <div className="mt-12 w-full h-[1000px] pl-14">
            <div className="w-full h-full border-[6px] border-[#3F4283]">
                <img src="/assets/poster1.svg" alt="" className="w-[2000px] h-[1000px] -translate-x-14 translate-y-10" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}