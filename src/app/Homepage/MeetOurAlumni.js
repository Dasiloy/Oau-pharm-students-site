"use client";
import React from "react";
import Button from "../components/button/button";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MeetOurAlumni() {
  const text = "Read more";
  const displayProperties = "bg-white text-fuchsia-800";
  const FirstHeading = "MEET OUR ALUMNI";
  const SecondHeading = "Alumni Of The Month";
  const HeadingBody =
    "PANS OAU make sure you can meet the old alumni. So, at PANS OAU, we\
            organize a variety of social events such as hangouts, movie nights,\
            parties, and other programs aimed at fostering social relationships.";

  const route = useRouter();
  return (
    <div className="md:mt-32 mt-20">
      <HeaderSection
        FirstHeading={FirstHeading}
        SecondHeading={SecondHeading}
        HeadingBody={HeadingBody}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center w-11/12  md:w-10/12 m-auto mt-5 md:mt-14">
        <div className=" md:col-span-2 bg-fuchsia-800 rounded-xl text-white  md:h-fit ">
          <div className="w-11/12 md:w-10/12 m-auto pb-10">
            <h1 className=" pt-20 text-3xl md:text-4xl font-bold">
              Pharm. Adejuwon Otelaja
            </h1>
            <p className="md:mt-10 mt-5 text-lg md:text-xl leading-4 ">
              Adejuwon Otelaja was born on the 16th of August 1950 in . He began
              his education at Okrika Grammar School, Okrika. The which started
              in July 1967 had his education interrupted. He later joined the
              war and fought for Biafran Army. After the war ended in 1970, he
              transferred to Government Secondary School, Owerri to complete his
              education. He obtained his in 1971. He then proceeded to the in
              1972 to study Pharmacy and graduated in 1976. He had postgraduate
              training in Business and Organisational Management at thin New
              York USA. He then proceeded to the in 1972 to study Pharmacy and
              graduated in 1976. He had postgraduate training in Business and
              Organisational Management at thin New York USA.
            </p>
            <div
              onClick={() => route.push("/MeetAlumni")}
              className="md:mt-14 flex"
            >
              <Button text={text} displayProperties={displayProperties} />
            </div>
          </div>
        </div>
        <div className=" mt-10 md:mt-0 md:-ml-14">
          <div>
            <Image
              src="/PharmAdejuwon.png"
              className="w-10/12 md:w-auto md:m-px m-auto md:h-xl"
              alt="PharmAdejuwon"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurAlumni;
