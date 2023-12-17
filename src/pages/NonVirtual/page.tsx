import { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Paginate from "../../components/paginate";
import SearchBar from "../../components/searchbar";
import LayoutAuth from "../../layout/LayoutAuth";

export default function NonVirtual() {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={5} />
        <div className="w-full h-full flex flex-col px-7 lg:px-24 overflow-hidden relative">
          <img src="/assets/spiralnonvirtual1.svg" className="absolute -right-10 lg:-right-[340px] -top-14 lg:top-20 -z-10 w-[55%] sm:w-[40%] rotate-12 lg:rotate-0 lg:w-[40%]" alt="" />
          <img src="/assets/spiralnonvirtual2.svg" className="absolute left-0 top-[800px] lg:top-[380px] -z-10 w-[23%] lg:w-[20%]" alt="" />
          <img src="/assets/spiralnonvirtual3.svg" className="absolute left-0 bottom-0 md:-bottom-[20px] lg:-bottom-[120px] xl:-bottom-[224px] -z-10" alt="" />
          <img src="/assets/EllipseNonVirtual1.png" className="absolute -right-16 lg:-right-56 -top-52 lg:top-[80px] w-[90%] sm:w-[65%] lg:w-[45%] -z-10" alt="" />
          <img src="/assets/EllipseNonVirtual2.png" className="absolute -left-32 top-[680px] md:top-[560px] lg:top-[200px] w-[65%] lg:w-[45%] -z-10" alt="" />
          <img src="/assets/EllipseNonVirtual1.png" className="absolute -left-36 lg:-left-[340px] top-[200px] lg:top-[1400px] w-[90%] sm:w-[65%] lg:w-[45%] -z-10" alt="" />
          <img src="/assets/EllipseNonVirtual1.png" className="absolute -right-60 lg:-right-[340px] top-[1900px] lg:top-[800px] w-[90%] sm:w-[65%] lg:w-[45%] -z-10" alt="" />
          <img src="/assets/EllipseNonVirtual5.png" className="absolute bottom-16 md:bottom-48 mx-auto left-0 right-0 text-center -z-10" alt="" />
          <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center">
            PRIMA ITB 2023
          </p>
          <p className="mt-3 font-bold text-[28px] lg:text-[60px] text-center bg-gradient-to-b from-blue-primary to-blue-light bg-clip-text text-transparent">
            Non Virtual 3D Gallery
          </p>
          <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center">
            Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Virtual)
          </p>
          <div className="w-fit mx-auto mt-10 lg:mt-16">
            <Button
              type={"button"}
              color="primary"
              icon
              iconPosition="right"
              size="large"
              text="View Exhibitors"
            />
          </div>
          <div className="mt-10 lg:mt-16 w-full flex justify-center lg:justify-end">
            <div className="w-full lg:w-1/2">
              <SearchBar placeholder={"Search ..."} />
            </div>
          </div>
          <div className="w-full lg:w-[85%] mx-auto mt-6 lg:mt-12 mb-[132px] sm:mb-[208px] md:mb-[308px] lg:mb-[328px] rounded-[40px] border-2 border-[#3F4283] pt-14 pb-20 px-[6%] bg-gradient-to-b from-80% from-transparent to-90% to-white">
            <p className="text-2xl lg:text-4xl text-center font-bold">Most Liked</p>
            <div className="mt-16 grid grid-rows-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-x-7 gap-y-16 justify-items-center mx-auto">
              <Card tipe={"most liked"} nama={"Sekolah Bisnis Manajemen (SBM)"} subTipe="departemen"/>
              <Card tipe={"most liked"} nama={"Penyiapan “Desa Tanggap Banjir” di Kawasan Pesisir Sungan Peusangan, Provinsi Aceh"} subTipe="content"/>
              <Card tipe={"most liked"} nama={"Sekolah Bisnis Manajemen (SBM)"} subTipe="departemen"/>
              <Card tipe={"most liked"} nama={"Penyiapan “Desa Tanggap Banjir” di Kawasan Pesisir Sungan Peusangan, Provinsi Aceh"} subTipe="content"/>
            </div>
          </div>
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
