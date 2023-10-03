
import { Link } from "react-router-dom";
const Trips=(props)=>{
    return(

    
       



    
        <div class="my-2.5  px-1  w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

        
            <article class="overflow-hidden rounded-lg shadow-lg">

                <Link to={"/Destination"}>
                    <img alt="Placeholder" class="block h-auto w-full  transition-all ease-in duration-700"  src={props.image}/>
                </Link>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline  text-black" href="#">
                            {props.name}
                        </a>
                    </h1>
                  
                </header>
{/* 
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer> */}

            </article>
            

        </div>
       

 
    )
}
export default Trips;