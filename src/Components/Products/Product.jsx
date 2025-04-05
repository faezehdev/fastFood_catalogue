import { SlBasket } from "react-icons/sl";
export default function Product({strMeal,strMealThumb}) {
  return (
    <div className="ProductBox w-full flex flex-col gap-2 rounded-[8px] bg-white">
     <div className="IMG max-h-[200px] w-full flex justify-center relative rounded-[8px]">
        {/* <span className="Price absolute right-2.5
        top-1.5 z-0 w-max px-[.5em] py-[.5em] rounded-[8px] bg-green-500 text-xs text-white font-medium font-Roboto400">
            cost : $500.000
        </span> */}
        <div className="pro_placeholder w-full flex justify-center items-center">
        <img src={strMealThumb} alt={strMeal} className="w-full max-h-[200px] object-cover rounded-t-[8px]" />
        </div>
     
     </div>
     <div className="Title min-h-[50px] w-full flex justify-center items-center py-[.5em]">
        <p className="text-slate-800 text-lg font-medium font-Roboto400 text-center">  {strMeal}</p>
     </div>

     {/* <div className="btn w-full mt-auto flex justify-center pb-5">
        <button className="AddToBasket w-[90%] group/btn relative z-10 before:contents-[''] before:absolute before:w-0
        before:h-full before:top-0 before:left-0 before:bg-green-500 before:z-10 before:duration-300 hover:before:w-full
         mx-auto flex hover:cursor-pointer justify-center items-center py-[.4em]
        border-[1px] border-green-500 gap-2 rounded-[8px] before:rounded-[8px]">
            <span className="icon w-auto relative z-[11] group-hover/btn:text-white duration-300 flex justify-center items-center">
            <SlBasket style={{fill:'oklch(72.3% 0.219 149.579)'}} />
            </span>
            <span className="text relative z-[11] w-auto flex group-hover/btn:text-white duration-300 justify-center items-center
             text-green-500 text-xs font-bold font-IranSans800">
                Add to basket
            </span>
        </button>
     </div> */}
    </div>
  )
}
