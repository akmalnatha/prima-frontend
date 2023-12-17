import { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Paginate from "../../components/paginate";
import SearchBar from "../../components/searchbar";
import LayoutAuth from "../../layout/LayoutAuth";

export default function ExhibitorsPosters() {
    const [current, setCurrent] = useState(1);
  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={5} />
        <div className="w-full h-full flex flex-col px-10 lg:px-24 mb-[100px] lg:mb-[120px]">
          <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center">
            PRIMA ITB 2023
          </p>
          <p className="mt-3 font-bold text-[28px] lg:text-[60px] text-center bg-gradient-to-b from-blue-primary to-blue-light bg-clip-text text-transparent">
            Exhibitors Posters
          </p>
          <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center">
            Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Virtual)
          </p>
          <div className="mt-10 lg:mt-16 w-full flex justify-center lg:justify-between items-center">
            <div className="hidden lg:block">
              <Button
              type={"button"}
              icon={true}
              iconPosition="left"
              text="Back to Exhibitor Gallery"
              color="secondary"
              size="medium"
            />
              </div>
            <div className="w-full lg:w-1/2">
              <SearchBar placeholder={"Search ..."} />
            </div>
          </div>
          <div className="mt-10 lg:mt-14 w-full grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
              <Card tipe={"posters"} nama={"Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"} link="/poster_placeholder.svg"/>
              <Card tipe={"posters"} nama={"Lembaga Pengembangan"} link="/poster_placeholder.svg"/>
              <Card tipe={"posters"} nama={"Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"} link="/poster_placeholder.svg"/>
              <Card tipe={"posters"} nama={"Lembaga Pengembangan Inovasi dan Kewirausahaan ITB (LPIK-ITB)"} link="/poster_placeholder.svg"/>
          </div>
          <div className="mt-4 w-full flex justify-center">
              <Paginate totalPages={10} current={(e) => setCurrent(e)}/>
          </div>
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
