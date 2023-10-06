// import Logo from "../assets/Logo.png";
// import Button from "./Button";
import React, { useEffect, useState } from "react";
import Trips from "../components/Trips"
import Book from "../components/Book"
import Plane from "../assets/images/Plane.jpg"
import canada from "../assets/images/canada.jpg"
import abuja from "../assets/images/abuja.jpg"
import ibadan from "../assets/images/ibadan.jpg"
import kano from "../assets/images/kano.jpg"
import japan from "../assets/images/japan.jpg"
import lagos from "../assets/images/lagos.jpg"
import airport from "../assets/images/airport.jpg"
import feedback from "../assets/images/feedback.jpg"

import { Link } from "react-router-dom";

import "../App.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Home=()=>{

  const [ message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/')
    .then((res) => res.text())
    .then((data) => setMessage(data))
    .catch((err) => console.log(err));
  }, [])

    return(<>
    
    <Navbar/>
<div className=" w-full">
    <div className="bg-no-repeat md:py-14 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/plane.jpg')]  h-80 md:h-96  w-full" style={{backgroundImage : `url(${Plane})`}}> 
<div className="sm:px-11 md:px-16 px-6   py-28  sm:w-1/2 w-full">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
    Life is short. Take a Trip!
</h1>
<p className="text-white py-4">The journey of a thousand miles starts with a simple takeoff</p>

<button className="rounded-lg text-white font-[Poppins] hover:bg-white hover:text-blue-600 transition-all duration-400 ease-in py-2 px-6 border-2 border-white"><Link to={"/Booking"} >Book</Link></button>
</div>

    
    </div>

<Book/>

<div className="container my-12 mx-auto px-4 md:px-10">
    <div className="w-full text-center">
        
<h1 className="md:text-3xl sm:text-2xl font-normal text-xl ">Start planning your next trip</h1>   
<p className="py-3 font-light">Thinking of going somwhere soon? Here's some ideas to get you started </p>
    </div>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

    <Trips image={canada} name={"Canada"} />
<Trips image={abuja}  name={"Abuja"} />
<Trips image={japan}  name={"Japan"} />
<Trips image={ibadan}  name={"Ibadan"} />
<Trips image={kano}  name={"Kano"} />
<Trips image={lagos}  name={"Lagos"} />

    </div>

    
</div>

<div className="bg-no-repeat flex items-center justify-center md:justify-end py-14 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/take.jpg')] h-96 w-full" style={{backgroundImage : `url(${feedback})`}}> 
<div className="w-full ml-10 justify-center items-center  md:w-1/2">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
    Never miss an offer
</h1>
<p className="text-white py-1">Subscribe and be the first to receive our exclusive offers.</p>
<form className="items-center">


<div class="mb-6  gap-3">

<input type="text" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 md:w-2/3  sm:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required/>

<input type="text"  id="password" class="shadow-sm mt-5  bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6  sm:w-1/2  md:w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required/>

<input type="text"  id="password" class="shadow-sm mt-5  bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 sm:w-1/2  md:w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Phone number" required/>

</div>
<button type="submit" class="text-white sm:w-1/4 w-5/6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
</form>
</div>


</div>
<div className="w-full h- text-center px-10 my-9">

<h1 className="md:text-4xl sm:text-3xl text-2xl ">We Want Your Feedback</h1>   
<p className="py-3 font-light">Our goal is to provide top notch service at every point of your Trip Air experience. Therefore, we are always happy to hear your views so we can continue to improve our offerings and surpass our passengers’ expectations. To share your comments & suggestions with us, please fill out and submit our online feedback form.</p>

{/* <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span><ion-icon name="megaphone"></ion-icon></span> Feedback</button> */}
</div>


<div className="bg-no-repeat text-center py-20 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/airport.jpg')] h-72 w-full" style={{backgroundImage : `url(${airport})`}}> 
{/* <div className="sm:px-11 md:px-16 px-6   py-28  sm:w-1/2 w-full">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
    Life is short. Take a Trip!
</h1>
<p className="text-white py-4">The journey of a thousand miles starts with a simple takeoff</p>

<button className="rounded-lg text-white font-[Poppins] py-2 px-6 border-2 border-white"><a href="/">Book</a></button>
</div> */}
<h1 className="md:text-4xl text-white font-bold  sm:text-3xl text-2xl ">Get in Touch</h1>   
<p className="py-3 text-white font-light">Trip International Airport | gbengasuulola05@gmail.com</p>

<button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span><ion-icon  name="chatbox-ellipses"></ion-icon></span> Feedback</button>
    
    </div>

    
    </div>
<Footer/>
    </>
    )
}


export default Home;