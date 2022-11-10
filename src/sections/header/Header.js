import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {

    const links = [
    {

      id: 1,
      title:"Tokens Supported",
      link: "tokens",
      
    },
    {
      id: 2,
      title:"Comment fonctionne",
      link: "works",
    },
    {
      id: 3,
      title:"À propos",
      link: "about",
    },
 
  ];  
  const [nav, setNav] = useState(false);

  return (


    <header className="  mx-auto md:flex justify-between py-2 max-width bg-slate-50 border-2 border-zinc-300 ">
      <div className="flex justify-between items-center py-2 md:py-10">
        <a href="/"  className="no-underline" >
        <div  className="text-5xl  d-none d-lg-flex" >
        <img className=" ml-5 "   alt='bitrim logo' style = {{height :"50px",width:"60px"}}  src={logo} /> 
         <span className="font-semibold text-4xl   "  style = {{color :"#fe914c" }} > Bit <b  className="font-semibold text-4xl " style = {{color :"#0170b8" ,marginLeft:"-6px"}}  >Rim</b></span>
         
         </div>
        <img className="text-5xl d-lg-none mx-2 "  alt='bitrim logo' src={logo} />
       
        </a>
        <div onClick={() => setNav(!nav)}

        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      <nav className={` ${!nav ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-10 md:mr-10">
        {links.map(({ id, link,title}) => (
          <li className="px-4 cursor-pointer  font-medium text-gray-500 list-none"
           key={id} >
           
            <NavLink to= {link}
            className="px-4 cursor-pointer no-underline   font-medium text-gray-500  hover:slate-300 duration-200 "
            onClick={() => setNav(!nav)}>
            {title}
            </NavLink>
          </li>
          ))}
        </ul>
      
      </nav>
    </header>
  //   <
  );
}

export default Header;
