
import { useEffect, useReducer } from 'react'
import Product from './Product'
import Spinner from "../../assets/Shares/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { useFoodListContext } from '../../assets/Contexts/ListFoodContext'; 
export default function ListPro() {
    const { originalList:listPros, dispatchFood:dispatchLists} = useFoodListContext();
   useEffect(()=>{ 
    dispatchLists({type:'FETCH_START',payload:{loading:true}})
   },[])
  return (
   <div className="products pb-5 mx-auto w-[70%] max-w-[1400px] grid grid-cols-3 gap-5" dir='rtl'>
      

        {
             listPros.loading ? (
             <Spinner className="absolute left-0 right-0 mx-auto"/>
             ):
             (
              listPros.filteredList.length == 0 && listPros.isNull ? (
                <motion.div
                initial={{ opacity: 0, right: 20 }}
                animate={{ opacity: 1, right: 0 }}
                exit={{ opacity: 0,right: -20 }}
                transition={{ duration: 0.3, delay:2 * 0.05 }}
              >
                <div className="error absolute left-0 right-0 w-full flex flex-col justify-center items-center">
       <p className='text-center text-lg text-slate-800 font-Roboto800 mx-auto  capitalize'>
                  products not found
                </p>
                <img src="./images/404.jpg" alt="" className='w-[400px] mt-[2em]' />
                </div>
                </motion.div>
         
              ):

              (
                listPros.filteredList?.filter((f,i)=>i<20).map((f,i)=>(
                  <motion.div
                  key={f.idMeal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Product {...f} key={f.idMeal} />
                </motion.div>
                 ))
              )
             
             )
           }
     </div> 
  )
}
