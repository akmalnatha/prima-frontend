import Button from "../../components/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Home() {
  const YoutubeEmbed = ({ embedId }:{embedId: string}) => (
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
  return (
    <>
      <Navbar idx={0} />
      <div className="w-full h-screen flex flex-col">
        <p className="mt-[96px] lg:mt-[160px] font-bold text-[28px] lg:text-[60px] text-center">
          PRIMA ITB 2023
        </p>
        <p className="mt-3 font-medium text-[10px] lg:text-[28px] text-center">
          Pameran Riset, Inovasi, dan Pengabdian Masyarakat (Virtual)
        </p>
        <div className="mt-10 lg:mt-16 mx-auto flex flex-col gap-5 lg:gap-9 justify-center items-center w-max">
          <Button type={"button"} color="primary" text="Virtual 3D Gallery" fitContent={false}/>
          <Button type={"button"} color="primary" text="Non-Virtual 3D Gallery"/>
        </div>
        <div className="mt-10 lg:mt-14 w-[72%] h-[42%] lg:h-[795px] mx-auto border-[10px] border-blue-dark mb-[160px]">
          <div className="relative overflow-hidden h-0 pb-[56.25%] -translate-x-4 translate-y-4">
            <YoutubeEmbed embedId={"jia3fhBQ8qI"}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
