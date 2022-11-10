import React from "react";


import miye from "../../assets/tokens/miye.jpg";
import ust from "../../assets/tokens/ust.png";
import usdt from "../../assets/tokens/usdt.png";
import busd from "../../assets/tokens/busd.png";
import eur from "../../assets/tokens/eur.png";
import usdc from "../../assets/tokens/usdc.png";
import dai from "../../assets/tokens/dai.png";
import gusd from "../../assets/tokens/gusd.png";
import tusd from "../../assets/tokens/tusd.png";

const Tokens = () => {
  const techs = [
    {
      id: 1,
      src: usdt,
      title:"USDT",
    },
    {
      id: 2,
      src: busd  ,
      title:"BUSD",
    },
    {
      id: 3,
      src: eur,
      title:"EUR",
    },
    {
      id: 4,
      src: miye ,
      title:"MRO",
    },
    {
      id: 5,
      src: dai ,
      title:"DAI",
    },
    {
      id: 6,
      src: usdc,
      title:"USDC",
    },
    {
      id: 7,
      src: gusd,
      title:"GUSD",
     
    },
    {
      id: 8,
      src: ust ,
     title:"UST",
    },
     { id: 9,
      src: tusd ,
     title:"TUSD",
    },

  ];

  return (
    <div
      name="Marketplace"
      className=" w-full sm:h-screen  " 
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  text-white sm:h-screen  ">
        <div className="pt-8 mt-8">
          <p className="text-4xl font-bold sm:text-center sm:p-2 inline text-black py-5">
          Tokens pris en charge
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-4xl font-bold text-center text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokens;
