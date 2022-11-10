import React from "react";
import Create from "../../assets/works1.svg";
import Get from "../../assets/works2.svg";
import Finish from "../../assets/works3.svg";
import benefit1 from "../../assets/benefit1.svg";
import benefit2 from "../../assets/benefit2.svg";
import benefit3 from "../../assets/benefit3.svg";


export const HowWorks = () => {
 
  
  const works = [
    {
      id: 1,
      title:"Etape 1",
      desc:"Entrez le volume de USDT que vous souhaitez acheter. Vous pouvez également mentionner le montant total en Ouguiya pour ajuster le volume USDT.",
      src: Create,
    },
    {
      id: 2,
      title:"Etape 2",
desc:"Effectuez le paiement sur un de nos comptes.Après avoir payé,",
      src: Get,
    },
    {
      id: 3,
      title:"Etape 3",
desc:" Vous allez recever le montant de Usdt sur votre wallet. Arrive généralement sous 5 Minutes ",
      src: Finish,
    },

  ];
  
  const benefits = [
    {
      id: 1,
      title:" FASTER",
      desc:" automatique ,instantanée",
      src: benefit1,
    },
    {
      id: 2,
      title:" CHEAPER",
     desc:"0 frais de transaction Oui, c'est 100% gratuit ",
      src: benefit2,
    },
    {
      id: 3,
      title:" SIMPLER",
desc:"En toute sécurité avec des modes de paiment vérifiés ",
      src: benefit3,
    },

  ];

  return (

<div className="bg-white sm:w-full   md:h-screen   ">
<div className="container max-w-screen-lg mx-auto w-full py-10 ">
<div className="text-4xl font-bold text-center pb-4  text-black">Comment acheter des USDT sur BitRim</div>

<div className="row mt50 mt-sm-20 mb100 mb-sm-30 w-full py-30  grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 bg-sm:px-0">
{works.map(({ id, src, title, style,desc }) => (
<div className="col-md-4 col-12 ">
<div className="shadow-md  hover:scale-105 duration-500 py-2 rounded-lg bg-sky-50 h-75 flex flex-col justify-center "
  key={id}>
  <img src={src} alt="f" className="w-50 mx-auto h-25" />

<div className="w">
<div className="title font-20 font-sm-16 text-bold title-color position-relative py-3 text-2xl font-bold">{title} <span></span></div>
<div className="font-15 font-sm-13 desc-color">{desc} </div>
</div>
</div>
</div>
  ))}

    </div>

<div className="text-4xl font-bold text-center pb-4  text-black">AVANTAGES</div>

<div className="row mb-5 mt-sm-20  mb-sm-30 w-full grid grid-cols-2    sm:grid-cols-3 text-center py-8 px-12 bg-sm:px-0">
{benefits.map(({ id, src, title, style,desc }) => (
<div className="col-md-4 col-12 ">
<div className="shadow-md  hover:scale-105 duration-500 py-2 rounded-lg bg-sky-50 h-75 flex flex-col justify-center "
  key={id}>
  <img src={src} alt="f" className="w-50 h-25 mx-auto" />

<div className="w">
<div className="title font-10 font-sm-16 text-bold title-color position-relative py-3 text-1xl font-bold">{title} <span></span></div>
<div className="font-15 font-sm-13 desc-color">{desc} </div>
</div>
</div>
</div>
  ))}



    </div>
    </div>
    </div>
   
    
  )
}

export default HowWorks;