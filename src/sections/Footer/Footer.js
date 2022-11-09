import React from 'react'
import { MDBFooter, } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <MDBFooter className='text-center text-white ' light bgColor=' bg-success bg-opacity-25 '>

            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-dark">BITRIM</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link className="text-primary" to="/">Bitrim.com</Link></p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-dark mb-3">à propos</h5>
                            <ul className="list-unstyled text-muted">
                                <li> Qui sommes-nous</li>
                                <li>Conditions d'utilisation</li>
                                <li>Politique de confidentialité</li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-dark mb-3">SUPPORT</h5>
                            <ul className="list-unstyled text-muted">
                                <li> Contacter le supports</li>
                                <li>FAQ</li>
                                <li>Guides</li>

                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-dark mb-3">Suivez nous sur
                            </h5>
                            <ul className="list-unstyled text-muted">
                                <li> Facebook</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Telegram</li>

                            </ul>
                        </div>


                    </div>
                </div>
            </footer>
        </MDBFooter>
    )
}

export default Footer