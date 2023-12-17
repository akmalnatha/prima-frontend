import { MouseEventHandler, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import Button from "./button";
import "./card.css"

const Card = ({
  tipe = "most liked",
  subTipe,
  nama,
  likes = 0,
  link,
  onClick,
  onClickLike,
  liked
}: {
  tipe: "exhibitors" | "most liked" | "posters";
  subTipe?: "departemen" | "content";
  nama: string;
  likes?: number;
  link?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  onClickLike?: MouseEventHandler<HTMLDivElement> | undefined;
  liked?: boolean
}) => {
  const [likedPost, setLikedPost] = useState<boolean>(liked ? liked : false);
  const [totalLikes, setTotalLikes] = useState<number>(likes);
  function handleLikePost() {
    onClickLike;
    if(likedPost){
      setTotalLikes(totalLikes-1);
    } else {
      setTotalLikes(totalLikes+1)
    }
    setLikedPost(!likedPost);
  }
  return (
    <>
      {tipe == "most liked" && (
        <div
          className="w-full max-w-[568px] h-full bg-white hover:bg-mono-light_grey rounded-[25px] card-shadow pb-4 cursor-pointer"
          onClick={onClick}
        >
          <div className="w-full h-full flex flex-col items-center justify-between gap-4">
            <div className="w-full h-fit flex flex-col items-center gap-4">
              <img
                src={link != undefined ? link : "/assets/image_not_found.png"}
                alt="Card picture"
                className="w-full h-[180px] lg:h-[300px] object-cover rounded-t-[25px]"
              />
              { subTipe && <p className="font-bold text-xl lg:text-3xl text-center w-full text-purple-primary">
                {subTipe == "departemen" ? "Departemen" : "Content"}
              </p>}
              <p className="font-medium text-base lg:text-xl px-4 text-center w-full">
                {nama}
              </p>
            </div>
            <div className={`flex py-1 px-3 gap-2 ${likedPost ? "text-purple-primary border-purple-primary" : "text-black border-black"} hover:text-blue-light active:text-blue-primary hover:border-blue-light active:border-blue-primary text-base lg:text-xl items-center border-2 rounded-[14px]`} onClick={() => handleLikePost()}>
              {likedPost ? <BiSolidLike/> : <BiLike/>}
              <p>{totalLikes} Likes</p>
            </div>
          </div>
        </div>
      )}
      {tipe == "exhibitors" && (
        <div
          className="w-full max-w-[506px] h-full bg-white hover:bg-mono-light_grey rounded-[25px] card-shadow pb-6 cursor-pointer"
          onClick={onClick}
        >
          <div className="w-full h-full flex flex-col items-center justify-between gap-4">
            <div className="w-full h-fit flex flex-col items-center gap-4">
              <img
                src={link != undefined ? link : "/assets/image_not_found.png"}
                alt="Card picture"
                className="w-full h-[290px] object-cover rounded-t-[25px]"
              />
              <p className="font-medium text-base lg:text-xl px-4 text-center w-full">
                {nama}
              </p>
              <div className="flex justify-between items-center w-full px-6">
                <Button type={"button"} color="primary" icon iconPosition="right" size="small" text="See Posters"/>
                <div className={`flex flex-col ${likedPost ? "text-purple-primary" : "text-black"} hover:text-blue-light active:text-blue-primary text-3xl items-center`} onClick={() => handleLikePost()}>
                  {likedPost ? <BiSolidLike/> : <BiLike/>}
                  <p className="text-xs">{totalLikes} Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {tipe == "posters" && (
        <div
          className="w-full max-w-[506px] h-full bg-white hover:bg-mono-light_grey rounded-[25px] card-shadow cursor-pointer"
          onClick={onClick}
        >
          <div className="w-full h-fit flex flex-col p-4 pb-6 items-center justify-between gap-4">
            <img
              src={link != undefined ? link : "/assets/image_not_found.png"}
              alt="Card picture"
              className="w-full h-[670px] object-cover"
            />
            <p className="font-medium text-base lg:text-xl px-4 text-center w-full">
              {nama}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
