import hero from '../../assets/lbc.png';
import bg from '../../assets/bg-image.png';
import React from 'react';
import { Link } from 'react-router-dom';



function Hero() {
    return (
        <>
            <div className=" bg-image"
                   style={{ backgroundImage:  `url(${bg} )`}}>
                <div className="row container">


                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1  my-5">
                        <h1 className="text-white lh-base">Rejoignez la place de marché Bitcoin la plus fiable</h1>
                        <p className="text-white h4 lh-sm">Achetez et vendez des bitcoins partout.</p>
                        <Link to="/signin"
                            className="btn btn-light btn-lg text-white" style={{ background: "orange" }} type="button">Crèer un compte</Link>
                        <div className="pt-5">

                            <div className="row">
                                <div className="col-md-4 ftco-animate fadeInUp ftco-animated border">
                                    <div className="block-7">
                                        <div className="">
                                            <strong className="excerpt d-block text-white">≈40 millions d'MRO</strong>
                                            <p className=" text-white">Volume de transactions annuel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4  border ">
                                    <div className="block-7">

                                        <div className=" p-4">
                                            <span className="excerpt d-block text-white">+ de 5
                                                Currencies</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ftco-animate fadeInUp ftco-animated border">
                                    <div className="block-7">

                                        <div className="text-center p-4">
                                            <span className="excerpt d-block text-white">+ de 6
                                            </span>
                                            <p className=" text-white">Modes de paiement pris en charge</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block text-center ">

                        <img className="device" width="400px" alt='hero' src={hero} />

                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero