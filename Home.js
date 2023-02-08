import React from "react";
import caar from './images/caar.png';


function Home() {
    return (
        <div className=" bg-white box-border h-50 w-50 p-6 border-2 rounded-3xl color-whitete  mt-10 ml-10 mr-10 border-white" >
       <img className=" h-10 w-20" src={caar} alt="Logo" />
            <ul className="flex flex-row">
            <li className="font-serif font-bold text-2xl text-emerald-400 italic ml-10 fixed top-15 left-5 right-0" >Herbie</li>
  <nav >
            <ul className="flex flex-row">
              <li className=" ml-80 mr-2 cursor-pointer text-lg font-semibold text-slate-500 ">Platforms</li>
              <li className="ml-20  mr-2 cursor-pointer text-lg font-semibold text-slate-500">Plans</li>
              <li className="ml-20  mr-2 cursor-pointer  text-lg font-semibold text-slate-500 ">Features</li>
              <li className="ml-20  mr-2 cursor-pointer  text-lg font-semibold text-slate-500">Contact_us</li>
              <li className="ml-20  mr-2 cursor-pointer  text-lg font-semibold text-slate-500">Blogs</li>
             
             <li> <button className=" ml-20 mr-2 text-lg text-white font-semibold box-border h-10 w-40 p-1 border-2 rounded-xl text-center cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 drop-shadow-lg ">Sign In</button></li>
              <li><button className=" ml-10 mr-2  text-lg text-white font-semibold box-border h-10 w-40 p-1 border-2 rounded-xl  text-center cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 drop-shadow-lg">Sign Up</button></li>
              </ul>
      
  </nav>
            </ul>
            <ul className="flex flex-row">
            <ul className="flex flex-col">
            <li className="pb-8  text-blue text-5xl ml-10 mt-20 font-serif text-sky-600   font-bold "> Herbie,</li>
            <li className="pb-8 mb-0 text-blue text-5xl ml-10 font-serif   font-bold ">your</li>
            <li className="pb-8 mb-0 text-blue text-5xl ml-10 font-serif   font-bold ">automotive</li>
            <li className="pb-8 mb-0 text-blue text-5xl ml-10 font-serif   font-bold ">assistant</li>
            </ul>
            <li className="h-90 w-90 fixed bottom-20 left-50 right-20 mr-30 mb-10 "><img className=" h-80 w-100  " src={caar} alt="pic" /></li>
          </ul>
        </div>
    )
}
export default Home;