import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import book from "../assets/images/take.jpg"
import Book from "../components/Book"
import "../App.css"
const  Booking =()=>{
    return(
        <>
        <Navbar/>
<div className="w-full">
<div className="bg-no-repeat py-14 bg-cover bg-center bg-fixed sm:bg-[url('../assets/images/book.jpg')] h-80  md:h-96  w-full" style={{backgroundImage : `url(${book})`}}> 

<div className="sm:px-11 md:px-16 px-6   py-36  sm:w-1/2 w-full">
<h1 className="text-white text-2xl font-bold sm:text-4xl ">
    Booking
</h1>
</div>

</div>


<div className="w-full my-12 text-center">
        
        <h1 className="md:text-2xl sm:text-xl text-xl ">Book your next trip online</h1>   
     
            </div>
            <Book/>

<hr className="w-full my-16" />

</div>



<Footer/>
</>
    )
}

export default Booking