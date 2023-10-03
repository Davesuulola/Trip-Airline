import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import attend from "../assets/images/attend.jpg"
import pilot from "../assets/images/pilot.jpg"
import flight from "../assets/images/flight.jpg"

const  About =()=>{
    return(
        <>
        <Navbar/>
<div className="w-full">
<div className="bg-no-repeat py-14 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/dest.jpg')] h-80  md:h-96 w-full" style={{backgroundImage : `url(${flight})`}}> 

<div className="sm:px-11 md:px-16 px-6   py-36  sm:w-1/2 w-full">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
About us
</h1>
</div>

</div>


  


<div className="w-full my-12 ">
        <div>
            
        <h1 className="text-center md:text-2xl sm:text-xl text-xl ">WHY FLY TRIP AIR?</h1>   
        </div>
   <div className="md:flex my-6">

<div className="md:w-1/2 px-6 md:ml-12">
<h1 className="font-bold md:text-3xl sm:text-l">OUR MISSION</h1>
<p className="py-3 font-light">

Trip Air aims to set the standard as the airline of choice for passengers in Nigeria, West Africa and beyond by focusing on service excellence, hospitality and innovation, plus our infusion of style and grace!

Every time you fly with us, our goal is to provide you and every one of our passengers with a safe, consistent, reliable, comfortable and enjoyable flying experience. We take pride in our airline and will always act in the best interest of our customers.

Thank you for choosing Trip Air!

</p>

</div>
<div className="px-6 md:w-1/2">
<img src={pilot} alt="" />
</div>

   </div>

            </div>

</div>
<Footer/>
</>
    )
}

export default About