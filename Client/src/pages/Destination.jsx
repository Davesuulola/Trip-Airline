import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import dest from "../assets/images/dest.jpg"
import Trips from "../components/Trips"
import canada from "../assets/images/canada.jpg"
import abuja from "../assets/images/abuja.jpg"
import ibadan from "../assets/images/ibadan.jpg"
import kano from "../assets/images/kano.jpg"
import japan from "../assets/images/japan.jpg"
import lagos from "../assets/images/lagos.jpg"
import ny2 from "../assets/images/ny2.jpg"
import london from "../assets/images/london.jpg"
import SA from "../assets/images/SA.jpg"

const  Destination =()=>{
  

    return(
        <>
        <Navbar/>
<div className="w-full">
<div className="bg-no-repeat py-14 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/dest.jpg')] h-80  md:h-96  w-full" style={{backgroundImage : `url(${dest})`}}> 

<div className="sm:px-11 md:px-16 px-6   py-36  sm:w-1/2 w-full">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
Where we fly
</h1>
</div>

</div>


  


<div className="container my-12 mx-auto px-4 md:px-10">
    <div className="w-full text-center">
        
<h1 className="md:text-3xl sm:text-2xl font-normal text-xl ">Start planning your next trip</h1>   
<p className="py-3 font-light">Thinking of going somwhere soon? Here's some ideas to get you started</p>
    </div>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

    <Trips image={canada} name={"Canada"} />
<Trips image={abuja}  name={"Abuja"} />
<Trips image={japan}  name={"Japan"} />
<Trips image={ibadan}  name={"Ibadan"} />
<Trips image={kano}  name={"Kano"} />
<Trips image={lagos}  name={"Lagos"} />
<Trips image={ny2}  name={"New York"} />
<Trips image={SA}  name={"South Africa"} />
<Trips image={london}  name={"London"} />

    </div>

    
</div>

</div>
<Footer/>
</>
    )
}

export default Destination