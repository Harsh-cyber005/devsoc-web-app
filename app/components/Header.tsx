"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import DropMenu from "./DropMenu";

export default function Header() {
  const [hoverP, setHoverP] = useState(false);
  const [hoverS, setHoverS] = useState(false);
  const [hoverR, setHoverR] = useState(false);

  const [display, setDisplay] = useState("hidden");

  // const body = document.querySelector("body");
  // body?.addEventListener("click", (e) => {
  //   if (display === "hidden") {
  //     return;
  //   }
  //   else{
  //     if (e.target === document.getElementById("profile-pic-drop-menu")) {
  //       setDisplay("block");
  //       e.stopPropagation();
  //     }
  //     else if (e.target === document.getElementById("profile-pic")) {
  //       setDisplay("hidden");
  //       e.stopPropagation();
  //     }
  //     else{
  //       setDisplay("hidden");
  //     }
  //   }
  // });

  const myRef_P = useRef<HTMLImageElement | null>(null);
  const arrowP = myRef_P.current;
  const myRef_S = useRef<HTMLImageElement | null>(null);
  const arrowS = myRef_S.current;
  const myRef_R = useRef<HTMLImageElement | null>(null);
  const arrowR = myRef_R.current;

  function rotateArrowP() {
    if (arrowP) {
      arrowP.style.transform = "rotate(180deg)";
      arrowP.style.transition = "transform 0.2s ease-in-out";
    }
  }
  function rotateArrowBackP() {
    if (arrowP) {
      arrowP.style.transform = "rotate(0deg)";
    }
  }
  function rotateArrowS() {
    if (arrowS) {
      arrowS.style.transform = "rotate(180deg)";
      arrowS.style.transition = "transform 0.2s ease-in-out";
    }
  }
  function rotateArrowBackS() {
    if (arrowS) {
      arrowS.style.transform = "rotate(0deg)";
    }
  }
  function rotateArrowR() {
    if (arrowR) {
      arrowR.style.transform = "rotate(180deg)";
      arrowR.style.transition = "transform 0.2s ease-in-out";
    }
  }
  function rotateArrowBackR() {
    if (arrowR) {
      arrowR.style.transform = "rotate(0deg)";
    }
  }
  return (
    <header className=" h-[10%] border-b-[#1F1F1F] border-b-solid border-b-[1px] flex justify-between">
      <div className=" flex pr-[4%] ml-10 justify-center items-center relative min-w-max">
        <Image
          src={"/devsoc-text-logo.png"}
          alt="vercel-logo"
          width={100}
          height={100}
          className="  mr-[5%] w-fit aspect-auto h-[60%] cursor-pointer antialiased"
        />
        <div
          onMouseEnter={() => {
            setHoverP((prev) => !prev);
            rotateArrowP();
          }}
          onMouseLeave={() => {
            setHoverP((prev) => !prev);
            rotateArrowBackP();
          }}
          className=" relative text-[#868686] font-normal hover:text-[#E4E4E4] px-[1.1rem] pt-[0.1rem] pb-[0.2rem] rounded-2xl flex justify-center items-center hover:bg-[#1F1F1F] cursor-pointer nav-a"
        >
          <Link href={"#"} className=" mr-1">
            Projects
          </Link>
          <Image
            ref={myRef_P}
            alt="arrow"
            src={!hoverP ? "/arrow-down-dark.png" : "/arrow-down-light.png"}
            width={100}
            height={100}
            className="aspect-auto h-[15px] w-[15px] cursor-pointer"
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverS((prev) => !prev);
            rotateArrowS();
          }}
          onMouseLeave={() => {
            setHoverS((prev) => !prev);
            rotateArrowBackS();
          }}
          className=" relative text-[#868686] font-normal hover:text-[#E4E4E4] px-[1.1rem] pt-[0.1rem] pb-[0.2rem] rounded-2xl flex justify-center items-center hover:bg-[#1F1F1F] cursor-pointer nav-a"
        >
          <Link href={"#"} className=" mr-1">
            DevMate
          </Link>
          <Image
            ref={myRef_S}
            alt="arrow"
            src={!hoverS ? "/arrow-down-dark.png" : "/arrow-down-light.png"}
            width={100}
            height={100}
            className="aspect-auto h-[15px] w-[15px] cursor-pointer"
          />
        </div>
        <div
          onMouseEnter={() => {
            setHoverR((prev) => !prev);
            rotateArrowR();
          }}
          onMouseLeave={() => {
            setHoverR((prev) => !prev);
            rotateArrowBackR();
          }}
          className=" relative text-[#868686] font-normal hover:text-[#E4E4E4] px-[1.1rem] pt-[0.1rem] pb-[0.2rem] rounded-2xl flex justify-center items-center hover:bg-[#1F1F1F] cursor-pointer nav-a"
        >
          <Link href={"#"} className=" mr-1">
            Blogs
          </Link>
          <Image
            ref={myRef_R}
            alt="arrow"
            src={!hoverR ? "/arrow-down-dark.png" : "/arrow-down-light.png"}
            width={100}
            height={100}
            className="aspect-auto h-[15px] w-[15px] cursor-pointer"
          />
        </div>
        <div className=" relative text-[#868686] font-normal hover:text-[#E4E4E4] px-[1.1rem] pt-[0.1rem] pb-[0.2rem] rounded-2xl flex justify-center items-center hover:bg-[#1F1F1F] cursor-pointer nav-a min-w-max">
          <Link href={"#"}>Our Team</Link>
        </div>
        <div className=" relative text-[#868686] font-normal hover:text-[#E4E4E4] px-[1.1rem] pt-[0.1rem] pb-[0.2rem] rounded-2xl flex justify-center items-center hover:bg-[#1F1F1F] cursor-pointer nav-a min-w-max">
          <Link href={"#"}>About Developers&apos; Society</Link>
        </div>
      </div>
      <div className=" flex px-[4%] mr-3 justify-end items-center grow">
        <div className=" text-[#868686] font-normal hover:text-[#E4E4E4] rounded-2xl flex justify-center items-center cursor-pointer">
          <Link href={"/contacts"}>Contact</Link>
        </div>
        <div className="relative">
          <Image
            onClick={(e) => {
              if (display === "hidden") {
                setDisplay("block");
              } else {
                setDisplay("hidden");
              }
              e.stopPropagation();
            }}
            alt="profile-pic"
            src={"/profile-pic.jpeg"}
            width={100}
            height={100}
            className=" ml-5 rounded-[999px] aspect-auto h-[35px] w-[35px] cursor-pointer"
          />
          <div
            id="profile-pic-drop-menu"
            className={`absolute ${display} bg-black border-[#1F1F1F] border-solid border-2 rounded-2xl min-w-max h-auto right-0 mt-3`}
          >
            <DropMenu/>
          </div>
        </div>
      </div>
    </header>
  );
}
