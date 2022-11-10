import React, { useState, useEffect } from "react";

import landing from '../../assets/langing.svg';
import mana from "../../assets/homepage/mana.svg";
import usdt from "../../assets/homepage/usdt.svg";
import btc from "../../assets/homepage/btc.svg";
import eth from "../../assets/homepage/eth.svg";
import usdc from "../../assets/homepage/usdc.svg";
import ltc from "../../assets/homepage/ltc.svg";
import bch from "../../assets/homepage/bch.svg";
import doge from "../../assets/homepage/doge.svg";
import axie from "../../assets/homepage/axie.svg";
import avalanche from "../../assets/homepage/av.svg";
import eur from "../../assets/homepage/eur.png";
import dai from "../../assets/homepage/ouiguiya.jpg";


import { Card } from "antd";
import axios from "axios";
import { useForm, } from 'react-hook-form';
import { useFormData } from "../../context";
import { Cart } from "./Cart";


const Convertor = () => {

  const { setFormValues } = useFormData();
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    setFormValues(values);
    // window.location = "/cart";
    setIsFormVisible(false);
  };
  const [initialState, setState] = useState({
    base: "USDT",
    amount: "",
    convertTo: "MRO",
    result: "",
  }); const { base, amount, convertTo, result, } = initialState;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    }
    else {
      const getApi = async () => {
        const response = await axios.get(
          `https://bitrim.herokuapp.com/api`);
        console.log(response)

        const result = (response.data[0].rates[convertTo] * amount).toFixed();
        setState({
          ...initialState,
          result,
        })
      }; getApi();

    }
  },[amount, base, convertTo]);


  //Comportement

  const onChangeInput = (e) => {
    setState({
      ...initialState,
      amount: e.target.value,
      result: null,

    });
   
  };
  const handleSelect = (e) => {
    setState({
      ...initialState,
      [e.target.name]: e.target.value,
      result: null,
    });
  };

  return (
    <>
      {isFormVisible ? (
        <>
          <div style={{ backgroundImage: `url(${landing} )` }}>

            <div className=" container  max-w-screen-lg p-4 mx-auto md:flex justify-between items-center flex flex-col-sm    sm:w-full  md:h-screen " >

              <div className=" pt-100 pb-100 pt-md-50">
                <div className="row mb50">

                  <div className="col-lg-6 col-md-12 plyr-container">
                    <div className="heading-block  ">
                      <h1 className="text-dark sm:leading-relaxed text-5xl font-bold ">Échangez
                        <br /><b className="orange-gradient-text" style={{ color: "orange" }}>des bitcoins</b>
                        <span> avec Bitrim</span>
                      </h1>

                    </div>
                    <div class="top-banner--desc font-sm-13 mt30 mt-sm-20 mb40 mb-sm-40 text-color-dark">
                      <h4 className="text-slate-400 lh-base h3"> BitRim est là pour rendre la conversion Ouguiya/Crypto moins chère, plus rapide et plus simple pour tout le monde! </h4>
                    </div>

                    <div class="p-logos align-items-center g-d-md-none d-flex  py-3">
                      <div className='w-25 h-25'><img alt="" className='w-10 h-50' src={btc} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={usdt} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={eur} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={dai} /></div>

                    </div>
                    <div class="p-logos align-items-center g-d-md-none d-flex  py-3">
                      <div className='w-25 h-25'><img alt="" className='w-10 h-50' src={eth} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={axie} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={avalanche} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={bch} /></div>

                    </div>
                    <div class="p-logos align-items-center g-d-md-none d-flex py-3">
                      <div className='w-25 h-25'><img alt="" className='w-10 h-50' src={usdc} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={mana} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={doge} /></div>
                      <div className='w-25 h-25'><img alt="" className='w-10 h-25' src={ltc} /></div>

                    </div>

                  </div>
                  <div className="col-lg-6 col-md-12" >
                    <div className="plyr-container landing-tabs">

                      <Card className="   bg-white rounded-4 ">
                        <h1 className="text-center pt-5 pt-lg-0 " >Passer la commande</h1>
                        <div className="d-none d-lg-block  "> <h4 className="ml-1 text "> Remplissez le formulaire ci-dessous pour passer la commande</h4></div>

                        <form onSubmit={handleSubmit(onSubmit)} >

                          <div className="bg-light rounded-4 py-5" >


                            <div className="row justify-content-between ">
                              <div className="form-group col-sm-6 flex-row d-flex mb-4 my-lg-0">
                                <img class="ml-auto mr-auto link-widget-img mb-4 mb-md-0" alt="hhh" style={{ maxHeight: "35px" ,maxWidth:"30px" }} src={usdt} />
                                <select name="base"
                                  value={base}
                                  onChange={handleSelect}
                                  className="rounded-2 ">
                                  {<option>{base}</option>
                                  }
                                </select>
                                <input
                                  type="number"
                                  {...register("amount")}
                                  value={amount}
                                  onChange={onChangeInput}

                                  className="form-control"
                                  placeholder="Entrer montant USDT "
                                />
                              </div>
                              <div className="form-group col-sm-6 flex-row d-flex">
                              <img class="ml-auto mr-auto" alt="hhh" style={{ maxHeight: "35x" ,maxWidth:"30px" }} src={dai} />
                                <select
                                  name="convertTo"
                                  value={convertTo}
                                  onChange={handleSelect} className="rounded-2 ">
                                  {<option>{convertTo}</option>
                                  }
                                </select>
                                <input
                                type="number"
                                  className="form-control "
                                  value={amount === "" ? "" : result === null ? "Calculating...." : result}       
                                  {...register("convertTo")}
                                />
                              </div>
                            </div>

                            <div className="row justify-content-between">
                              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Nom</label> <input type="text"
                                {...register("fullname")}
                                className="form-control" placeholder="Votre Nom" /> </div>
                              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Adress Wallet<span className="text-danger"> *</span></label> <input type="text"
                                {...register("binanceID", { required: true })}
                                className="form-control" placeholder="Binance ID où Adresse trc20" /> </div>
                            </div>
                            <div className="row justify-content-between text-left">
                              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Email </label> <input type="text"
                                {...register("email")}
                                className="form-control" placeholder="exemple@exemple.com" /> </div>
                              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Téléphone <span className="text-danger"> *</span></label> <input type="text"
                                {...register("phone", { required: true })}
                                className="form-control" placeholder=" 0022236*****" /> </div>
                            </div>

                            <hr className="my-5 "/>
                            <div className=" d-flex justify-content-center  py-3">

                              <p className="fw-4 h5 text-uppercase mx-3">Total : </p>

                              <h5>
                                {amount} {base}{" "}
                              </h5>

                              <span className="mx-2"> = </span>
                              <h5 className="px-2"

                              >

                                {amount === ""
                                  ? ""
                                  : result === null
                                    ? "result ..."
                                    : result
                                }
                                {convertTo}

                              </h5>
                            </div>
                            <button
                              className="btn d-block w-25 btn-primary text-center mx-auto text-white"

                            > Valider </button>
                          </div>
                        </form>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>




        </>
      ) : (<Cart />
      )}


    </>);
};

export default Convertor;

