import { SlOptions } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";

import "./icones.css";

interface propsPostagem {
  username: string;
  location: string;
  profile_picture: string;
  post: string;
  like: boolean;
  describion: string;
  hastags: string;
  quantLikes: number;
}

export default function Postagem({
  username,
  location,
  profile_picture,
  post,
  like,
  describion,
  hastags,
  quantLikes,
}: propsPostagem) {
  return (
    <>
      <div className="border-solid border-2 border-black mx-500 my-8 py-10 pr-20 pl-20">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <img
              src={profile_picture}
              alt="Foto de perfil"
              className="rounded-full"
            />
            <div className="ml-4">
              <h1 className="font-bold text-2xl">{username}</h1>
              <h4>{location}</h4>
            </div>
          </div>
          <SlOptions className="icon-medium" />
        </div>

        <div className="flex justify-center items-center">
          <img src={post} alt="Post" className="h-800 w-800" />
        </div>

        <div className="flex justify-between pt-12 mb-5">
          <div className="flex">
            {like === true ? (
              <FaHeart className="text-red-500 mr-5 h-12 w-12" />
            ) : (
              <FaRegHeart className="mr-5 h-12 w-12" />
            )}

            <FaRegComment className="mr-5 h-12 w-12" />
            <BsSend className="h-12 w-12" />
          </div>

          <FaRegBookmark className="h-12 w-12" />
        </div>

        <div>
          <div className="flex items-center mb-5">
            <FaHeart className="mr-3" />
            <strong>{quantLikes} likes</strong>
          </div>
          <div className="flex mb-2">
            <strong>{username}</strong>
            <h3 className="ml-2">{describion}</h3>
          </div>
          <a href="./" className="text-blue-800">
            {hastags}
          </a>
        </div>
      </div>
    </>
  );
}
