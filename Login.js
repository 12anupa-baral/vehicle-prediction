import React from "react";
import animation from './images/animation.gif';
import caar from './images/caar.png';


function Login() {
    return (
        <div className=" bg-white box-border h-50 w-50 p-6 border-2 rounded-3xl color-whitete  mt-10 ml-10 mr-10 border-white" >
       <img className=" h-10 w-20" src={caar} alt="Logo" />
            <ul className="flex flex-row">
            <li className="font-serif font-bold text-2xl text-emerald-400 italic ml-10 fixed top-15 left-5 right-0" >Herbie</li>
       <div className="text-left align-middle  w-50 h-20 fixed bottom-30 right-80 ">
        <form className="text-left align-middle ">
  <label class="block">
    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 block text-sm font-medium text-slate-700 pb-5">Username</span>
    <input type="text" placeholder="name" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 h-15 w-80 pb-5"/>
      
  </label>
  <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-5">
    Email
  </span>
  <input type="email" name="email" class="pb-5 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>

<label class="block">
    <span class="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-5">Phone Number</span>
    <input  type="number" class="pb-5 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="+977"/>
  
  </label>
</form>
  </div>
            <li className="h-20 w-50 fixed buttom-5  mr-30 mb-10 "><img className=" h-80 w-100  " src={animation} alt="pic" /></li>
          </ul>
        </div>
    )
}
export default Login;