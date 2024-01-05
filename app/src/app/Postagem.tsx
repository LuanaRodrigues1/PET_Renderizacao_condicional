import { SlOptions } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import "./icones.css";

interface propsPostagem {
  username: string;
  location: string;
  profile_picture: string;
}

export default function Postagem({
  username,
  location,
  profile_picture,
}: propsPostagem) {
  return (
    <>
      <div className="border-solid border-2 border-black mx-96 my-8">
        <div className="flex justify-between items-center m-10">
          <div className="flex items-center">
            <FaUserCircle className="icon-large" />
            {/*<img src={profile_picture} alt="Foto de perfil" />*/}
            <div className="ml-4">
              <h1 className="font-bold text-2xl">{username}</h1>
              <h4>{location}</h4>
            </div>
          </div>
          <SlOptions className="icon-medium" />
        </div>

        <img src="" alt="" />
      </div>
    </>
  );
}
