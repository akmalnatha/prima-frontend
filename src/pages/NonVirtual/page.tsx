import { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Paginate from "../../components/paginate";
import SearchBar from "../../components/searchbar";

export default function NonVirtual() {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Navbar idx={5} />
      <div className="w-full h-full flex flex-col px-10 lg:px-24 mb-[100px] lg:mb-[120px]">
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
        <div className="w-[85%] mx-auto mt-6 lg:mt-12 mb-52 rounded-[40px] border-2 border-[#3F4283] pt-14 pb-20 px-[6%]">
          <p className="text-4xl text-center font-bold">Most Liked</p>
          <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-16 justify-items-center mx-auto">
            <Card tipe={"most liked"} nama={"Sekolah Bisnis Manajemen (SBM)"} subTipe="departemen"/>
            <Card tipe={"most liked"} nama={"Penyiapan “Desa Tanggap Banjir” di Kawasan Pesisir Sungan Peusangan, Provinsi Aceh"} subTipe="content"/>
            <Card tipe={"most liked"} nama={"Sekolah Bisnis Manajemen (SBM)"} subTipe="departemen"/>
            <Card tipe={"most liked"} nama={"Penyiapan “Desa Tanggap Banjir” di Kawasan Pesisir Sungan Peusangan, Provinsi Aceh"} subTipe="content"/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
