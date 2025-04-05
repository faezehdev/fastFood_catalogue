import { useEffect } from "react";
import { useFoodContext } from '../../assets/Contexts/foodContext';
import Spinner from "../../assets/Shares/Spinner";
import axios from '../../axios';
import { useFoodListContext } from '../../assets/Contexts/ListFoodContext'; 
export default function MenuItem() {
  const { food: menuItems, dispatchFood: dispatchMenu } = useFoodContext(); 
  const { originalList: listFood, dispatchFood: dispatchListFood } = useFoodListContext(); 
 useEffect(()=>{
  dispatchMenu({type:'FETCH_START',payload:{loading:true}})
      const fetchCategories = async ()=>{
      const response = await axios.get('/categories.php')
      dispatchMenu({type:'FETCH_SUCCESS',payload:{loading:false,data:response.data.categories}})
      }
      fetchCategories()
 },[])

 const FilterItems = (event)=>{
  dispatchListFood({type:'FETCH_START',payload:{loading:true}})
 let filters = listFood.originalList?.filter((f,i)=>{
   let title=event.target.innerHTML
   
   if(event.target.getAttribute('id') == 'all'){
    return f.strMeal
   }
    return f.strMeal.includes(title)
  })
  dispatchListFood({
    type: "FILTER",
    payload: { 
      loading: false,
      originalList:filters }
  });
 }
 return (
  <>
    {
      menuItems.loading ? (
        <Spinner />
      ) : (
        <>
          <li
            onClick={(event) => FilterItems(event)} id="all"
            className="menuItem w-auto flex justify-center hover:cursor-pointer
              items-center font-light font-IranSans300 hover:text-orange-600 duration-200
              text-sm text-slate-800">
            all fastfood
          </li>

          {
            menuItems.foods?.filter((f, i) => i < 5).map((f) => (
              <li
                onClick={(event) => FilterItems(event)}
                id={f.idCategory}
                key={f.idCategory}
                className="menuItem w-auto flex justify-center hover:cursor-pointer
                  items-center font-light font-IranSans300 hover:text-orange-600 duration-200
                  text-sm text-slate-800">
                {f.strCategory}
              </li>
            ))
          }
        </>
      )
    }
  </>
)

}
