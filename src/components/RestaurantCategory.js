import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
    const [accordiantoggle,setAccordianToggle] = useState(false)
    console.log(data);


    const handleAccordian =()=>{
   setAccordianToggle(!accordiantoggle);
    }
    return(
        <div>
            {/* Header */}
            <div className=" w-6/12  mx-auto bg-gray-50 shadow-lg my-4 ">
            <div className="flex justify-between p-4" onClick ={ handleAccordian}>
   <span className="font-bold text-lg">{data.title}({data?.itemCards?.length})</span>
   <span className={`${accordiantoggle ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
</span>
   
            </div>
            
           { accordiantoggle &&  <ItemList items={data?.itemCards}/>  }

            {/* Accordain Body */}

        

        </div>
        </div>
    )
}
export default RestaurantCategory;