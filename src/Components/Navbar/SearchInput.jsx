import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useFoodListContext } from '../../assets/Contexts/ListFoodContext'; 
export default function SearchInput() {
  const [value , setValue] = useState('')
  const { originalList: listFood, dispatchFood: dispatchListFood } = useFoodListContext(); 
  const searchRef = useRef(null)
  const normalizeText = (text) => {
    return text
      .toLowerCase()       
      .trim()             
      .replace(/\s+/g, ' ') 
  }
  const handleSearch = ()=>{
    console.log(value);
    dispatchListFood({type:'FETCH_START',payload:{loading:true}})
    let filters = listFood.originalList?.filter((f,i)=>{
      let title= value
      const normalizedInput = normalizeText(title);
      if( normalizedInput == '') {
        return normalizeText(f.strMeal)
      }
      else{
        return normalizeText(f.strMeal).includes(normalizedInput)
      }
   
     })
     dispatchListFood({
       type: "FILTER",
       payload: { 
         loading: false,
         originalList:filters ,
         isNull : true}
     });
  }
  const handleKeyup = (e)=>{;
    if(e.target.value == ''){
       dispatchListFood({
         type: "FILTER",
         payload: { 
           loading: false,
           originalList:listFood.originalList ,
           isNull : true}
       });
    }
    else{
      dispatchListFood({type:'FETCH_START',payload:{loading:true}})
      let filters = listFood.originalList?.filter((f,i)=>{
        let title= e.target.value
        const normalizedInput = normalizeText(title);
        if( normalizedInput == '') {
          return normalizeText(f.strMeal)
        }
        else{
          return normalizeText(f.strMeal).includes(normalizedInput)
        }
     
       })
       dispatchListFood({
        type: "FILTER",
        payload: { 
          loading: false,
          originalList:filters ,
          isNull : true}
      });
    }
  }
  return (
    <div className="SearchBox ml-5 w-full flex justify-end  border-[1px] border-slate-300 rounded-[4px] max-w-[40%] items-center relative">
        <input type="text" id="Search" onKeyUp={(e)=>handleKeyup(e)}
        onChange={(e)=> setValue(e.target.value)} value={value}
        placeholder="Search foods ..." className="w-full h-[35px] text-right pr-[40px]
        outline-none placeholder:font-light placeholder:font-IranSans300  placeholder:text-slate-800 text-slate-800
         placeholder:text-sm text-sm font-light font-IranSans300"/>
        <label htmlFor="Search" onClick={handleSearch} ref={searchRef} className="absolute right-[12px] hover:cursor-pointer">
        <IoIosSearch />
        </label>
    </div>
  )
}
