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
  const [link, setLink] = useState("");
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
          setLink(res.picture_ori);
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
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-[0px] right-[0px] z-0 bg-[url('./assets/spiraldetail.svg')] bg-cover" />
        <div className="w-[300px] h-[600px] md:w-[600px] md:h-[1000px] lg:w-[1000px] lg:h-[1200px] absolute top-[550px] md:top-[800px] lg:top-[1000px] xl:top-[1400px] right-[0px] -z-10 bg-[url('./assets/spiraldetail3.svg')] bg-cover" />
        <div className="w-full h-full flex flex-col px-10 lg:px-24 pb-[100px] lg:pb-[180px] relative overflow-hidden">
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
            className="w-[700px] h-[700px] absolute top-[800px] lg:top-[1200px] xl:top-[1800px] left-[-200px] -z-10 hidden md:block"
          />
          <img
            src="/assets/radial.svg"
            alt=""
            className="absolute top-[800px] lg:top-[1300px] xl:top-[1900px] left-[0px] z-0 hidden md:block"
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
                onClick={() => nav(-1)}
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
          {isLoading ? (
            <div role="status" className="w-full flex justify-center mt-10">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-orange-primary animate-spin dark:text-gray-600 fill-blue-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
          <div className="mt-12 w-full h-fit z-40">
            <div className="w-fit h-fit border-[10px] border-[#3F4283] mx-auto">
              <img
                src={`https://prima.itb.ac.id/adminpanel/${link}`}
                alt=""
                className=" -translate-x-4 translate-y-4"
              />
            </div>
          </div>
          )}
        </div>
        <Footer />
      </LayoutAuth>
    </>
  );
}
