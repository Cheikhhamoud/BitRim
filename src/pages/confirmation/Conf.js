import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/lbc.png';

const Conf = () => {
    return (
        <div>
            <div class="container  ">


                <div class=" mx-auto text-center py-5 h-100">
                    <h1 class=" mx-auto text-center  w-50"> Votre commande a bien été enregistrée.</h1>

                    <h4>Nous enverrons une confirmation et toute nouvelle information à :</h4>

                    <p>w...@gmail.com </p>
                    <Link> N° de commande W00045 </Link>
                </div>
                <div class=" pt-5 d-flex mx-auto justify-content-center align-items-center ">
                    <div class=" "><h1 class="w-75"> Arrive généralement sous 1 heure</h1> </div>
                    <img className="device" width="300px" alt='hero' src={hero} />
                </div>


            </div>


        </div>
    )
}

export default Conf