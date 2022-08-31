import React, { useState } from "react";
import Image from "next/image";
import { FaExpand } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaPaintBrush } from 'react-icons/fa';

export default function Card({ image }) {
    const [showModal, setShowModal] = useState(false);
    const showLink = image.url;
    return (
        <>
        <div className="container">
            <div className="relative w-auto h-fit aspect-square cursor-pointer">
                <Image
                      src={image.src}
                      alt={image.name}
                      priority={true}
                      layout="fill"
                      objectFit="contain" 
                      onClick={() => setShowModal(true)}
                />
            </div>
            <div className="inline-flex justify-between">
            <div className="text-center p-1">
                <p>{image.name}</p>
            </div>
            <div className="float-right p-1 pt-2 cursor-pointer flex inline-flex">
              {showLink ? (
                <>
                <div className="pr-1">
                  <a
                      href={image.url}
                      className={"transition-colors text-black hover:text-violet-400"}
                      target="_blank"
                      rel="noreferrer"
                      title="Shop print"
                  >
                    <FaPaintBrush size="18" className=""/> &nbsp;
                  </a>
                </div>
                </>
                ) : null} 
              <a
                  onClick={() => setShowModal(true)}
                  className={"transition-colors hover:text-violet-400"}
                  target="_blank"
                  rel="noreferrer"
                  title="Expand"
              >
                <FaExpand size="18"/>
              </a>
            </div>
            </div>
        </div>
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-full h-full">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-between p-2 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-2xl font=semibold">{image.name}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineClose size="20"/>
                  </button>
                </div>
                <div className="relative flex-auto h-screen m-2">
                  <Image
                        src={image.src}
                        alt={image.name}
                        priority={true}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                  />
                </div>
                <div className="relative text-base p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <div className="float-left text-left text-base">
                    {image.materials} <br/>
                    {image.size}
                  </div>
                  {showLink ? (
                    <>
                  <div className="float-right pt-1">
                    <a
                        href={image.url}
                        className={"transition-colors rounded bg-emerald-200 text-black hover:text-violet-400 flex inline-flex"}
                        target="_blank"
                        rel="noreferrer"
                        title="Shop print"
                    >
                    &thinsp; Shop print &thinsp; <FaPaintBrush className="mt-1"/> &thinsp;
                    </a>
                  </div>
                  </>
                  ) : null} 
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
    );
}