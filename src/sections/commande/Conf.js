import React from 'react';
import hero from '../../assets/lbc.png';
import { FormContext, useFormData } from '../../context';

const Conf = () => {
    const  {data}  = useFormData(FormContext);

    return (
        <div>
            <div className="container  ">


                <div className=" mx-auto text-center py-5 flex flex-col justify-center  w-full-sm h-full-lg ">
                <h1> Merci  <span className="font-semibold text-1xl   " style={{ color: "#fe914c" }}> {data.fullname}</span> </h1>
                    <h1 className="  sm:text-center  sm:w-50"> Votre commande a bien été enregistrée.</h1>

                    <h4 className="font-semibold py-3   ">Nous enverrons une confirmation et toute nouvelle information à :</h4>
                    <p className="  sm:text-center text-xl  sm:w-50 text-sky-700">{data.email} </p>
                   
                </div>
                <div className=" pt-5 d-flex mx-auto  align-items-lg-center flex-col justify-center  sm:flex-row sm:justify-center">
                    <div className=" "><h1 className="w-75"> Arrive généralement sous 10 minutes</h1> </div>
                    <img className="device" width="300px" alt='hero' src={hero} />
                </div>


            </div>


        </div>
    )
}

export default Conf