import React from "react";
import Image from "next/image";
interface AboutComponent {
  image:string,
  headings:string,
  body:string,
  avatar:string,
  name:string

}
const OurArticlesCard : React.FC<AboutComponent>= ( { image, headings, body, avatar, name } ) => {

  return (
    <div className=" w-96">
      <div className=" flex">
        <Image width={500} height={500} alt="Articles" src={image} />
      </div>
      <div>
        <h1 className="md:text-2xl text-[#9D5086] text-md lg:text-lg font-bold mt-5">{headings}</h1>
      </div>
      <div>
        <p className="md:text-md  text-sm mt-5">{body}...read more</p>
      </div>
      <div className="flex gap-5 items-center mt-2">
        <div>
          <Image width={40} height={40} alt="Cards" src={avatar} />
        </div>
        <div>{name}</div>
      </div>
    </div>
  );
}

export default OurArticlesCard;
