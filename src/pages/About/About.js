import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className=" w-full  sm:h-screen bggray-800 to-black text-dark dark:text-white mt"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center   ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <h1>Bienvenue dans l'ère de l'argent géré par les gens</h1>
                <p className="text-xl mt-10">
                <span className="font-semibold text-1xl   " style={{ color: "#fe914c" }} > Bit <b className="font-semibold text-1xl " style={{ color: "#0170b8", marginLeft: "-2px" }}  >Rim</b></span> a été lancé pour permettre aux gens d'échanger des cryptos de manière sécurisée et transparente. Nous pensons que pour que la crypto-monnaie soit adoptée en masse, l'échange de pièces doit être un processus transparent, où chaque partie comprend ce qu'elle obtient réellement à la fin. Nous visons à combler cette lacune en fournissant une plate-forme d'échange décentralisée.
                   
                </p>
                <br />
                <p className="text-xl">
                <h2>Contacter un commercial</h2>
                Si vous avez un problème qui relève de l'assistance ou si vous souhaitez nous faire des remarques sur la manière dont nous pourrions améliorer nos produits, nous en prendrons connaissance avec plaisir . Cependant, si vous souhaitez contacter BitRim pour d'autres demandes en lien avec notre activité, nous sommes également disponibles.
                  
                </p>
                <ul className="py-5-lg">
                    <h3>  Contacter nous via autres cannaux </h3>
                    <li>    contact@bitrim.com </li>
                    <li>   +222 26585935</li>
                    <li><a href="https://t.me/+xntrktbIKUtjNDBk">Telegram</a> </li>
                    <li><a href="https://www.facebook.com/profile.php?id=100063724375585">Facebook</a> </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
