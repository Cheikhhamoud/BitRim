import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext, useFormData } from '../../context';
import { Conf } from '../../pages';
import './Cart.css'
import Bankily from '../../assets/Bankily.png';
import Mauripay from '../../assets/Mauripay.png';
import Sedad from '../../assets/Sedad.svg';
import Masrivi from '../../assets/Masrivi.png';

export const Cart = () => {
  const payments =

    [
      {
        id: 1,
        title: "Bankily",
        src: Bankily,
        style: "text-yellow-500",
      },
      {
        id: 2,
        title: "Mauripay",
        src: Mauripay,
        style: "text-sky-900",

      },
      {
        id: 3,
        title: "Sedad",
        src: Sedad,
        style: "text-green-600 ,font-semibold",

      },
      {
        id: 4,
        title: "Masrivi",
        src: Masrivi,
        style: "text-teal-300, font-semibold",


      },

    ];

  const { data } = useFormData(FormContext);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    fetch("https://bitrim.herokuapp.com/orders", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    setIsFormVisible(false);
  };


  const recap = [
    {
      id: 1,
      title: "Nom",
      src: Bankily,
      data: data.fullname,
    },
    {
      id: 2,
      title: "Email",
      src: Mauripay,
      data: data.email,
    },
    {
      id: 3,
      title: "Téléphone",
      src: Sedad,
      data: data.phone,
    },
    {
      id: 4,
      title: "Portfeuille Adress",
      src: Masrivi,
      data: data.binanceID,
    },
    {
      id: 4,
      title: "Montant USDT",
      src: Masrivi,
      data: data.amount,

    },


  ];


  const [show, setShow] = useState(false)
  const [details, setDetails] = useState()




  return (<>
    {isFormVisible ? (
      <div className="container rounded bg-white flex flex-col justify-center sm:h-screen  ">
        <div className="row d-flex justify-content-center pb-5  ">

        <div className="col-sm-3 col-md-5 ">
            <div className="py-4 d-flex ">
              <h6><a href="/">Retour</a></h6>
            </div>

            <div className="bg-light rounded d-flex flex-column">
              <div className="p-2"><h4>Récapitulatif de votre commande </h4></div>
              
              <form onSubmit={handleSubmit(onSubmit)} >
                {recap.map(({ id, src, data, title }) => (
                  <div className="p-2 d-flex" key={id} >
                    <div className="col-8">{title}</div>
                    <div className="">{data}</div>
                  </div>
                ))}
                <div className="p-2 d-flex pt-3">
                  <div className="col-8 text-2xl"><b>Total</b></div>
                  <div className=" text-2xl"> <span style={{ color: "#fe914c" }}>{data.convertTo}  MRO</span></div>
                </div>
              <div className='py-3'> 
                <button
                  className="btn d-block w-25  btn-primary  mx-auto text-white"
                > Valider </button>
               </div>
              </form>
            </div>
          </div>
          <div className="col-sm-5 col-md-5 ml-1 offset-md-1 mobile ">
            <div className="py-4 d-flex flex-row">
              <h5 className='text-3xl font-bold'>Mode de paiement</h5>
            </div>

            <p className='text-xl'>Vous pouvez utiliser les modes de paiement suivants :</p>

            
            <div className="pt-2">

              <form className="pb-3 ">
                {show && (
                  <div className=" py-2 bg-gray-100 rounded-lg text-gray-700">
                    Merci de bien vouloir transférer le montant sur le compte <span className="font-bold ">{details} </span>suivant <span className="font-bold text-rose-500">26585935</span>
                  </div>

                )}

                {payments.map(({ id, src, title, style }) => (
                  <div className="d-flex flex-row align-content-center" key={id}>

                    <div className="pt-2 pr-2">
                      <input type="radio" name="radio" value={title} id={id}
                        onClick={() => setShow(true)}
                        onChange={e => setDetails(e.target.value)} />

                    </div>

                    <div className="rounded border d-flex w-100 px-2 my-2  " >

                      <div className={`pt-2 ${style} font-semibold text-justify text-2xl `}><p>{title}</p></div> <br />


                      <div className="ml-auto pt-2"><img src={src} width="150px" height="60px " alt={title} /></div>
                    </div>
                  </div>
                ))}





              </form>

            </div>
          </div>
         
        </div>
      </div>
    ) : (<Conf />
    )}

  </>
  )
}
