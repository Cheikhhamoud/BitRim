import React, { useState, useEffect } from "react";
import { Card } from "antd";
import Bankily from '../../assets/Bankily.png';
import Mauripay from '../../assets/Mauripay.png';
import Sedad from '../../assets/Sedad.svg';
import Masrivi from '../../assets/Masrivi.png';
import { Link } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';

// import { useFetch  } from "use-http";

const Convertor = () => {
  const { handleSubmit, register, formState: { error } } = useForm();
  const onSubmit = data => {
    console.log(data);
    fetch("/orders", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    //  .then(resp => {
    //    window.location = "/conf";
    //  });
  }



  const [initialState, setState] = useState({
    currencies: ["Usdt", "BUSD", "USDC", "EUR", "MRO"],
    base: "Usdt",
    amount: "",
    convertTo: "MRO",
    result: "",

  });

  const { currencies, base, amount, convertTo, result, } = initialState;





  useEffect(() => {
    if (amount === isNaN) {
      return;
    }
    else {
      const getApi = async () => {
        const response = await axios.get(
          `http://localhost:8000/api`);
        console.log(response)

        const result = (response.data[0].rates[convertTo] * amount).toFixed(1);
        setState({
          ...initialState,
          result,
        })

      };


      getApi();

    }
  }, [amount, base, convertTo]);

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

  const handleSwap = (e) => {
    e.preventDefault();
    setState({
      ...initialState,
      convertTo: base,
      base: convertTo,
      result: null,
    });
  };
  return (
    <div className="container-fluid py-5 bg-light  ">

      <Card className="d-flex justify-content-center mx-auto  bg-white w-50 rounded-4 ">
        <h1 className="text-center" >Trouver la meilleure offre !</h1>
        <h4 className="text-center text"> Remplissez le formulaire ci-dessous pour passer la commande</h4>

        <form onSubmit={handleSubmit(onSubmit)} >

          <div className="bg-light rounded-4 py-5" >
            <div className="row justify-content-between ">
              <div className="form-group col-sm-6 flex-row d-flex">
                <select name="base"
                  value={base}
                  onChange={handleSelect}
                  className="rounded-2 ">
                  {/* {currencies.map((currency) => (
              <option key={currency} value={currency}> {currency} </option> 
              ))} */}
                  {<option>{base}</option>
                  }

                </select>
                <input
                  type="number"
                  {...register("amount")}
                  value={amount}
                  onChange={onChangeInput}

                  className="form-control"
                  placeholder="Entrer le montant "
                />
                <div className="col-lg-2 align-self-center px-4">
                  <span className="col-lg-2 text-center" onClick={handleSwap} style={{ cursor: "pointer" }}>
                    &#8595;&#8593;
                  </span>
                </div>
              </div>
              <div className="form-group col-sm-6 flex-row d-flex">
                <select
                 
                  onChange={handleSelect}
                  className="rounded-2 "
                >

                  {/* {currencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))} */}
                  {<option>{convertTo}</option>
                  }
                </select>
                <input type="number" 
                disabled={true}
                   {...register("convertTo")}
                  value={amount === "" ? "" : result === null ? "Calculating...." : result}
                  className="form-control "
                />
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Fullname<span className="text-danger"> *</span></label> <input type="text"
                {...register("fullname", { required: true })}
                className="form-control" placeholder="Enter your fullname" /> </div>
              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Binance ID<span className="text-danger"> *</span></label> <input type="text"
                {...register("binanceID", { required: true })}
                className="form-control" placeholder="Enter your Binance ID /  adresse trc20" /> </div>
            </div>
            <div className="row justify-content-between text-left">
              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Email <span className="text-danger"> *</span></label> <input type="text"
                {...register("email", { required: true })}
                className="form-control" placeholder="exemple@exemple.com" /> </div>
              <div className="form-group col-sm-6 flex-column d-flex my-2"> <label className="form-control-label px-3">Téléphone <span className="text-danger"> *</span></label> <input type="text"
                {...register("phone", { required: true })}
                className="form-control" placeholder=" 0022236*****" /> </div>
            </div>



            <hr />
            <div className=" d-flex justify-content-center  py-3">

              <p className="fw-4 h5 text-uppercase mx-3">Total : </p>

              <h5>
                {amount} {base}{" "}
              </h5>

              <span className="mx-2"> = </span>
              <h5 className="px-2"
               {...register("total")}
               >

                {amount === ""
                  ? ""
                  : result === null
                    ? "result ..."
                    : result}
                {convertTo}

              </h5>
            </div>
            <hr />

            <div className=" container d-flex justify-content-around">
              <div> <h4 id="heading2" className="text-primary">Mode de paiement:</h4>
              </div>
              <div className="  d-flex justify-content-between" >
                <div className='radio' data-value="credit"><img src={Bankily} width="150px" height="60px " alt="Bankily" /></div>
                <div className='radio' data-value="paypal"><img src={Mauripay} width="150px" height="60px" alt="Mauripay" /></div>
              </div>
              <div className="  d-flex justify-content-between" >
                <div className='radio' data-value="credit"><img src={Sedad} width="150px" height="60px " alt="Sedad" /></div>
                <div className='radio' data-value="paypal"><img src={Masrivi} width="150px" height="60px" alt="Masrivi" /></div>
              </div>


            </div>


            <hr />



            <Link to="/conf" className="btn d-block w-25 btn-primary text-center mx-auto text-white" > Valider </Link>
          </div>
        </form>
      </Card>

    </div>

  );
};

export default Convertor;
