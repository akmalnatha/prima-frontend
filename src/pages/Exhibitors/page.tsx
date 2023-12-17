import { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Paginate from "../../components/paginate";
import SearchBar from "../../components/searchbar";
import LayoutAuth from "../../layout/LayoutAuth";
import { useNavigate } from "react-router";

export default function Exhibitors() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={5} />
        <div className="w-96 h-full absolute top-[-100px] right-[-12px] z-0 bg-[url('/assets/spiralexhibitors2.svg')] bg-cover" />
        <div className="w-full h-full flex flex-col px-10 lg:px-24 mb-[100px] lg:mb-[120px]">
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[-10px] left-[-100px]"
          />
          <img
            src="/assets/spiralexhibitors.svg"
            alt=""
            className="absolute -top-[200px] -left-[10px] z-0"
          />
          <img
            src="/assets/spiralexhibitors3.svg"
            alt=""
            className="absolute top-[800px] -left-[0px] z-0"
          />
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[1500px] left-[-100px]"
          />
          <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center z-40">
            PRIMA ITB 2023
          </p>
          <p className="mt-3 font-bold text-[28px] lg:text-[60px] text-center bg-gradient-to-b from-blue-primary to-blue-light bg-clip-text text-transparent">
            Exhibitors
          </p>
          <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center z-40">
            Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Virtual)
          </p>
          <div className="mt-10 lg:mt-16 w-full flex justify-center lg:justify-between items-center">
            <div className="hidden lg:block z-40">
              <Button
                type={"button"}
                icon={true}
                iconPosition="left"
                text="Back to Exhibitor Gallery"
                color="secondary"
                size="medium"
                onClick={() => navigate("/non-virtual/2023")}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <SearchBar placeholder={"Search ..."} />
            </div>
          </div>
          <div className="z-40 mt-10 lg:mt-14 w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <Card
              tipe={"exhibitors"}
              nama={
                "Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"
              }
            />
            <Card
              tipe={"exhibitors"}
              nama={
                "Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"
              }
            />
            <Card
              tipe={"exhibitors"}
              nama={
                "Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"
              }
            />
            <Card
              tipe={"exhibitors"}
              nama={
                "Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"
              }
            />
          </div>
          <div className="mt-4 w-full flex justify-center z-40">
            <Paginate totalPages={10} current={(e) => setCurrent(e)} />
          </div>
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
