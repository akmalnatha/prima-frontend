import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import LayoutAuth from "../../layout/LayoutAuth";
import { useEffect, useState } from "react";
import { getResearchByID, likeResearches } from "../../api/api";

export default function PosterDetail() {
  const nav = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [risetData, setRisetData] = useState({
    title: "",
    content: "",
    authors: "",
    liked: false,
    like_count: 0,
  });
  const [likess, setLikess] = useState(risetData.liked);
  const [likessCount, setLikessCount] = useState(risetData.like_count);
  const handleLike = (e: any) => {
    e.preventDefault();
    setLikess(!likess);
    if (params && params.id && typeof params.id === "string") {
      likeResearches(!likess, params.id);
    }
    if (likess) {
      setLikessCount(likessCount - 1);
    } else {
      setLikessCount(likessCount + 1);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    if (params && params.id && typeof params.id === "string") {
      const hasil = getResearchByID(params.id);
      console.log(hasil);
      hasil
        .then((res) => {
          setRisetData(res);
          setLikess(res.liked);
          setLikessCount(res.like_count);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <>
      <LayoutAuth title={"Prima ITB 2023"} needAuth={true}>
        <Navbar idx={5} />
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-[0px] right-[0px] z-0 bg-[url('/assets/spiraldetail.svg')] bg-cover" />
        <div className="w-[300px] h-[600px] md:w-[600px] md:h-[1000px] lg:w-[1000px] lg:h-[1200px] absolute top-[550px] md:top-[800px] lg:top-[1000px] xl:top-[1400px] right-[0px] -z-10 bg-[url('/assets/spiraldetail3.svg')] bg-cover" />
        <div className="w-full h-full flex flex-col px-10 lg:px-24 mb-[100px] lg:mb-[180px]">
          <img
            src="/assets/spiraldetail2.svg"
            alt=""
            className="absolute top-[200px] md:top-[80px] xl:top-[-100px] left-[0px] z-0"
          />
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[500px] lg:top-[1000px] left-[0px] z-0"
          />
          <img
            src="/assets/radial1.svg"
            alt=""
            className="absolute top-[600px] xl:top-[1500px] right-[0px] z-0 hidden md:block"
          />
          <img
            src="/assets/spiraldetail4.svg"
            alt=""
            className="w-[700px] h-[700px] absolute top-[1000px] lg:top-[1400px] xl:top-[2000px] left-[-200px] -z-10 hidden md:block"
          />
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[1000px] lg:top-[1500px] xl:top-[2100px] left-[0px] z-0 hidden md:block"
          />
          <p className="mt-[96px] lg:mt-[160px] font-semibold text-[16px] lg:text-[36px] text-center">
            {risetData.title}
          </p>
          <p className="mt-4 font-medium text-[12px] lg:text-[24px] text-center">
            Oleh: {risetData.authors}
          </p>
          <div className="mt-12 w-full flex justify-center md:justify-between z-40 items-center">
            <div className="hidden md:block">
              <Button
                type={"button"}
                icon={true}
                iconPosition="left"
                text="Back to Exhibitor Posters"
                color="secondary"
                size="medium"
                onClick={() => nav("/exhibitors-posters")}
              />
            </div>
            <Button
              type={"button"}
              text="Apresiasi riset ini dengan memberikan sebuah like!"
              color="like"
              like={likessCount}
              onClick={handleLike}
            />
          </div>
          <div className="mt-12 w-full h-fit z-40">
            <div className="w-fit h-fit border-[10px] border-[#3F4283] mx-auto">
              <img
                src="/assets/poster1.svg"
                alt=""
                className=" -translate-x-4 translate-y-4"
              />
            </div>
          </div>
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
