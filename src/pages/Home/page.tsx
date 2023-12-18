import { useNavigate } from "react-router";
import Button from "../../components/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import LayoutAuth from "../../layout/LayoutAuth";

export default function Home() {
  const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="absolute top-0 left-0 h-full w-full"
    />
  );
  const navigate = useNavigate();
  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={0} />
        <div className="w-full h-fit min-h-screen overflow-hidden flex flex-col relative">
          <img
            src="/assets/spiralhome1.svg"
            className="absolute lg:-top-28 -z-10 "
            alt=""
          />
          <img
            src="/assets/spiralhome2.svg"
            className="absolute top-[200px] md:top-[80px] lg:top-[132px] xl:top-3 -z-10"
            alt=""
          />
          <img
            src="/assets/spiralhome3.svg"
            className="absolute top-[400px] lg:top-[800px] xl:top-[900px] -left-[160px] sm:-left-[240px] lg:-left-[80px] -z-10"
            alt=""
          />
          <img
            src="/assets/Ellipsehome1.svg"
            className="absolute -top-60 lg:top-72 -left-[44%] lg:-left-[5%] -z-10"
            alt=""
          />
          <img
            src="/assets/Ellipsehome2.svg"
            className="absolute top-[560px] lg:top-[760px] left-[58%] -z-10"
            alt=""
          />
          <img
            src="/assets/spiralhome4.svg"
            className="absolute bottom-[360px] right-0 lg:hidden -z-10"
            alt=""
          />
          <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center">
            PRIMA ITB 2023
          </p>
          <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center">
            Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Virtual)
          </p>
          <div className="mt-10 lg:mt-16 mx-auto flex flex-col gap-5 lg:gap-9 justify-center items-center w-max">
            <Button
              type={"button"}
              color="primary"
              text="Virtual 3D Gallery"
              fitContent={false}
              onClick={() => window.location.href = "https://app.lapentor.com/sphere/prima-2023-pameran-riset-inovasi-pengabdian-masyarakat"}
            />
            <Button
              type={"button"}
              color="primary"
              text="Non-Virtual 3D Gallery"
              onClick={() => navigate("/non-virtual/2023")}
            />
          </div>
          <div className="mt-10 lg:mt-14 w-[72%] h-fit mx-auto border-[10px] border-blue-dark mb-[240px]">
            <div className="relative overflow-hidden h-0 pb-[56.25%] -translate-x-4 translate-y-4">
              <YoutubeEmbed embedId={"3Q9GXus_GEQ"} />
            </div>
          </div>
          <Footer />
        </div>
      </LayoutAuth>
    </>
  );
}
